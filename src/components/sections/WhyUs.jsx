import { motion } from 'framer-motion'
import { Zap, DollarSign, Code2, RefreshCw } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'

const benefits = [
  {
    icon: Zap,
    title: '5× Faster Delivery',
    desc: 'AI handles the repetitive 80% of development. Our engineers focus exclusively on the creative 20% that requires real expertise.',
  },
  {
    icon: DollarSign,
    title: '60% Lower Cost',
    desc: 'Component libraries, AI tooling, and SaaS backends dramatically reduce hours — savings we pass directly to clients.',
  },
  {
    icon: Code2,
    title: 'Production-Ready Code',
    desc: 'Deployable, maintainable, and well-architected. We write code like it will be maintained for 5 years — because it will be.',
  },
  {
    icon: RefreshCw,
    title: 'Ongoing Partnership',
    desc: "We don't disappear after launch. Maintenance subscriptions and feature sprint retainers keep your product evolving.",
  },
]

const BenefitCard = ({ benefit, index }) => {
  const Icon = benefit.icon

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div
        className="theme-card group border border-surface2 bg-bg rounded-lg p-6 hover:border-accent/30 transition-colors duration-300"
        whileHover={{ borderColor: 'rgb(var(--color-accent) / 0.3)' }}
      >
        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors">
          <Icon size={18} className="text-accent" />
        </div>
        <h3 className="font-display font-bold text-base text-text mb-2">{benefit.title}</h3>
        <p className="font-body text-sm text-muted leading-relaxed">{benefit.desc}</p>
      </motion.div>
    </ScrollReveal>
  )
}

const WhyUs = () => (
  <section id="why-us" className="theme-section-soft py-24 lg:py-32 bg-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — big stacked text */}
        <ScrollReveal>
          <div className="flex flex-col gap-2">
            <SectionLabel className="mb-6">Why CodeFair</SectionLabel>
            <h2 className="font-display font-extrabold text-5xl lg:text-7xl tracking-tighter leading-none">
              <span className="block text-text">AI-first.</span>
              <span className="block" style={{ WebkitTextStroke: '2px rgb(var(--color-text) / 0.25)', color: 'transparent' }}>
                No fluff.
              </span>
              <span className="block text-accent">Fast ship.</span>
            </h2>
            <p className="font-body text-base text-muted leading-relaxed mt-6 max-w-sm">
              We're not a big agency with layers of account managers and bloated processes. We're a lean, AI-native team that builds faster and smarter.
            </p>
          </div>
        </ScrollReveal>

        {/* Right — benefit cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default WhyUs
