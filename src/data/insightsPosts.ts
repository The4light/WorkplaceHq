export interface InsightsPost {
  slug: string
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  featured: boolean
  image: string
  body: string
}

export const categoryColorMap: Record<string, { bg: string; text: string }> = {
  'AI Adoption':         { bg: 'rgba(29,165,74,0.1)',  text: '#1A6B3A' },
  'Productivity':        { bg: 'rgba(11,60,45,0.08)',  text: '#0B3C2D' },
  'Customer Experience': { bg: 'rgba(59,130,246,0.1)', text: '#1D4ED8' },
  'Consulting':          { bg: 'rgba(217,119,6,0.1)',  text: '#92400E' },
  'Leadership':          { bg: 'rgba(139,92,246,0.1)', text: '#5B21B6' },
}

export const insightsPosts: InsightsPost[] = [
  {
    slug: 'how-african-teams-are-adopting-ai-in-2025',
    category: 'AI Adoption',
    featured: true,
    title: 'How African Teams Are Adopting AI in 2025',
    excerpt: 'Practical AI adoption looks different across industries — and most of what works in Silicon Valley does not translate. Here is what we are seeing on the ground across Lagos, Accra, and Nairobi.',
    author: 'WorkplaceHQ Team',
    date: 'Coming soon',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    body: 'This article is coming soon. WorkplaceHQ is documenting real AI adoption patterns across African enterprises — from pilot programs to full deployment. Check back for the full report.',
  },
  {
    slug: 'the-hidden-cost-of-unstructured-teams',
    category: 'Productivity',
    featured: false,
    title: 'The Hidden Cost of Unstructured Teams',
    excerpt: 'Most productivity problems are not about effort — they are about system design. Here is how to diagnose and fix the real issue.',
    author: 'WorkplaceHQ Team',
    date: 'Coming soon',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1573879404555-3f82d0582798?auto=format&fit=crop&w=1200&q=80',
    body: 'Full article coming soon.',
  },
  {
    slug: 'why-cx-training-fails',
    category: 'Customer Experience',
    featured: false,
    title: 'Why CX Training Fails — and How to Fix It',
    excerpt: 'Training without follow-through produces nothing. Here is the framework that changes that.',
    author: 'WorkplaceHQ Team',
    date: 'Coming soon',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1744973149087-179e3ed54eae?auto=format&fit=crop&w=1200&q=80',
    body: 'Full article coming soon.',
  },
  {
    slug: 'building-performance-systems-that-stick',
    category: 'Consulting',
    featured: false,
    title: 'Building Performance Systems That Actually Stick',
    excerpt: 'Accountability structures are not a management problem. They are a design problem.',
    author: 'WorkplaceHQ Team',
    date: 'Coming soon',
    readTime: '5 min read',
    image: 'https://plus.unsplash.com/premium_photo-1707155466050-814d3feb2ba6?auto=format&fit=crop&w=1200&q=80',
    body: 'Full article coming soon.',
  },
  {
    slug: 'manager-playbook-for-ai-augmented-teams',
    category: 'Leadership',
    featured: false,
    title: 'The Manager Playbook for AI-Augmented Teams',
    excerpt: 'Your team is changing. Your management style needs to change with it.',
    author: 'WorkplaceHQ Team',
    date: 'Coming soon',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1775036760841-6c1854634646?auto=format&fit=crop&w=1200&q=80',
    body: 'Full article coming soon.',
  },
  {
    slug: 'why-your-okrs-keep-failing',
    category: 'AI Adoption',
    featured: false,
    title: 'Why Your OKRs Keep Failing',
    excerpt: 'OKRs are not a strategy problem — they are an execution problem. Here is what actually goes wrong.',
    author: 'WorkplaceHQ Team',
    date: 'Coming soon',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1765648684630-ac9c15ac98d5?auto=format&fit=crop&w=1200&q=80',
    body: 'Full article coming soon.',
  },
  {
    slug: 'african-enterprises-outpacing-global-peers',
    category: 'Productivity',
    featured: false,
    title: 'How African Enterprises Are Outpacing Global Peers',
    excerpt: 'A data-driven look at why African enterprise teams are closing the productivity gap.',
    author: 'WorkplaceHQ Team',
    date: 'Coming soon',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1655720352328-87e021d2a84e?auto=format&fit=crop&w=1200&q=80',
    body: 'Full article coming soon.',
  },
]
