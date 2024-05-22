import { CSSProperties, FC, ReactNode } from 'react'
import styles from './ToolTip.module.css'

type Props = {
  text: string
  children: ReactNode
  sx?: CSSProperties
}

export const ToolTip: FC<Props> = ({ text, children, sx }) => {
  return (
    <span style={sx} className={styles.tooltipContainer}>
      {children}
      <div className={styles.tooltip}>
        <span className={styles.tooltipText}>{text}</span>
      </div>
    </span>
  )
}
