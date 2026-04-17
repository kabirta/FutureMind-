import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { processSteps } from '../../data/process'

const StepCard = ({ step, index }) => (
  <ScrollReveal delay={index * 0.08}>
    <motion.article
      className="relative h-full rounded-lg border border-cyan-300/12 bg-[#071126]/70 p-6 backdrop-blur-xl transition-colors hover:border-cyan-300/40"
      whileHover={{ y: -7 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 shadow-[0_0_26px_rgb(34_211_238_/_0.16)]">
        <span className="font-display text-sm font-extrabold text-cyan-100">{step.number}</span>
      </div>
      <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
      <p className="mt-3 font-body text-sm leading-7 text-slate-400">{step.desc}</p>
    </motion.article>
  </ScrollReveal>
)

const Process = () => (
  <section id="process" className="section-shell bg-[#030712]">
    <div className="absolute inset-0 cyber-grid opacity-45" aria-hidden="true" />
    <div className="section-inner">
      <ScrollReveal>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            From brief to launch
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-8 text-slate-400">
            Our AI-augmented process is designed to eliminate waste and compress timelines — without compromising quality.
          </p>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-0 right-0 top-6 hidden h-px lg:block">
          <motion.div
            className="soft-line h-full origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Process
