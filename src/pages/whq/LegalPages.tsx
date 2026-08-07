type LegalSection = {
  title: string
  body: string[]
}

function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string
  title: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        <div className="absolute -right-16 -top-16 hidden h-64 w-64 pointer-events-none sm:block">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      intro="We collect only the information needed to respond to inquiries, coordinate services, and improve how WorkplaceHQ supports organizations and candidates."
      sections={[
        {
          title: 'Information We Receive',
          body: [
            'When you contact WorkplaceHQ or Lagos Jobs, we may receive your name, email address, phone number, organization details, and any project or advisory notes you choose to share.',
            'We use this information to respond to requests, route inquiries to the right team, and deliver the service or consultation you asked for.',
          ],
        },
        {
          title: 'How We Use Information',
          body: [
            'Submitted details are used for communication, service delivery, internal follow-up, and improving the relevance of our advisory or recruitment support.',
            'We do not sell personal information. We only share information internally or with service partners when that is necessary to fulfill a request you initiated.',
          ],
        },
        {
          title: 'Retention And Contact',
          body: [
            'We keep inquiry records only for as long as they remain operationally useful, legally required, or needed to continue a client or candidate relationship.',
            'For privacy questions or data requests, contact WorkplaceHQ through the main contact channels listed on the site.',
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
