import { forwardRef, useCallback, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './card'
import { cn } from '../../lib/utils'

export const IdentityCardBody = forwardRef(
  (
    {
      fullName,
      place,
      about,
      avatarUrl,
      avatarText,
      scheme = 'plain',
      socials = [],
      displayAvatar = true,
      titleCss,
      cardCss,
      descClass,
      bioClass,
      footerClass,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const isAccent = scheme === 'accented'

    return (
      <Card
        ref={ref}
        style={cardCss}
        className={cn(
          'flex min-h-full flex-col rounded-3xl border-0 p-8',
          isAccent ? 'text-[var(--on-accent-foreground)]' : 'bg-[#020817] text-white',
          className,
        )}
        {...rest}
      >
        <CardHeader className="p-0">
          <div className={cn(!displayAvatar && 'invisible')}>
            <Avatar
              className="h-16 w-16 ring-2 ring-offset-4 ring-offset-[#020817]"
              style={{ '--tw-ring-color': 'var(--accent-color)' }}
            >
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{avatarText}</AvatarFallback>
            </Avatar>
          </div>
          <CardDescription
            className={cn('pt-6 text-left', !isAccent && 'text-slate-400', descClass)}
            style={isAccent ? { color: 'var(--on-accent-muted-foreground)' } : {}}
          >
            {place}
          </CardDescription>
          <CardTitle
            className="text-left text-3xl"
            style={{
              ...(isAccent ? { color: 'var(--on-accent-foreground)' } : {}),
              ...titleCss,
            }}
          >
            {fullName}
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-6 flex-grow p-0">
          <p
            className={cn('text-left text-base leading-relaxed', !isAccent && 'text-slate-300', bioClass)}
            style={isAccent ? { opacity: 0.9 } : {}}
          >
            {about}
          </p>
          {children}
        </CardContent>

        {socials.length > 0 && (
          <CardFooter className={cn('mt-6 p-0', footerClass)}>
            <div
              className={cn('flex items-center gap-4', !isAccent && 'text-slate-400')}
              style={isAccent ? { color: 'var(--on-accent-muted-foreground)' } : undefined}
            >
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn('transition-opacity', isAccent ? 'hover:opacity-75' : 'hover:text-white')}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>
    )
  },
)
IdentityCardBody.displayName = 'IdentityCardBody'

export const RevealCardContainer = forwardRef(
  (
    {
      base,
      overlay,
      accent = 'rgb(34 211 238)',
      textOnAccent = '#fff',
      mutedOnAccent = 'rgba(255,255,255,0.8)',
      className,
      ...rest
    },
    ref,
  ) => {
    const holderRef = useRef(null)
    const overlayRef = useRef(null)

    const assignRef = useCallback(
      (el) => {
        holderRef.current = el
        if (typeof ref === 'function') ref(el)
        else if (ref) ref.current = el
      },
      [ref],
    )

    const startClip = 'circle(42px at 64px 64px)'
    const expandClip = 'circle(160% at 64px 64px)'

    useGSAP(
      () => {
        gsap.set(overlayRef.current, { clipPath: startClip })
      },
      { scope: holderRef },
    )

    const reveal = () => {
      gsap.to(overlayRef.current, {
        clipPath: expandClip,
        duration: 0.8,
        ease: 'expo.inOut',
      })
    }

    const conceal = () => {
      gsap.to(overlayRef.current, {
        clipPath: startClip,
        duration: 1,
        ease: 'expo.out',
      })
    }

    return (
      <div
        ref={assignRef}
        onMouseEnter={reveal}
        onMouseLeave={conceal}
        onFocus={reveal}
        onBlur={conceal}
        style={{
          '--accent-color': accent,
          '--on-accent-foreground': textOnAccent,
          '--on-accent-muted-foreground': mutedOnAccent,
        }}
        className={cn('relative h-full overflow-hidden rounded-3xl', className)}
        {...rest}
      >
        <div className="h-full">{base}</div>
        <div ref={overlayRef} className="absolute inset-0 h-full w-full">
          {overlay}
        </div>
      </div>
    )
  },
)
RevealCardContainer.displayName = 'RevealCardContainer'
