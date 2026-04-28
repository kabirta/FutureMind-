import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import ScrollReveal from '../ui/ScrollReveal'

const DigitalPartner = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-shell bg-[#000713]">
      <div className="absolute inset-0 cyber-grid opacity-35" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgb(0_62_203_/_0.24),transparent_25rem),radial-gradient(circle_at_78%_58%,rgb(1_30_98_/_0.32),transparent_30rem)]"
        aria-hidden="true"
      />

      <div className="section-inner grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="section-label mb-6">Speed is our nature</span>
            <h2 className="font-yeseva text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              <span className="block">Your</span>
              <span className="block text-blue-gradient">digital development partner</span>
            </h2>

            <p className="font-poppins mt-6 text-base font-medium leading-8 text-slate-300 sm:text-lg">
              We help ambitious businesses turn slow-moving ideas into fast, useful digital products. From websites and apps to marketing systems and AI-powered tools, our team builds the engine your brand needs to move quicker, sell smarter, and stay ahead of the market.
            </p>

            <p className="font-poppins mt-4 text-base leading-8 text-slate-400">
              Slow processes drain opportunity. We replace scattered execution with a focused build cycle, clear creative direction, and launch-ready digital strategy so your business feels lighter, sharper, and much faster.
            </p>

            <div className="mt-8">
              <Button size="lg" onClick={scrollToServices} className="rounded-full">
                Explore more <ArrowRight size={17} />
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-lg bg-blue-500/10 blur-3xl" aria-hidden="true" />
            <motion.div
              className="relative mx-auto flex aspect-square w-full max-w-[620px] items-center justify-center overflow-hidden rounded-full border border-blue-300/20 bg-[#030712]/70 shadow-[0_28px_100px_rgb(0_0_0_/_0.38)]"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 z-10 bg-[linear-gradient(105deg,transparent_0%,rgb(255_255_255_/_0.18)_12%,transparent_24%,transparent_42%,rgb(0_62_203_/_0.3)_48%,transparent_56%,transparent_100%)] opacity-50 mix-blend-screen" />
              <motion.div
                className="absolute inset-y-0 -left-1/2 z-20 w-1/2 bg-[linear-gradient(90deg,transparent,rgb(220_232_255_/_0.2),transparent)] blur-sm"
                animate={{ x: ['0%', '320%'] }}
                transition={{ duration: 2.1, repeat: Infinity, ease: 'linear' }}
                aria-hidden="true"
              />
              <motion.img
                src="/image/bhm-banner-ing.webp"
                alt="Digital development team banner"
                className="relative z-0 h-[76%] w-[76%] object-contain"
                animate={{ scale: [1, 1.025, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default DigitalPartner
