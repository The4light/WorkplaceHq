import {
  GraduationCap,
  Users,
  Briefcase,
  Palette,
  UserCheck,
  Globe,
  FileText,
  CreditCard,
  UserPlus,
} from 'lucide-react'

export type ServiceId = 'training' | 'workshops' | 'consulting' | 'business-branding'

export interface DrawerContent {
  title: string
  subtitle: string
  badge?: string
  description: string
  whoItsFor: string[]
  deliverables: string[]
  outcomes: string[]
}

export const services = [
  {
    id: 'training' as ServiceId,
    label: 'Training',
    icon: GraduationCap,
    description:
      'Continuous skill acquisition through instruction and structured learning. Available as virtual training, one-on-one coaching, or group sessions.',
  },
  {
    id: 'workshops' as ServiceId,
    label: 'Workshops',
    icon: Users,
    description:
      'Interactive, practical working sessions focused on immediate execution. Build real outputs in live hands-on sprints to achieve a specific result.',
  },
  {
    id: 'consulting' as ServiceId,
    label: 'Consulting',
    icon: Briefcase,
    description:
      'Direct strategic advisory to identify structural blockers and execute performance systems, workforce tech, and organizational architecture.',
  },
  {
    id: 'business-branding' as ServiceId,
    label: 'Branding for Your Business',
    icon: Palette,
    description:
      'Corporate brand identity and market positioning frameworks to elevate enterprise authority and visual presence.',
  },
]

export const consultingPhases = [
  {
    phase: 'Consultation 01',
    title: 'Recruitment',
    duration: 'Talent Acquisition',
    icon: UserCheck,
    desc: 'Design of structured hiring pipelines, candidate screening scorecards, and high-retention talent acquisition frameworks.',
    deliverables: ['Hiring Scorecard Framework', 'Interview Structure Redesign', 'Sourcing Strategy'],
    whoItsFor: ['HR Directors', 'Talent Acquisition Leads', 'Growing Enterprises'],
    outcomes: ['Reduced time-to-hire', 'Higher candidate retention', 'Standardized hiring metrics'],
  },
  {
    phase: 'Consultation 02',
    title: 'Business Branding',
    duration: 'Corporate Identity',
    icon: Palette,
    desc: 'Strategic positioning for enterprise visibility, market messaging, and brand architecture development.',
    deliverables: ['Corporate Brand Architecture', 'Value Proposition Design', 'Brand Messaging Playbook'],
    whoItsFor: ['Executive Leadership', 'Marketing Teams', 'Rebranding Organizations'],
    outcomes: ['Unified market positioning', 'Enhanced enterprise value', 'Consistent brand voice'],
  },
  {
    phase: 'Consultation 03',
    title: 'Logo and Website',
    duration: 'Digital & Visuals',
    icon: Globe,
    desc: 'Guidance on visual identity design, digital platform structure, UX standards, and web presence execution.',
    deliverables: ['Visual Identity Guidelines', 'Website UX/UI Wireframes', 'Design System Requirements'],
    whoItsFor: ['Product Managers', 'Marketing Directors', 'Founders'],
    outcomes: ['Modern web presence', 'Higher conversion rates', 'Scalable design system'],
  },
  {
    phase: 'Consultation 04',
    title: 'CAC Registration',
    duration: 'Legal & Structuring',
    icon: FileText,
    desc: 'Advisory and execution guidance on legal business structuring, corporate filings, and compliance with Nigerian business registration laws.',
    deliverables: ['Corporate Entity Selection', 'Filing Checklist & Review', 'Regulatory Compliance Plan'],
    whoItsFor: ['New Ventures', 'Expanding Entities', 'Corporate Restructuring'],
    outcomes: ['Full statutory compliance', 'Proper corporate structure', 'Risk mitigation'],
  },
  {
    phase: 'Consultation 05',
    title: 'HRIS and Payroll Setup',
    duration: 'Workforce Tech',
    icon: CreditCard,
    desc: 'Structuring and implementing HR management software, automated payroll systems, tax compliance, and benefit workflows.',
    deliverables: ['HRIS Tool Selection', 'Payroll Workflow Architecture', 'Employee Data Onboarding'],
    whoItsFor: ['HR Operations', 'Finance Managers', 'Operations Directors'],
  outcomes: ['Zero-error payroll runs', 'Automated leave tracking', 'Centralized employee data'],
  },
  {
    phase: 'Consultation 06',
    title: 'One-on-One Consultation',
    duration: 'Direct Advisory',
    icon: UserPlus,
    desc: 'Direct, individualized consultation focusing on employee consultation, guidance, and dedicated mentorship for personal and organizational growth.',
    deliverables: ['Employee Consultation & Advisory', 'Workplace Guidance', 'Mentorship Sessions'],
    whoItsFor: ['Department Heads', 'Team Leaders', 'Executive Trainees'],
    outcomes: ['Clear career alignment', 'Improved leadership retention', 'Conflict resolution'],
  },
]

