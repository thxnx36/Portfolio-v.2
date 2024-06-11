import type { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './ToolTip.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  text: string
  children: ReactNode
}

export const ToolTip: FC<Props> = ({ text, children, ...props }) => {
  return (
    <span className={styles.tooltipContainer} {...props}>
      {children}
      <div className={styles.tooltip}>
        <span className={styles.tooltipText}>{text}</span>
      </div>
    </span>
  )
}
