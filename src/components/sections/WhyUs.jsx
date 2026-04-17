import { motion } from 'framer-motion'
import { Code2, DollarSign, RefreshCw, Zap } from 'lucide-react'
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
      <motion.article
        className="group h-full rounded-lg border border-cyan-300/12 bg-white/[0.035] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/40"
        whileHover={{ y: -7 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
          <Icon size={18} />
        </div>
        <h3 className="font-display text-base font-bold text-white">{benefit.title}</h3>
        <p className="mt-3 font-body text-sm leading-7 text-slate-400">{benefit.desc}</p>
      </motion.article>
    </ScrollReveal>
  )
}

const WhyUs = () => (
  <section id="why-us" className="section-shell bg-[#030712]">
    <div className="absolute inset-0 cyber-grid opacity-40" aria-hidden="true" />
    <div className="section-inner grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
      <ScrollReveal>
        <div>
          <SectionLabel>Why CodeFair</SectionLabel>
          <h2 className="mt-6 font-display text-5xl font-extrabold leading-none text-white lg:text-7xl">
            <span className="block">AI-first.</span>
            <span className="block text-white/35">No fluff.</span>
            <span className="block text-gradient">Fast ship.</span>
          </h2>
          <p className="mt-6 max-w-sm font-body text-base leading-8 text-slate-400">
            We're not a big agency with layers of account managers and bloated processes. We're a lean, AI-native team that builds faster and smarter.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.title} benefit={benefit} index={index} />
        ))}
      </div>
    </div>
  </section>
)

export default WhyUs
