import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, href, ...props }) => {
  const base = 'inline-flex items-center justify-center gap-2 font-body font-medium rounded-lg transition-all duration-200 cursor-pointer'

  const variants = {
    primary: 'bg-accent text-bg hover:bg-accent/90 hover:shadow-[0_0_24px_rgb(var(--color-accent)_/_0.35)]',
    ghost: 'bg-transparent border border-surface2 text-text hover:border-muted hover:bg-surface',
    outline: 'bg-transparent border border-accent/40 text-accent hover:border-accent hover:bg-accent/5',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
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
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
