import { motion } from 'framer-motion'
import { BorderRotate } from './animated-gradient-border'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  ...props
}) => {
  const base = 'relative z-10 inline-flex h-full w-full items-center justify-center gap-2 rounded-[calc(var(--border-radius)-var(--border-width))] font-body font-semibold outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-60'

  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 text-white premium-shadow hover:shadow-[0_0_34px_rgb(0_62_203_/_0.38)]',
    secondary: 'bg-[#000713]/88 text-text backdrop-blur-xl hover:bg-cyan-300/10',
    ghost: 'bg-[#000713]/72 text-text hover:bg-white/[0.06]',
    outline: 'bg-[#000713]/82 text-cyan-100 hover:bg-cyan-300/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-3.5 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  const radius = className.includes('rounded-full') ? 999 : 10
  const wrapperClass = className.includes('w-full') ? 'flex w-full align-middle' : 'inline-flex align-middle'

  if (href) {
    return (
      <BorderRotate className={wrapperClass} borderRadius={radius} animationSpeed={3.8}>
        <motion.a
          href={href}
          className={classes}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.98 }}
          {...props}
        >
          {children}
        </motion.a>
      </BorderRotate>
    )
  }

  return (
    <BorderRotate className={wrapperClass} borderRadius={radius} animationSpeed={3.8}>
      <motion.button
        className={classes}
        onClick={onClick}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    </BorderRotate>
  )
}

export default Button
