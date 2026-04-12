import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are an expert B2B sales analyst. Your job is to extract a structured 
Ideal Customer Profile (ICP) configuration from a user's onboarding answers.

Return ONLY a valid JSON object — no markdown, no explanation, no code fences.

JSON shape:
{
  "product_description": "string — one sentence describing what the product does",
  "target_roles": ["string", ...],
  "target_industries": ["string", ...],
  "company_size": "string — e.g. '10–200 employees' or 'any'",
  "geographies": ["string", ...],
  "value_proposition": "string — the core outcome the product delivers",
  "disqualifiers": ["string", ...]
}

Instructions per field:

For product_description:
- Summarise the product in one clear sentence from the user's answers
- Focus on what it does and who it's for

For target_roles:
- Extract decision-maker job titles as short tags (2-4 words each)
- Examples: 'Head of Sales', 'CFO', 'IT Manager', 'Procurement Lead'
- Maximum 6 role tags

For target_industries:
- Extract industry verticals as short tags (1-3 words each)
- Examples: 'SaaS', 'Construction', 'Healthcare', 'Logistics'
- Maximum 6 industry tags

For company_size:
- Return a concise size range string, e.g. '20–500 employees'
- If user says any size or is unsure, return 'any'

For geographies:
- Return country or region names as short tags
- Examples: 'Norway', 'Nordics', 'DACH', 'North America'
- If not specified, return ['Global']

For value_proposition:
- One sentence describing the outcome/benefit the product delivers
- Focus on the business result, not features

For the disqualifiers field:
- Extract genuine disqualifiers as short tags (2-4 words each)
- Examples of genuine disqualifiers: 'public sector', 'under 10 employees', 
  'consumer brands', 'no sales team', 'B2C only', 'non-profit'
- If the user says ANY of the following, return an empty array [] for disqualifiers:
  'nothing', 'none', 'no bad fit', 'everyone', 'anyone',
  'all companies', 'not sure', 'no one', 'nobody',
  'all types', 'any company', 'global market',
  or any variation indicating there are no disqualifiers
- Do NOT create tags like 'no bad fit', 'nothing', 'everyone qualifies' or similar
- Only include genuine specific disqualifiers the user explicitly mentioned
- Maximum 5 disqualifier tags
- If genuinely unclear, return empty array []`;

interface ExtractConfigBody {
  answers: Record<string, string>;
}

export async function POST(req: NextRequest) {
  try {
    const body: ExtractConfigBody = await req.json();
    const { answers } = body;

    if (!answers || typeof answers !== "object") {
      return NextResponse.json(
        { error: "Missing or invalid answers field" },
        { status: 400 }
      );
    }

    const userMessage = `Here are the onboarding answers from the user. Extract the ICP config.

${Object.entries(answers)
  .map(([question, answer]) => `Q: ${question}\nA: ${answer}`)
  .join("\n\n")}`;

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "ANTHROPIC_API_KEY not configured" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return NextResponse.json(
        { error: "Anthropic API error", detail: err },
        { status: 502 }
      );
    }

    const data = await response.json();
    const rawText: string = data.content?.[0]?.text ?? "";

    let config: unknown;
    try {
      config = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { error: "Failed to parse Claude response as JSON", raw: rawText },
        { status: 422 }
      );
    }

    return NextResponse.json({ config });
  } catch (err) {
    console.error("[extract-config]", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
