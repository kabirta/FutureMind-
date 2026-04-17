import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../ui/Button'
import AnimatedCounter from '../ui/AnimatedCounter'

const stats = [
  { value: 5, suffix: '×', label: 'Faster delivery' },
  { value: 48, suffix: 'h', label: 'Design turnaround' },
  { value: 60, suffix: '%', label: 'Cost savings' },
  { value: 100, suffix: '%', label: 'Client satisfaction' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
}

const Hero = () => {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 90, damping: 22 })
  const springY = useSpring(pointerY, { stiffness: 90, damping: 22 })
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 sm:pt-36 lg:pt-40"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPointer}
    >
      <div className="absolute inset-0 cyber-grid opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgb(48_164_255_/_0.22),transparent_26rem),radial-gradient(circle_at_78%_25%,rgb(139_92_246_/_0.18),transparent_24rem)]" aria-hidden="true" />

      <div className="section-inner grid min-h-[calc(100vh-9rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:pb-24">
        <motion.div
          className="relative z-10"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="section-label mb-6"
          >
            AI-Powered Agency · Small Team, Big Output
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            <span className="block">We build</span>
            <span className="block text-white/90">digital</span>
            <span className="block text-gradient">5× faster.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl font-body text-base leading-8 text-slate-300 sm:text-lg"
          >
            CodeFair Studio combines AI tooling with expert engineering to ship production-ready websites, apps, and AI products at unprecedented speed — without cutting corners.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button size="lg" onClick={scrollToPricing}>
              View Packages
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToContact}>
              Talk to us <ArrowRight size={18} />
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid grid-cols-2 gap-3 border-t border-cyan-300/12 pt-6 sm:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-lg px-4 py-4">
                <p className="font-display text-3xl font-extrabold text-white">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={1800} />
                </p>
                <p className="mt-1 font-body text-xs text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto h-[360px] w-full max-w-[520px] sm:h-[460px] lg:h-[560px]"
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="absolute inset-8 rounded-lg border border-cyan-300/10 bg-cyan-300/[0.02] blur-sm" />
          <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 sm:h-[360px] sm:w-[360px]">
            <span className="hero-ring" />
            <span className="hero-ring" />
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_16px_rgb(103_232_249_/_0.9)]"
                style={{
                  transform: `rotate(${index * 20}deg) translateX(${index % 2 === 0 ? 152 : 126}px)`,
                }}
              />
            ))}
            <motion.div
              className="h-full w-full p-12"
              animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="h-full w-full hologram-sphere" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
