import { useEffect, useRef } from 'react'
import { cn } from '../../lib/utils'

export function WavePath({ className, ...props }) {
  const path = useRef(null)
  const progress = useRef(0)
  const x = useRef(0.5)
  const time = useRef(Math.PI / 2)
  const reqId = useRef(null)

  const setPath = (nextProgress) => {
    const width = window.innerWidth

    if (path.current) {
      path.current.setAttributeNS(
        null,
        'd',
        `M0 100 Q${width * x.current} ${100 + nextProgress * 0.6}, ${width} 100`,
      )
    }
  }

  const resetAnimation = () => {
    time.current = Math.PI / 2
    progress.current = 0
  }

  const lerp = (start, end, amount) => start * (1 - amount) + end * amount

  const animateOut = () => {
    const nextProgress = progress.current * Math.sin(time.current)
    progress.current = lerp(progress.current, 0, 0.025)
    time.current += 0.2
    setPath(nextProgress)

    if (Math.abs(progress.current) > 0.75) {
      reqId.current = requestAnimationFrame(animateOut)
    } else {
      resetAnimation()
    }
  }

  const manageMouseEnter = () => {
    if (reqId.current) {
      cancelAnimationFrame(reqId.current)
      resetAnimation()
    }
  }

  const manageMouseMove = (event) => {
    if (!path.current) return

    const pathBound = path.current.getBoundingClientRect()
    x.current = (event.clientX - pathBound.left) / pathBound.width
    progress.current += event.movementY
    setPath(progress.current)
  }

  const manageMouseLeave = () => {
    animateOut()
  }

  useEffect(() => {
    setPath(progress.current)

    const handleResize = () => setPath(progress.current)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (reqId.current) cancelAnimationFrame(reqId.current)
    }
  }, [])

  return (
    <div className={cn('relative h-px w-screen text-blue-200', className)} {...props}>
      <div
        onMouseEnter={manageMouseEnter}
        onMouseMove={manageMouseMove}
        onMouseLeave={manageMouseLeave}
        className="relative -top-5 z-10 h-10 w-full hover:-top-[150px] hover:h-[300px]"
      />
      <svg className="absolute -top-[100px] h-[300px] w-full overflow-visible">
        <path ref={path} className="fill-none stroke-current drop-shadow-[0_0_12px_rgb(0_62_203_/_0.75)]" strokeWidth={2} />
      </svg>
    </div>
  )
}
