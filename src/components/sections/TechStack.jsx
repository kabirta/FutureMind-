import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { techStack } from '../../data/stack'

const Pill = ({ label, index }) => (
  <motion.span
    className="inline-flex items-center rounded-lg border border-cyan-300/12 bg-white/[0.035] px-3 py-1.5 font-body text-sm text-slate-300 transition-all duration-200 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-white"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
  >
    {label}
  </motion.span>
)

const TechStack = () => (
  <section id="tech-stack" className="section-shell bg-[#050b1a]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgb(48_164_255_/_0.13),transparent_26rem)]" aria-hidden="true" />
    <div className="section-inner">
      <ScrollReveal>
        <div className="mb-14 max-w-3xl">
          <SectionLabel>Our tools</SectionLabel>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            The stack behind the speed
          </h2>
          <p className="mt-5 max-w-2xl font-body text-base leading-8 text-slate-400">
            We use best-in-class tools — carefully chosen for performance, developer experience, and scalability.
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col divide-y divide-cyan-300/10 rounded-lg border border-cyan-300/10 bg-white/[0.025] p-2 backdrop-blur-xl">
        {techStack.map((row, rowIndex) => (
          <ScrollReveal key={row.category} delay={rowIndex * 0.07}>
            <div className="flex flex-col gap-4 px-3 py-5 sm:flex-row sm:items-center">
              <div className="flex-shrink-0 sm:w-36 lg:w-44">
                <span className="font-body text-xs font-semibold uppercase text-cyan-200">{row.category}</span>
              </div>

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
