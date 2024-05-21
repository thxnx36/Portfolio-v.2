import { CSSProperties, FC, ReactNode } from 'react'
import styles from './PageWrapper.module.css'

type Props = {
  children: ReactNode
  sx?: CSSProperties
}

export const PageWrapper: FC<Props> = ({ children, sx }) => {
  return (
    <div className={styles.pageWrapper} style={sx}>
      {children}
    </div>
  )
}
