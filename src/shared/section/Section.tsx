import { CSSProperties, FC, ReactNode, forwardRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Section.module.css'

type Props = {
  children: ReactNode
  id?: string
  sx?: CSSProperties
}

export const Section: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
  ({ children, id, sx }, ref) => {
    return (
      <section ref={ref} id={id}>
        <div style={sx} className={styles.content}>
          {children}
        </div>
      </section>
    )
  },
)

export const MSection = motion(Section)