export const programs = [
  {
    title: 'AI Transformation',
    duration: '4 weeks',
    size: '10–50',
    format: 'Virtual & One-on-One',
    modules: ['AI Fundamentals', 'Prompt Engineering', 'Tool Integration', 'Change Readiness'],
    outcomesList: ['Autonomous AI tool deployment within 60 days', '30% workflow speed gain'],
    outcomes: 'Learning-focused instruction to build team AI fluency step-by-step.',
    level: 'Foundation',
    whoItsFor: ['Operations Teams', 'Product & Tech Staff', 'Knowledge Workers'],
  },
  {
    title: 'Customer Experience',
    duration: '5 weeks',
    size: '10–60',
    format: 'Virtual Training',
    modules: ['Journey Mapping', 'Service Blueprinting', 'Frontline Excellence', 'NPS Optimization'],
    outcomesList: ['+15 NPS score boost in 90 days', 'Streamlined customer support handoffs'],
    outcomes: 'Instruction pathway to align frontline teams with service standards.',
    level: 'Practitioner',
    whoItsFor: ['Support Teams', 'Account Managers', 'Frontline Staff'],
  },
  {
    title: 'Sales Mastery',
    duration: '4 weeks',
    size: '10–40',
    format: 'One-on-One & Group',
    modules: ['Pipeline Discipline', 'Objection Handling', 'Negotiation Tactics', 'Closing Frameworks'],
    outcomesList: ['Higher pipeline conversion rate', 'Shorter sales cycle duration'],
    outcomes: 'Direct sales instruction tailored for revenue growth and account management.',
    level: 'Practitioner',
    whoItsFor: ['Business Development', 'Sales Representatives', 'Account Executives'],
  },
  {
    title: 'Corporate Communication',
    duration: '3 weeks',
    size: '10–50',
    format: 'Virtual Learning',
    modules: ['Clear Writing', 'Difficult Conversations', 'Cross-Team Alignment', 'Feedback Culture'],
    outcomesList: ['Fewer dropped handoffs', 'Clearer internal project documentation'],
    outcomes: 'Targeted communication instruction to reduce cross-team friction.',
    level: 'Foundation',
    whoItsFor: ['Cross-functional Teams', 'Project Managers', 'Staff Members'],
  },
  {
    title: 'Executive Presentation Skills',
    duration: '2 weeks',
    size: '5–30',
    format: 'One-on-One Coaching',
    modules: ['Structuring a Narrative', 'Executive Presence', 'Visual Storytelling', 'Q&A Handling'],
    outcomesList: ['Higher win-rate in client pitches', 'Confident executive presentations'],
    outcomes: 'One-on-one executive instruction to elevate leadership messaging.',
    level: 'Foundation',
    whoItsFor: ['Team Leads', 'Consultants', 'Public Representatives'],
  },
  {
    title: 'Performance Tracking & Management',
    duration: '6 weeks',
    size: '15–80',
    format: 'Hybrid Corporate Training',
    modules: ['KPI Architecture', 'Review Cadences', 'Accountability Systems', 'Continuous Improvement'],
    outcomesList: ['25–40% gain in goal completion', 'Clear accountability structures'],
    outcomes: 'Structured management instruction to establish operational accountability.',
    level: 'Advanced',
    whoItsFor: ['Department Heads', 'HR Business Partners', 'C-Suite Executives'],
  },
  {
    title: 'Workflow Automation',
    duration: '5 weeks',
    size: '10–50',
    format: 'Virtual Training',
    modules: ['Workflow Mapping', 'No-Code Tooling', 'Integration Design', 'Maintenance & Ownership'],
    outcomesList: ['Elimination of repetitive manual tasks', 'Fully documented workflows'],
    outcomes: 'Technical instruction to teach internal teams how to automate manual processes.',
    level: 'Advanced',
    whoItsFor: ['Operations Analysts', 'IT Leads', 'Administrative Managers'],
  },
]

