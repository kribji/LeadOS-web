import React from 'react';
import Link from 'next/link';

const teal = '#00d4aa';
const body = '#dce8f0';
const muted = '#7a9ab0';
const dividerColor = '#00422e';

const heading = { color: teal, fontSize: '18px', fontWeight: '500', marginTop: '40px', marginBottom: '12px' } as React.CSSProperties;
const p = { color: body, lineHeight: '1.8', marginBottom: '12px' } as React.CSSProperties;
const ul = { color: body, lineHeight: '2', paddingLeft: '20px' } as React.CSSProperties;
const hr = { borderColor: dividerColor, margin: '32px 0' } as React.CSSProperties;

export default function TermsPage() {
  return (
    <main style={{ backgroundColor: '#080e12', color: '#dce8f0', minHeight: '100vh' }}>
      <div style={{ maxWidth: '768px', margin: '0 auto', padding: '64px 24px' }}>

        <Link href="/" style={{ color: muted, textDecoration: 'none', fontSize: '14px' }}>
          ← Back to leados.tech
        </Link>

        <h1 style={{ color: body, fontSize: '32px', fontWeight: '300', marginTop: '32px', marginBottom: '8px' }}>
          Terms of Service
        </h1>
        <p style={{ color: muted, fontSize: '14px', marginBottom: '48px' }}>
          Effective date: April 10, 2026 | Last updated: April 10, 2026
        </p>

        <hr style={hr} />

        <h2 style={heading}>1 — Acceptance of Terms</h2>
        <p style={p}>
          By creating an account or using LeadOS (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service. These Terms constitute a legally binding agreement between you (&quot;User&quot;) and Kristine Bj&oslash;rgan, operating as LeadOS, a sole trader (enkeltpersonforetak) based in Norway (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
        </p>

        <hr style={hr} />

        <h2 style={heading}>2 — Description of Service</h2>
        <p style={p}>LeadOS is an AI-powered B2B lead generation software-as-a-service (SaaS). The Service allows users to:</p>
        <ul style={ul}>
          <li>Input their company URL to generate an Ideal Customer Profile (ICP)</li>
          <li>Discover companies showing buying signals using AI-powered web search</li>
          <li>Enrich discovered companies with contact information from third-party databases</li>
          <li>Generate personalised cold outreach drafts using AI</li>
        </ul>
        <p style={{ ...p, marginTop: '12px' }}>
          LeadOS operates as a human-in-the-loop system. No emails, messages, or communications are sent to any third party without the User&apos;s explicit manual action. We are a tool, not an automated sender.
        </p>

        <hr style={hr} />

        <h2 style={heading}>3 — No Guarantee of Results</h2>
        <p style={p}>The Service uses artificial intelligence to generate leads, scores, and outreach drafts. We make no representation or warranty that:</p>
        <ul style={ul}>
          <li>Any leads generated will result in sales, meetings, or business outcomes</li>
          <li>Contact information provided is accurate, current, or deliverable</li>
          <li>AI-generated outreach drafts are appropriate for your specific use case</li>
          <li>The Service will identify all relevant prospects in your market</li>
        </ul>
        <p style={{ ...p, marginTop: '12px' }}>
          Lead scores, buying signals, and ICP matches are advisory suggestions only. You are solely responsible for evaluating and acting on any information provided by the Service.
        </p>

        <hr style={hr} />

        <h2 style={heading}>4 — AI-Specific Disclaimer</h2>
        <p style={p}>
          LeadOS uses artificial intelligence including large language models (Claude by Anthropic) to generate lead scores, buying signal analysis, and outreach drafts. You acknowledge and agree that:
        </p>
        <ul style={ul}>
          <li>AI-generated content may be incorrect, incomplete, biased, or hallucinated</li>
          <li>You must review all AI-generated output before acting on it</li>
          <li>We are not liable for any decisions made based on AI-generated content</li>
          <li>AI output is not a substitute for professional sales, legal, marketing, or business advice</li>
          <li>Lead scores are probabilistic estimates, not facts</li>
          <li>Contact details sourced via AI-assisted enrichment may be outdated or inaccurate</li>
        </ul>
        <p style={{ ...p, marginTop: '12px' }}>
          LeadOS is classified as a limited-risk AI system under the EU AI Act. We comply with applicable transparency obligations, including disclosure that you are interacting with an AI-powered system.
        </p>

        <hr style={hr} />

        <h2 style={heading}>5 — Acceptable Use</h2>
        <p style={p}>You agree to use the Service only for lawful B2B sales prospecting purposes. You must not use the Service to:</p>
        <ul style={ul}>
          <li>Send unsolicited bulk email (spam) in violation of applicable law including GDPR, CAN-SPAM, or CASL</li>
          <li>Harass, threaten, or intimidate any individual</li>
          <li>Violate any applicable law or regulation</li>
          <li>Scrape, copy, or reproduce the Service or its underlying technology</li>
          <li>Attempt to reverse engineer, decompile, or extract source code</li>
          <li>Generate leads for illegal products or services</li>
          <li>Impersonate any person or organisation in outreach</li>
          <li>Resell, sublicense, or white-label the Service without written permission</li>
          <li>Use the Service on behalf of a direct competitor to LeadOS</li>
        </ul>
        <p style={{ ...p, marginTop: '12px' }}>
          You are solely responsible for ensuring your outreach activities comply with all applicable laws in your jurisdiction and the jurisdiction of your recipients.
        </p>

        <hr style={hr} />

        <h2 style={heading}>6 — Your Responsibilities as Data Controller</h2>
        <p style={p}>
          When using LeadOS to discover and store information about third-party contacts (leads), you act as an independent data controller under GDPR. This means:
        </p>
        <ul style={ul}>
          <li>You are responsible for having a lawful basis for processing lead data</li>
          <li>You are responsible for honouring any opt-out or erasure requests from leads</li>
          <li>You are responsible for the content of any outreach you send</li>
          <li>We are not responsible for how you use, store, or act on lead data after it is generated</li>
        </ul>
        <p style={{ ...p, marginTop: '12px' }}>
          We process lead data on your behalf as a data processor. Our data processing practices are described in our Privacy Policy.
        </p>

        <hr style={hr} />

        <h2 style={heading}>7 — Payment and Billing</h2>
        <ul style={ul}>
          <li>The Service is offered on a subscription basis, billed monthly or annually</li>
          <li>All prices are listed in USD and exclude applicable taxes</li>
          <li>For users in Norway and the EU, VAT is handled automatically by Lemonsqueezy, our merchant of record</li>
          <li>Subscriptions renew automatically at the end of each billing period</li>
          <li>You authorise us to charge your payment method on a recurring basis</li>
          <li>We reserve the right to change pricing with 30 days written notice</li>
          <li>Price changes will not affect your current billing period</li>
        </ul>

        <hr style={hr} />

        <h2 style={heading}>8 — 14-Day Money Back Guarantee</h2>
        <p style={p}>
          If you are not satisfied with the Service within 14 days of your first payment, contact us at <a href="mailto:hello@leados.tech" style={{ color: teal }}>hello@leados.tech</a> for a full refund. This applies once per customer. After 14 days, all payments are non-refundable. There is no free trial.
        </p>

        <hr style={hr} />

        <h2 style={heading}>9 — Cancellation</h2>
        <p style={p}>
          You may cancel your subscription at any time from your account settings or by emailing <a href="mailto:hello@leados.tech" style={{ color: teal }}>hello@leados.tech</a>. Cancellation takes effect at the end of your current billing period. You will retain access to the Service until that date. We do not offer pro-rated refunds for partial billing periods except within the 14-day money back guarantee window.
        </p>

        <hr style={hr} />

        <h2 style={heading}>10 — Intellectual Property</h2>
        <ul style={ul}>
          <li>LeadOS, its logo, design, code, and all associated intellectual property are owned exclusively by Kristine Bj&oslash;rgan</li>
          <li>You are granted a limited, non-exclusive, non-transferable licence to use the Service for its intended purpose during your subscription</li>
          <li>You retain ownership of all data you input into the Service</li>
          <li>AI-generated content is provided to you under the same licence as the Service</li>
          <li>You may not reproduce, distribute, or create derivative works from any part of the Service</li>
        </ul>

        <hr style={hr} />

        <h2 style={heading}>11 — Third-Party Services</h2>
        <p style={p}>
          The Service integrates with third-party providers including Anthropic, Supabase, Serper, Apollo, and Lemonsqueezy. We are not responsible for the availability, accuracy, or conduct of these third-party services. Their use is governed by their own terms of service.
        </p>

        <hr style={hr} />

        <h2 style={heading}>12 — Service Availability</h2>
        <p style={p}>We strive to maintain high availability but do not guarantee uninterrupted access to the Service. We may:</p>
        <ul style={ul}>
          <li>Perform scheduled maintenance with advance notice where possible</li>
          <li>Experience downtime due to third-party service failures</li>
          <li>Modify, suspend, or discontinue features with reasonable notice</li>
          <li>Terminate the Service entirely with 30 days notice and a pro-rated refund</li>
        </ul>

        <hr style={hr} />

        <h2 style={heading}>13 — Limitation of Liability</h2>
        <p style={p}>To the maximum extent permitted by Norwegian and applicable EU law:</p>
        <ul style={ul}>
          <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
          <li>We are not liable for lost profits, lost revenue, lost data, or lost business opportunities</li>
          <li>We are not liable for damages resulting from your use or inability to use the Service</li>
          <li>We are not liable for the accuracy of AI-generated content, lead scores, or contact information</li>
          <li>Our total liability to you for any claim arising from the Service shall not exceed the amount you paid us in the 3 months preceding the claim</li>
        </ul>
        <p style={{ ...p, marginTop: '12px' }}>
          Nothing in these Terms excludes liability for fraud, gross negligence, or wilful misconduct, or any liability that cannot be excluded under Norwegian law.
        </p>

        <hr style={hr} />

        <h2 style={heading}>14 — Indemnification</h2>
        <p style={p}>You agree to indemnify and hold harmless Kristine Bj&oslash;rgan, LeadOS, and its service providers from any claims, damages, losses, or expenses (including legal fees) arising from:</p>
        <ul style={ul}>
          <li>Your use of the Service in violation of these Terms</li>
          <li>Your outreach activities and their consequences</li>
          <li>Your violation of any third party&apos;s rights</li>
          <li>Your violation of any applicable law or regulation</li>
        </ul>

        <hr style={hr} />

        <h2 style={heading}>15 — Disclaimer of Warranties</h2>
        <p style={p}>
          The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will meet your requirements or that it will be error-free.
        </p>

        <hr style={hr} />

        <h2 style={heading}>16 — Force Majeure</h2>
        <p style={p}>
          We shall not be liable for any failure or delay in performance of the Service resulting from causes beyond our reasonable control, including but not limited to: acts of God, natural disasters, war, terrorism, civil unrest, government actions, pandemics, power failures, internet outages, or failures of third-party infrastructure providers including cloud hosting, AI API providers, or payment processors. In such events we will make reasonable efforts to restore the Service as quickly as possible.
        </p>

        <hr style={hr} />

        <h2 style={heading}>17 — Governing Law and Dispute Resolution</h2>
        <p style={p}>
          These Terms are governed by the laws of Norway. Any disputes arising from or related to these Terms or the Service shall first be attempted to be resolved through good faith negotiation. If negotiation fails, disputes shall be submitted to the ordinary courts of Norway, with Oslo District Court (Oslo tingrett) as the agreed legal venue.
        </p>
        <p style={p}>
          If you are a consumer in the EU, you may also use the EU Online Dispute Resolution platform at ec.europa.eu/consumers/odr.
        </p>

        <hr style={hr} />

        <h2 style={heading}>18 — Severability</h2>
        <p style={p}>
          If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
        </p>

        <hr style={hr} />

        <h2 style={heading}>19 — Entire Agreement</h2>
        <p style={p}>
          These Terms, together with our Privacy Policy, constitute the entire agreement between you and LeadOS regarding the Service and supersede all prior agreements.
        </p>

        <hr style={hr} />

        <h2 style={heading}>20 — Changes to Terms</h2>
        <p style={p}>
          We may update these Terms from time to time. We will notify you by email at least 14 days before material changes take effect. Continued use of the Service after that date constitutes acceptance of the updated Terms. If you do not agree to the updated Terms, you must cancel your subscription before the changes take effect.
        </p>

        <hr style={hr} />

        <h2 style={heading}>21 — Contact</h2>
        <p style={p}>Kristine Bj&oslash;rgan / LeadOS</p>
        <p style={p}>
          <a href="mailto:hello@leados.tech" style={{ color: teal }}>hello@leados.tech</a>
        </p>
        <p style={p}>Norway</p>

        <hr style={hr} />

        <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
          <Link href="/privacy" style={{ color: muted, fontSize: '12px', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="/" style={{ color: muted, fontSize: '12px', textDecoration: 'none' }}>Back to LeadOS</Link>
        </div>

      </div>
    </main>
  );
}
