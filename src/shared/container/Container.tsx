import { CSSProperties, FC, ReactNode } from 'react'
import styles from './Container.module.css'

type Props = {
  children: ReactNode
  sx?: CSSProperties
}

export const Container: FC<Props> = ({ children, sx }) => {
  return (
    <div style={sx} className={styles.container}>
      {children}
    </div>
  )
}
