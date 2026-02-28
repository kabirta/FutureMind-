export const plans = [
  {
    id: 'starter',
    name: 'Starter',
    
    delivery: '5–7 days',
    description: 'Perfect for founders who need a solid web presence fast.',
    featured: false,
    features: [
      '5-page marketing website',
      'Mobile-responsive design',
      'Contact form & basic SEO',
      'Hosting setup (Vercel/Netlify)',
      '2 revision rounds',
      '30-day bug support',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
   
    delivery: '10–14 days',
    description: 'The full-stack solution for growing businesses ready to scale.',
    featured: true,
    features: [
      'Everything in Starter',
      'Full web app or SaaS MVP',
      'Authentication & dashboard',
      'Database & API integration',
      'Custom AI feature (chatbot/agent)',
      '3 revision rounds',
      '90-day maintenance',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    
    delivery: 'Tailored timeline',
    description: 'Enterprise-grade builds and ongoing partnership for ambitious products.',
    featured: false,
    features: [
      'Everything in Growth',
      'Mobile app (iOS + Android)',
      'Complex AI integrations',
      'Dedicated project manager',
      'Weekly sprints & updates',
      'Unlimited revisions',
      '12-month retainer option',
    ],
  },
]
