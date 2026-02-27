import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { processSteps } from '../../data/process'

const StepCard = ({ step, index }) => (
  <ScrollReveal delay={index * 0.1}>
    <div className="flex flex-col gap-4 relative group">
      {/* Number circle */}
      <motion.div
        className="w-12 h-12 rounded-full border border-surface2 bg-surface flex items-center justify-center z-10 relative transition-colors duration-300 group-hover:border-accent"
        whileHover={{ borderColor: '#e8ff47' }}
      >
        <span className="font-display font-bold text-sm text-muted group-hover:text-accent transition-colors">
          {step.number}
        </span>
      </motion.div>

      <div>
        <h3 className="font-display font-bold text-lg text-text mb-2 tracking-tight">
          {step.title}
        </h3>
        <p className="font-body text-sm text-muted leading-relaxed">
          {step.desc}
        </p>
      </div>
    </div>
  </ScrollReveal>
)

const Process = () => (
  <section id="process" className="py-24 lg:py-32 bg-surface">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col gap-4 mb-16 text-center">
          <div className="flex justify-center">
            <SectionLabel>How it works</SectionLabel>
          </div>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-text tracking-tight">
            From brief to launch
          </h2>
          <p className="font-body text-base text-muted max-w-lg mx-auto leading-relaxed">
            Our AI-augmented process is designed to eliminate waste and compress timelines — without compromising quality.
          </p>
        </div>
      </ScrollReveal>

      {/* Steps — desktop: horizontal row with connector, mobile: 2-col grid */}
      <div className="relative">
        {/* Connector line — desktop only */}
        <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface2 to-transparent" style={{ top: '24px' }} />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
          {processSteps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Process