export const levelColors: Record<string, [string, string]> = {
  Foundation: ['rgba(16,185,129,0.12)', '#065F46'],
  Advanced: ['rgba(217,119,6,0.12)', '#92400E'],
  Executive: ['rgba(11,60,45,0.1)', '#0B3C2D'],
  Practitioner: ['rgba(59,130,246,0.1)', '#1D4ED8'],
}

export const workshops = [
  {
    title: '1-Day AI Integration Bootcamp',
    subtitle: 'Practical build sprint: go from zero to deployed AI workflows in 8 hours.',
    duration: '1 Day Practical',
    seats: 20,
    type: 'Interactive Sprint',
    agenda: [
      { time: '09:00', item: 'Interactive AI Assessment' },
      { time: '10:30', item: 'Live Tool Selection & Setup' },
      { time: '12:00', item: 'Networking Break' },
      { time: '13:00', item: 'Hands-on Integration Build' },
      { time: '15:30', item: 'Output Review & SOP Drafting' },
      { time: '17:00', item: 'Actionable Result Sign-off' },
    ],
    next: 'Feb 14, 2025 · Lagos',
    whoItsFor: ['Individual Contributors', 'Tech Leads', 'Innovators'],
    outcomes: ['Custom GPTs built live on-site', 'Tested prompt library ready to run', 'Immediate day-one time savings'],
  },
  {
    title: 'Operations Streamlining Sprint',
    subtitle: 'Practical workshop: diagnose, redesign, and document core workflows live.',
    duration: '2 Days Practical',
    seats: 15,
    type: 'Practical Execution',
    agenda: [
      { time: 'Day 1', item: 'Live Audit & Process Mapping' },
      { time: 'Day 1', item: 'Interactive Bottleneck Session' },
      { time: 'Day 2', item: 'Future State Co-Creation' },
      { time: 'Day 2', item: 'Practical SOP Drafting' },
      { time: 'Day 2', item: 'Final Result & Pilot Plan' },
    ],
    next: 'Mar 3–4, 2025 · Lagos',
    whoItsFor: ['COOs', 'Operations Managers', 'Process Owners'],
    outcomes: ['Eliminated operational bottlenecks', 'Completed draft SOP handbook', 'Concrete 30-day roll-out timeline'],
  },
]

export const bentoCards = [
  {
    id: 'corp-identity',
    title: 'Corporate Visual Identity',
    badge: 'Core Identity Pillar',
    desc: 'Creation of enterprise brand books, logo suites, color palettes, and operational visual guidelines.',
    deliverables: ['Brand Book & Guidelines', 'Logo System', 'Color Architecture', 'Typography Rules', 'Pitch Deck Assets'],
    whoItsFor: ['Enterprise Companies', 'Growing Startups', 'Organizations undergoing a Rebrand'],
    outcomes: ['Instant market credibility', 'Unified brand representation', 'Scalable media design assets'],
  },
  {
    id: 'positioning',
    title: 'Brand Positioning & Strategy',
    desc: 'Defining your company’s core value narrative, market differentiators, and executive messaging.',
    deliverables: ['Value Proposition Framework', 'Competitor Differentiation Matrix', 'Messaging Playbook'],
    whoItsFor: ['Founders & CEOs', 'Marketing Directors', 'Business Unit Leaders'],
    outcomes: ['Clear market distinction', 'Aligned stakeholder communication', 'Focused customer acquisition'],
  },
  {
    id: 'digital-collateral',
    title: 'Digital & Collateral Design',
    desc: 'High-converting pitch decks, marketing touchpoints, corporate websites, and enterprise assets.',
    deliverables: ['Investor Pitch Decks', 'Corporate Website Design', 'Marketing & Sales Collateral'],
    whoItsFor: ['Sales Teams', 'Fundraising Leaders', 'Marketing Specialists'],
    outcomes: ['Professional investor appeal', 'Increased sales conversion', 'High-end brand touchpoints'],
  },
  {
    id: 'employer-branding',
    title: 'Employer Branding',
    desc: 'Building brand experiences that position your organization to attract top-performing talent.',
    deliverables: ['Recruitment Messaging', 'Internal Culture Manuals', 'Workplace Experience Guidelines'],
    whoItsFor: ['HR Executives', 'People & Culture Leads', 'Talent Acquisition'],
    outcomes: ['Higher quality applicant pools', 'Stronger employee retention', 'Authentic company culture'],
  },
]