import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import Button from '../ui/Button'

const marqueeItems = [
  'React',
  'Next.js',
  'Tailwind',
  'React Native',
  'Kotlin',
  'Open AI',
  'Vector DB',
  'Photoshop',
  'Illustrator',
  'Figma',
  'Adobe XD',
  'Vercel',
]

const orbitIcons = [
  {
    name: 'React',
    src: '/icon/react.png',
    orbitClass: 'h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] lg:h-[540px] lg:w-[540px]',
    duration: 10,
    delay: 0,
  },
  {
    name: 'Next.js',
    src: '/icon/nextjs.png',
    orbitClass: 'h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] lg:h-[540px] lg:w-[540px]',
    duration: 15,
    delay: 0,
  },
  {
    name: 'Tailwind CSS',
    src: '/icon/tailwind.png',
    orbitClass: 'h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] lg:h-[540px] lg:w-[540px]',
    duration: 11,
    delay: 0,
  },
  {
    name: 'TypeScript',
    src: '/icon/typescript.png',
    orbitClass: 'h-[320px] w-[320px] sm:h-[440px] sm:w-[440px] lg:h-[540px] lg:w-[540px]',
    duration: 18,
    delay: 0,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
}

const HeroMarquee = () => {
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-y border-blue-400/20 bg-[#001946]/90 py-3 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#000713] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#000713] to-transparent" />

      <div className="marquee-track">
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-2 whitespace-nowrap px-1 font-body text-sm font-medium text-white sm:text-lg"
          >
            {item}
            <span className="text-blue-200">🌟</span>
          </span>
        ))}
      </div>
    </div>
  )
}

const Hero = () => {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const springX = useSpring(pointerX, { stiffness: 90, damping: 22 })
  const springY = useSpring(pointerY, { stiffness: 90, damping: 22 })
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7])
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7])

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
      className="relative min-h-screen overflow-hidden bg-[#000713] pt-28 sm:pt-32 lg:pt-36"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetPointer}
    >
      <div className="absolute inset-0 cyber-grid opacity-65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgb(0_62_203_/_0.34),transparent_25rem),radial-gradient(circle_at_20%_20%,rgb(1_30_98_/_0.32),transparent_24rem),linear-gradient(180deg,rgb(0_7_19_/_0.36),rgb(0_2_10_/_0.72))]"
        aria-hidden="true"
      />

      <div className="section-inner grid min-h-[calc(100vh-7rem)] items-center gap-10 pb-28 lg:grid-cols-[0.92fr_1.08fr] lg:gap-6 lg:pb-32">
        <motion.div
          className="relative z-10"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11 } } }}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-lg border border-blue-300/25 bg-blue-400/10 px-4 py-2 font-body text-xs font-semibold text-blue-100 shadow-[0_0_28px_rgb(0_62_203_/_0.18)]"
          >
            {/* <Zap size={13} className="fill-blue-100" />
            Next Gen Digital Agency */}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-yeseva max-w-3xl text-5xl leading-[1.04] text-white sm:text-6xl lg:text-7xl"
          >
            <span className="block">We Build</span>
            <span className="mt-5 block">
              digital <span className="text-[#003ECB]">5X</span>
            </span>
            <span className="block text-[#003ECB]">faster</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-poppins mt-6 max-w-xl text-[15px] font-medium leading-7 text-white/90"
          >
            CodeFair is a modern digital agency that empowers businesses with smart tech solutions-from AI tools and app development to website design and high-quality creative assets like posters and banners. It blends innovation, design, and technology to help brands grow efficiently in the digital world.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" onClick={scrollToPricing} className="min-w-40 rounded-full">
              View packages
            </Button>
            <Button variant="secondary" size="lg" onClick={scrollToContact} className="min-w-40 rounded-full">
              Talk to us <ArrowRight size={17} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-10 mx-auto h-[340px] w-full max-w-[560px] sm:h-[460px] lg:h-[560px] lg:max-w-[620px]"
          style={{ rotateX, rotateY, transformPerspective: 900 }}
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Friendly robot assistant representing CodeFair's AI powered services"
        >
          <div className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/55 shadow-[0_0_90px_rgb(0_62_203_/_0.22)] sm:h-[400px] sm:w-[400px] lg:h-[475px] lg:w-[475px]" />
          <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/14 sm:h-[330px] sm:w-[330px] lg:h-[392px] lg:w-[392px]" />
          <div className="absolute left-1/2 top-1/2 h-[305px] w-[305px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl sm:h-[430px] sm:w-[430px]" />

          {orbitIcons.map((item) => (
            <div
              key={item.name}
              className={`absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 ${item.orbitClass}`}
            >
              <motion.div
                className="relative h-full w-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: item.duration,
                  delay: item.delay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <motion.div
                  className="absolute left-1/2 top-0 flex h-11 w-11 -translate-x-1/2 -translate-y-full items-center justify-center rounded-lg border border-blue-300/25 bg-[#4b9bbf]/80 p-2 shadow-[0_0_24px_rgb(0_62_203_/_0.34)] backdrop-blur-md sm:h-12 sm:w-12"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: item.duration,
                    delay: item.delay,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <img src={item.src} alt={item.name} className="h-full w-full object-contain" />
                </motion.div>
              </motion.div>
            </div>
          ))}

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <motion.img
              src="/image/heroImage.png"
              alt=""
              className="w-[270px] max-w-none drop-shadow-[0_38px_60px_rgb(0_62_203_/_0.34)] sm:w-[360px] lg:w-[410px]"
              animate={{ y: [0, -14, 0], rotate: [0, 2.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      <HeroMarquee />
    </section>
  )
}

export default Hero
