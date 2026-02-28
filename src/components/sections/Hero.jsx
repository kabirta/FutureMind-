import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Button from '../ui/Button'
import AnimatedCounter from '../ui/AnimatedCounter'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { value: 5, suffix: '×', label: 'Faster delivery' },
  { value: 48, suffix: 'h', label: 'Design turnaround' },
  { value: 60, suffix: '%', label: 'Cost savings' },
  { value: 100, suffix: '%', label: 'Client satisfaction' },
]

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-24 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glow blobs */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #47b8ff 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #e8ff47 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <div className="flex items-center gap-2 border border-surface2 bg-surface rounded-full px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="font-body text-xs text-muted tracking-wide">
                AI-Powered Agency · Small Team, Big Output
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="font-display font-extrabold tracking-tighter leading-[0.95]">
              <span className="block text-[clamp(3.5rem,9vw,8rem)] text-text">
                We build
              </span>
              <span className="block text-[clamp(3.5rem,9vw,8rem)] text-outline text-text/20" style={{ WebkitTextStroke: '2px rgba(240,242,248,0.25)' }}>
                digital
              </span>
              <span className="block text-[clamp(3.5rem,9vw,8rem)] text-accent">
                5× faster.
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p variants={itemVariants} className="font-body text-base sm:text-lg text-muted leading-relaxed max-w-lg mb-10">
            FutureMind Studio combines AI tooling with expert engineering to ship production-ready websites, apps, and AI products at unprecedented speed — without cutting corners.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16 sm:mb-20">
            <Button variant="primary" size="lg" onClick={scrollToPricing}>
              View Packages
            </Button>
            <Button variant="ghost" size="lg" onClick={scrollToContact}>
              Talk to us <ArrowRight size={16} />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-surface2"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-display font-extrabold text-3xl sm:text-4xl text-text tracking-tight">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={1800} />
                </span>
                <span className="font-body text-xs text-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} />
      </motion.div>
    </section>
  )
}

export default Hero
