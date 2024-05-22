import { CSSProperties, FC, HTMLAttributes, ReactNode } from 'react'
import styles from './Container.module.css'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const Container: FC<Props> = ({ children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  )
}
