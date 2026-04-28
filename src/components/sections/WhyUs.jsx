import { motion } from 'framer-motion'
import { Clock, Code2, DollarSign, RefreshCw, Zap } from 'lucide-react'
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
        className="group relative h-full overflow-visible pb-10"
        whileHover={{ y: -7 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="pointer-events-none absolute inset-x-6 -bottom-1 top-[68%] rounded-[26px] bg-[#92D900]/85 shadow-[0_34px_72px_-18px_rgb(146_217_0_/_0.85)]" />
        <div className="pointer-events-none absolute inset-x-10 -bottom-1 z-0 flex items-center justify-center gap-4 py-3 text-center font-poppins text-xs font-bold text-white">
          <Zap className="h-3.5 w-3.5" />
          Built for speed
        </div>

        <div className="relative z-10 h-full rounded-[28px] border border-blue-300/18 bg-[radial-gradient(120%_120%_at_30%_10%,#071735_0%,#020817_58%,#00040d_100%)] p-6 text-white shadow-2xl transition-colors duration-300 group-hover:border-cyan-200/45">
          <div className="mb-6 flex items-center justify-between font-poppins text-xs font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgb(34_211_238_/_0.8)] animate-pulse" />
              <span>CodeFair advantage</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="h-4 w-4" />
              <span>Now</span>
            </div>
          </div>

          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-cyan-100 shadow-[0_0_30px_rgb(0_62_203_/_0.26)]">
            <Icon size={22} />
          </div>

          <h3 className="font-display text-xl font-extrabold leading-tight text-white">{benefit.title}</h3>
          <p className="mt-4 font-poppins text-sm font-medium leading-7 text-slate-300">{benefit.desc}</p>
        </div>
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
