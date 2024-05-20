import { CSSProperties, FC, ReactNode, forwardRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Title.module.css'

export type Props = {
  children: ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  size?: 'xs' | 'sm' | 'lg'
  fontWeight?: 'normal' | 'regular' | 'bold'
  sx?: CSSProperties
}

export const Title: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
  ({ children, tag, size, fontWeight, sx }, ref) => {
    const Tag = tag || 'h1'
    const className = `${styles.title} ${size ? styles[size] : ''} ${fontWeight ? styles[fontWeight] : ''}`

    return (
      <Tag ref={ref} style={sx} className={`${styles.title} ${className}`}>
        {children}
      </Tag>
    )
  },
)

export const MTitle = motion(Title)
