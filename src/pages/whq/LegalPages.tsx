﻿import SEO from '../../components/SEO'

type LegalSection = {
  title: string
  body: string[]
  list?: string[]
}

function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  seoTitle,
  seoDescription,
  path,
  updated,
}: {
  eyebrow: string
  title: string
  intro: string
  sections: LegalSection[]
  seoTitle: string
  seoDescription: string
  path: string
  updated: string
}) {
  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <SEO title={seoTitle} description={seoDescription} path={path} />
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute -right-16 -top-16 hidden h-64 w-64 pointer-events-none sm:block">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="50" cy="50" r="44" stroke="#1DA54A" strokeWidth="2" opacity="0.3" />
            <circle cx="50" cy="50" r="14" fill="#1DA54A" opacity="0.18" className="brand-dot-pulse" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[960px]">
          <span className="mb-3 block text-xs font-bold uppercase tracking-wider" style={{ color: '#1DA54A' }}>
            {eyebrow}
          </span>
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight" style={{ color: '#111827' }}>
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed sm:text-lg" style={{ color: '#6B7280' }}>
            {intro}
          </p>
          <p className="mt-2 text-xs font-medium" style={{ color: '#9CA3AF' }}>
            Last updated: {updated}
          </p>

          <div
            className="mt-10 rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
            style={{ borderColor: '#E5E1D8' }}
          >
            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-display text-xl font-bold" style={{ color: '#111827' }}>
                    {section.title}
                  </h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-relaxed sm:text-base" style={{ color: '#545454' }}>
                        {paragraph}
                      </p>
                    ))}
                    {section.list && (
                      <ul className="ml-5 list-disc space-y-2">
                        {section.list.map((item) => (
                          <li key={item} className="text-sm leading-relaxed sm:text-base" style={{ color: '#545454' }}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      intro="This policy explains what information WorkplaceHQ collects across the WorkplaceHQ and Lagos Jobs experiences, why we collect it, and the choices you have."
      seoTitle="Privacy Policy | WorkplaceHQ"
      seoDescription="Learn what personal data WorkplaceHQ collects, how it's used, which third-party services we rely on, how long we keep it, and how to request access or deletion."
      path="/privacy"
      updated="[PLACEHOLDER: publish date, e.g. 29 August 2026]"
      sections={[
        {
          title: '1. Who We Are',
          body: [
            'WorkplaceHQ ("WorkplaceHQ", "we", "us", "our") operates this website, including the Lagos Jobs careers experience, from [PLACEHOLDER: registered company name and jurisdiction, e.g. "WorkplaceHQ Ltd, incorporated in Nigeria"]. This policy applies to all pages under this domain.',
            'This policy is written in plain language. If anything is unclear, contact us using the details in Section 8.',
          ],
        },
        {
          title: '2. Information We Collect',
          body: [
            'We collect information in two ways: what you give us directly, and what our systems collect automatically as you browse.',
          ],
          list: [
            'Contact form and consultation requests: name, email address, phone number, company/organization, and any message content you submit.',
            'Job applications and career inquiries (Lagos Jobs): name, email, phone number, CV/resume details, and application notes you choose to share.',
            'Resource downloads: name and email address, used to deliver the requested file and log the request.',
            'Admin account data: login credentials for authorized WorkplaceHQ staff only (not applicable to site visitors).',
            'Automatically collected data: IP address, browser type, device type, pages visited, and referring URL, typically gathered through hosting logs and any analytics tools we enable (see Section 4).',
          ],
        },
        {
          title: '3. How We Use Information',
          body: ['We use the information we collect to:'],
          list: [
            'Respond to inquiries and route them to the right team.',
            'Deliver services you request, such as sending a resource file or processing a job application.',
            'Operate, secure, and improve this website.',
            'Send confirmation or transactional emails related to a request you initiated (we do not send marketing email unless you separately opt in).',
            'Comply with legal obligations where applicable.',
          ],
        },
        {
          title: '4. Cookies and Analytics',
          body: [
            'This site may use essential cookies required for basic functionality (such as keeping the mobile menu or session state working) and, where enabled, analytics cookies to understand aggregate traffic patterns.',
            '[PLACEHOLDER: confirm whether Google Analytics or another analytics/advertising tool is active in production. If so, name the tool(s) here and update this section — e.g. "We use Google Analytics, which uses cookies to collect anonymized usage statistics." If not active, this sentence can be removed.]',
            'You can control or delete cookies through your browser settings at any time. Disabling cookies may affect some site functionality.',
          ],
        },
        {
          title: '5. Third-Party Services',
          body: ['We rely on the following third-party providers to operate this site and its forms. Each processes data under its own privacy policy:'],
          list: [
            'Supabase — database and authentication infrastructure used to store resource, insight, and admin records.',
            'Resend — transactional email delivery (e.g. sending requested resource links).',
            'Vercel — website hosting and serverless functions.',
            '[PLACEHOLDER: add any additional service if introduced later, e.g. an analytics or CRM provider.]',
          ],
        },
        {
          title: '6. Data Retention',
          body: [
            'We keep inquiry, application, and resource-request records only as long as they remain operationally useful — to respond to your request, maintain a client or candidate relationship, or meet legal requirements — after which they are deleted or anonymized.',
            '[PLACEHOLDER: confirm a specific retention period if your organization has one, e.g. "Inquiry records are retained for up to 24 months from last contact."]',
          ],
        },
        {
          title: '7. Your Rights',
          body: [
            'Depending on your location, you may have the right to access, correct, or request deletion of your personal information, and to object to or restrict certain processing.',
            'To exercise any of these rights, contact us using the details below. We will respond within a reasonable timeframe.',
          ],
        },
        {
          title: '8. Contact Us',
          body: [
            'For privacy questions, access requests, or deletion requests, contact WorkplaceHQ at [PLACEHOLDER: privacy contact email — currently using info@workplacehq.com, confirm before publishing].',
          ],
        },
      ]}
    />
  )
}

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      intro="By using this website, you agree to use the information and contact channels provided here for lawful business, career, and advisory purposes only."
      seoTitle="Terms of Service | WorkplaceHQ"
      seoDescription="Terms governing use of the WorkplaceHQ and Lagos Jobs website, including content accuracy, service scope, and liability."
      path="/terms"
      updated="[PLACEHOLDER: publish date]"
      sections={[
        {
          title: 'Use Of The Platform',
          body: [
            'Website content is provided for general informational, marketing, and intake purposes. Submitting an inquiry does not by itself create a formal consulting, recruitment, or advisory engagement.',
            'Users must provide accurate information when requesting contact, consultations, or service support.',
          ],
        },
        {
          title: 'Content And Opportunities',
          body: [
            'WorkplaceHQ and Lagos Jobs may update service descriptions, listings, pricing references, and operating information at any time without prior notice.',
            'Job and advisory information is presented in good faith, but availability, employer requirements, or service scope may change after publication.',
          ],
        },
        {
          title: 'Limitation Of Liability',
          body: [
            'We work to keep the site accurate and available, but we do not guarantee uninterrupted access or that every page, listing, or inquiry path will always be error free.',
            'Any formal client work, hiring support, or advisory engagement is governed by the specific agreement entered into after direct contact.',
          ],
        },
      ]}
    />
  )
}

export function SecurityPage() {
  return (
    <LegalPage
      eyebrow="Security"
      title="Security Overview"
      intro="WorkplaceHQ takes a practical approach to protecting inquiry data, contact channels, and site operations across both the enterprise and careers experiences."
      seoTitle="Security Overview | WorkplaceHQ"
      seoDescription="How WorkplaceHQ protects inquiry data and site operations, and how to report a security concern."
      path="/security"
      updated="[PLACEHOLDER: publish date]"
      sections={[
        {
          title: 'Operational Security',
          body: [
            'We restrict operational access to submitted inquiry information to the teams and personnel who need it for response, routing, and service delivery.',
            'Administrative and workflow processes are reviewed regularly to reduce the likelihood of accidental exposure or unauthorized handling.',
          ],
        },
        {
          title: 'Website Safeguards',
          body: [
            'This site is deployed through managed web infrastructure and benefits from standard browser and hosting protections such as HTTPS delivery and controlled build outputs.',
            'We also monitor the product experience for broken flows so that contact routes stay dependable for clients and candidates.',
          ],
        },
        {
          title: 'Reporting Concerns',
          body: [
            'If you believe you have identified a security issue related to this website or its contact flows, please report it directly through WorkplaceHQ contact channels with as much detail as possible.',
            'We review credible reports promptly and prioritize remediation when an issue affects user trust, privacy, or service continuity.',
          ],
        },
      ]}
    />
  )
}
