import { useEffect, useRef } from 'react'
import $ from 'jquery'
import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import ScrollReveal from '../ui/ScrollReveal'
import { techStack } from '../../data/stack'

const installSparklePlugin = () => {
  if ($.fn.sparkleBurst) return

  $.fn.sparkleBurst = function sparkleBurst(options = {}) {
    const settings = {
      side: 'left',
      particles: 34,
      colors: ['#92D900', '#48d55d', '#67e8f9', '#ffffff'],
      ...options,
    }

    return this.each(function runBurst() {
      const $layer = $(this)
      const width = window.innerWidth
      const height = window.innerHeight
      const originX = settings.side === 'left' ? -12 : width + 12
      const direction = settings.side === 'left' ? 1 : -1

      for (let i = 0; i < settings.particles; i += 1) {
        const size = 4 + Math.random() * 7
        const startY = height * (0.18 + Math.random() * 0.62)
        const travelX = direction * (110 + Math.random() * 270)
        const driftY = (Math.random() - 0.5) * 240
        const color = settings.colors[Math.floor(Math.random() * settings.colors.length)]
        const duration = 820 + Math.random() * 720
        const delay = Math.random() * 180

        const $sparkle = $('<span />')
          .addClass('tech-stack-sparkle')
          .css({
            left: originX,
            top: startY,
            width: size,
            height: size,
            backgroundColor: color,
            boxShadow: `0 0 ${10 + size}px ${color}`,
            opacity: 0,
          })

        $layer.append($sparkle)

        $sparkle
          .delay(delay)
          .animate(
            {
              left: originX + travelX,
              top: startY + driftY,
              opacity: 1,
            },
            duration * 0.45
          )
          .animate(
            {
              left: originX + travelX * 1.25,
              top: startY + driftY - 80,
              opacity: 0,
            },
            duration * 0.55,
            function cleanup() {
              $(this).remove()
            }
          )
      }
    })
  }
}

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

const TechStack = () => {
  const sectionRef = useRef(null)
  const sparkleLayerRef = useRef(null)
  const lastBurstRef = useRef(0)

  useEffect(() => {
    const section = sectionRef.current
    const layer = sparkleLayerRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!section || !layer || reduceMotion) return undefined

    installSparklePlugin()

    const launchSparkles = () => {
      const now = Date.now()
      if (now - lastBurstRef.current < 2400) return

      lastBurstRef.current = now
      $(layer).sparkleBurst({ side: 'left' })
      $(layer).sparkleBurst({ side: 'right' })
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          launchSparkles()
        }
      },
      { threshold: 0.38 }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      $(layer).empty()
    }
  }, [])

  return (
    <section ref={sectionRef} id="tech-stack" className="section-shell bg-[#050b1a]">
      <div ref={sparkleLayerRef} className="tech-stack-sparkles" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgb(48_164_255_/_0.13),transparent_26rem)]" aria-hidden="true" />
      <div className="section-inner">
        <ScrollReveal>
          <div className="mb-14 max-w-3xl">
            <SectionLabel>Our tools</SectionLabel>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              The stack behind the speed
            </h2>
            <p className="mt-5 max-w-2xl font-body text-base leading-8 text-slate-400">
              We use best-in-class tools - carefully chosen for performance, developer experience, and scalability.
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
}

export default TechStack
