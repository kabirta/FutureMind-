import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  ...props
}) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-lg font-body font-semibold outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-60'

  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 text-white premium-shadow hover:shadow-[0_0_34px_rgb(0_62_203_/_0.38)]',
    secondary: 'border border-cyan-300/20 bg-white/[0.06] text-text backdrop-blur-xl hover:border-cyan-300/45 hover:bg-cyan-300/10',
    ghost: 'border border-white/10 bg-transparent text-text hover:border-blue-300/40 hover:bg-white/[0.06]',
    outline: 'border border-cyan-300/35 bg-cyan-300/5 text-cyan-100 hover:border-cyan-200 hover:bg-cyan-300/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm',
    lg: 'px-6 py-3.5 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
