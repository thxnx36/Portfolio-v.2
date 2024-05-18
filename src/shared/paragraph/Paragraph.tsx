import { CSSProperties, FC, ReactNode } from 'react'
import styles from './Paragraph.module.css'

export type Props = {
  children: ReactNode
  sx?: CSSProperties
}

export const Paragraph: FC<Props> = ({ children, sx }) => {
  return (
    <p className={styles.paragraph} style={sx}>
      {children}
    </p>
  )
}
