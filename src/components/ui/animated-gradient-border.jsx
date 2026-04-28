const defaultGradientColors = {
  primary: '#003ECB',
  secondary: '#22D3EE',
  accent: '#DCE8FF',
}

const animationClasses = {
  'auto-rotate': 'gradient-border-auto',
  'rotate-on-hover': 'gradient-border-hover',
  'stop-rotate-on-hover': 'gradient-border-stop-hover',
}

const BorderRotate = ({
  children,
  className = '',
  animationMode = 'auto-rotate',
  animationSpeed = 4,
  gradientColors = defaultGradientColors,
  backgroundColor = '#000713',
  borderWidth = 2,
  borderRadius = 20,
  style = {},
  ...props
}) => {
  const combinedStyle = {
    '--gradient-primary': gradientColors.primary,
    '--gradient-secondary': gradientColors.secondary,
    '--gradient-accent': gradientColors.accent,
    '--bg-color': backgroundColor,
    '--border-width': `${borderWidth}px`,
    '--border-radius': `${borderRadius}px`,
    '--animation-duration': `${animationSpeed}s`,
    border: `${borderWidth}px solid transparent`,
    borderRadius: `${borderRadius}px`,
    backgroundImage: `
      linear-gradient(${backgroundColor}, ${backgroundColor}),
      conic-gradient(
        from var(--gradient-angle, 0deg),
        ${gradientColors.primary} 0%,
        ${gradientColors.secondary} 26%,
        ${gradientColors.accent} 32%,
        ${gradientColors.secondary} 38%,
        ${gradientColors.primary} 50%,
        ${gradientColors.secondary} 76%,
        ${gradientColors.accent} 82%,
        ${gradientColors.secondary} 88%,
        ${gradientColors.primary} 100%
      )
    `,
    backgroundClip: 'padding-box, border-box',
    backgroundOrigin: 'padding-box, border-box',
    ...style,
  }

  return (
    <div
      className={`gradient-border-component ${animationClasses[animationMode] || ''} ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </div>
  )
}

export { BorderRotate }
