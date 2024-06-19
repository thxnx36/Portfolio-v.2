import type { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './ToolTip.module.css'

type Props = HTMLAttributes<HTMLElement> & {
  text: string
  children: ReactNode
}

export const ToolTip: FC<Props> = ({ text, children, ...props }) => {
  return (
    <div className={styles.tooltipContainer} {...props}>
      {children}
      <div className={styles.tooltip}>
        <div className={styles.line}></div>
        <p className={styles.tolltipText}>{text}</p>
      </div>
    </div>
  )
}
