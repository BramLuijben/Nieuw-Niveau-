'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

interface AnimateProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  duration?: number
  from?: 'below' | 'left' | 'right' | 'none'
}

const offsets = {
  below: { y: 28, x: 0 },
  left:  { x: -36, y: 0 },
  right: { x: 36, y: 0 },
  none:  { x: 0, y: 0 },
}

/** Fade-in triggered when the element scrolls into view */
export function FadeIn({
  children,
  className,
  style,
  delay = 0,
  duration = 0.55,
  from = 'below',
}: AnimateProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const offset = offsets[from]

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

interface StaggerProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  stagger?: number
  delay?: number
}

/** Staggered children: each child animates in with a delay offset */
export function Stagger({
  children,
  className,
  style,
  stagger = 0.1,
  delay = 0,
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Child item inside a Stagger container */
export function StaggerItem({
  children,
  className,
  style,
  from = 'below',
}: AnimateProps) {
  const offset = offsets[from]

  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden:  { opacity: 0, ...offset },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Card with hover spring: lifts -6px */
export function Card({
  children,
  className,
  style,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 380, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}

/** Button with scale hover effect */
export function MotionButton({
  children,
  className,
  style,
  onClick,
  type = 'button',
  disabled,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}) {
  return (
    <motion.button
      className={className}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.button>
  )
}

// Motion-enabled version of Next.js Link
const MotionNextLink = motion.create(Link)

/** Link with scale hover effect — uses Next.js router */
export function MotionLink({
  children,
  className,
  style,
  href,
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  href: string
}) {
  return (
    <MotionNextLink
      href={href}
      className={className}
      style={style}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {children}
    </MotionNextLink>
  )
}
