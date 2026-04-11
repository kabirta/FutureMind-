import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { techStack } from '../../data/stack'

const Pill = ({ label, index }) => (
  <motion.span
    className="theme-pill inline-flex items-center border border-surface2 bg-surface rounded-lg px-3 py-1.5 font-body text-sm text-muted hover:border-accent/40 hover:text-text hover:bg-accent/5 transition-all duration-200 cursor-default"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
  >
    {label}
  </motion.span>
)

const TechStack = () => (
  <section id="tech-stack" className="theme-section py-24 lg:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col gap-4 mb-14">
          <SectionLabel>Our tools</SectionLabel>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl text-text tracking-tight max-w-xl">
            The stack behind the speed
          </h2>
          <p className="font-body text-base text-muted max-w-md leading-relaxed">
            We use best-in-class tools — carefully chosen for performance, developer experience, and scalability.
          </p>
        </div>
      </ScrollReveal>

      {/* Stack rows */}
      <div className="flex flex-col divide-y divide-surface2">
        {techStack.map((row, rowIndex) => (
          <ScrollReveal key={row.category} delay={rowIndex * 0.07}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 py-5">
              {/* Category label */}
              <div className="sm:w-36 lg:w-44 flex-shrink-0">
                <span className="font-body text-xs text-muted tracking-wide uppercase">{row.category}</span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {row.items.map((item, i) => (
                  <Pill key={item} label={item} index={rowIndex * 5 + i} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)

export default TechStack
