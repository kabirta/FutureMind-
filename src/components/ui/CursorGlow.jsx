import { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return undefined

    const handlePointerMove = (event) => {
      glow.style.transform = `translate3d(${event.clientX - 180}px, ${event.clientY - 180}px, 0)`
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[45] hidden h-[360px] w-[360px] rounded-full bg-cyan-300/10 blur-3xl lg:block"
      aria-hidden="true"
    />
  )
}

export default CursorGlow
