import { CSSProperties, FC, HTMLAttributes, ReactNode, forwardRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Title.module.css'

export type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  size?: 'xs' | 'sm' | 'lg'
  fontWeight?: 'normal' | 'regular' | 'bold'
}

export const Title: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
  ({ children, tag, size, fontWeight, ...props }, ref) => {
    const Tag = tag || 'h1'
    const className = `${styles.title} ${size ? styles[size] : ''} ${fontWeight ? styles[fontWeight] : ''}`

    return (
      <Tag ref={ref} className={`${styles.title} ${className}`} {...props}>
        {children}
      </Tag>
    )
  },
)

export const MTitle = motion(Title)
