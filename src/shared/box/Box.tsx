import { CSSProperties, FC, ReactNode } from 'react'
import styles from './Box.module.css'

type Props = {
  children: ReactNode
  sx?: CSSProperties
}

export const Box: FC<Props> = ({ children, sx }) => {
  return (
    <div className={styles.box} style={sx}>
      {children}
    </div>
  )
}
