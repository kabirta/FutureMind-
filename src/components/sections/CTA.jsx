import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-shell bg-[#030712]">
      <div className="absolute inset-0 network-bg opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgb(34_211_238_/_0.17),transparent_28rem)]" aria-hidden="true" />
      <div className="section-inner text-center">
        <ScrollReveal>
          <motion.div
            className="glass-panel mx-auto max-w-5xl overflow-hidden rounded-lg px-5 py-12 sm:px-10 lg:px-16 lg:py-16"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mb-6 h-px max-w-xl soft-line" />
            <span className="section-label mb-6">Ready to build?</span>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-7xl">
              Ready to <span className="text-gradient">launch</span> something great?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-8 text-slate-300 sm:text-lg">
              Stop waiting. Start building. Our team is ready to turn your idea into a production-ready product — in days, not months.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button variant="primary" size="lg" onClick={scrollToContact}>
                Start a project <ArrowRight size={16} />
              </Button>
              <Button variant="secondary" size="lg" onClick={scrollToPricing}>
                See pricing
              </Button>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTA
