import SEO from '../../components/SEO'

type FaqItem = { q: string; a: string }
type FaqGroup = { heading: string; items: FaqItem[] }

const faqGroups: FaqGroup[] = [
  {
    heading: 'About WorkplaceHQ',
    items: [
      {
        q: 'What does WorkplaceHQ do?',
        a: 'WorkplaceHQ helps organizations build AI-ready, high-performing teams through structured training programs, workshops, and advisory consulting. We work with businesses across Africa to close skills gaps and improve how teams operate.',
      },
      {
        q: 'What is Lagos Jobs and how does it relate to WorkplaceHQ?',
        a: 'Lagos Jobs is WorkplaceHQ’s careers product — a job listings and career-support experience for job seekers in Lagos. It runs under the same company but has its own navigation, branding, and listings at /lagos-jobs.',
      },
      {
        q: 'Who is WorkplaceHQ for?',
        a: 'Two audiences: businesses seeking training, workshops, or advisory support to strengthen their teams, and individual job seekers using Lagos Jobs to find and apply for roles.',
      },
    ],
  },
  {
    heading: 'Services & Training',
    items: [
      {
        q: 'What training and workshop formats are available?',
        a: 'We offer structured corporate training programs and hands-on workshops, tailored to the team or skill gap you’re addressing. Visit the Services page for current program details.',
      },
      {
        q: 'Do you offer one-off consulting or only long-term engagements?',
        a: 'Both. Submitting an inquiry through the Contact page does not commit you to a formal engagement — it starts a conversation so we can scope what your organization actually needs.',
      },
      {
        q: 'How do I request a consultation?',
        a: 'Use the Contact page, or the consultation email link on the homepage. We’ll respond and route your request to the right team.',
      },
    ],
  },
  {
    heading: 'Resources & Insights',
    items: [
      {
        q: 'Are the whitepapers, toolkits, and reports free?',
        a: 'Yes. Resources are free to download from the Resources page — you’ll be asked for your name and email so we can send the file and keep you informed of new releases.',
      },
      {
        q: 'What happens with my email after I request a resource?',
        a: 'We use it to deliver the requested file and log the request. See our Privacy Policy for full details on data use, retention, and your rights.',
      },
      {
        q: 'Where can I read WorkplaceHQ’s articles and insights?',
        a: 'The Insights section publishes articles on team performance, training, and workplace trends relevant to organizations we work with.',
      },
    ],
  },
  {
    heading: 'Lagos Jobs (Job Seekers)',
    items: [
      {
        q: 'How do I apply for a job on Lagos Jobs?',
        a: 'Browse listings at /lagos-jobs/listings and use the apply link on a listing — most route directly to a contact email for that role.',
      },
      {
        q: 'Is Lagos Jobs free for job seekers?',
        a: 'Yes, browsing and applying to listings on Lagos Jobs is free for job seekers.',
      },
      {
        q: 'How do I contact the Lagos Jobs team?',
        a: 'Use the Contact page under /lagos-jobs/contact, or email lagosjobsinfo@gmail.com directly.',
      },
    ],
  },
  {
    heading: 'Privacy & Data',
    items: [
      {
        q: 'What personal data does WorkplaceHQ collect?',
        a: 'Primarily what you submit through contact forms, resource requests, or job applications — name, email, and any message content — plus basic technical data like browser type. Full detail is in our Privacy Policy.',
      },
      {
        q: 'Can I request that my data be deleted?',
        a: 'Yes. Contact us using the details on our Privacy Policy page and we’ll process the request.',
      },
      {
        q: 'Does WorkplaceHQ sell my information?',
        a: 'No. We do not sell personal information. It’s only used to respond to your request or deliver the service you asked for.',
      },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    }))
  ),
}

export default function FAQ() {
  return (
    <div style={{ backgroundColor: 'var(--whq-bg)', minHeight: '100vh', fontFamily: 'var(--font-body)' }}>
      <SEO
        title="Frequently Asked Questions | WorkplaceHQ"
        description="Answers to common questions about WorkplaceHQ's training and advisory services, Lagos Jobs listings, resources, and data privacy."
        path="/faq"
        structuredData={faqSchema}
      />

      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        <div className="relative z-10 mx-auto max-w-[960px]">
          <span className="mb-3 block text-xs font-bold uppercase tracking-wider" style={{ color: '#1DA54A' }}>
            Support
          </span>
          <h1 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight" style={{ color: '#111827' }}>
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed sm:text-lg" style={{ color: '#6B7280' }}>
            Answers to the questions we hear most from organizations, job seekers, and site visitors. Can’t find
            what you need? <a href="/contact" style={{ color: '#0B3C2D', fontWeight: 600 }}>Contact us</a>.
          </p>

          <div className="mt-10 space-y-10">
            {faqGroups.map((group) => (
              <section key={group.heading}>
                <h2 className="font-display text-xl font-bold" style={{ color: '#111827' }}>
                  {group.heading}
                </h2>
                <div
                  className="mt-4 divide-y rounded-3xl border bg-white shadow-sm"
                  style={{ borderColor: '#E5E1D8' }}
                >
                  {group.items.map((item) => (
                    <details key={item.q} className="group p-6 sm:p-7" style={{ borderColor: '#E5E1D8' }}>
                      <summary className="cursor-pointer list-none text-sm font-semibold sm:text-base" style={{ color: '#111827' }}>
                        <span className="flex items-center justify-between gap-4">
                          {item.q}
                          <span
                            className="shrink-0 text-lg font-normal transition-transform duration-150 group-open:rotate-45"
                            style={{ color: '#1DA54A' }}
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed sm:text-base" style={{ color: '#545454' }}>
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
