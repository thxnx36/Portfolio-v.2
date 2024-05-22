import { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './Paragraph.module.css'

export type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export const Paragraph: FC<Props> = ({ children, ...props }) => {
  return (
    <p className={styles.paragraph} {...props}>
      {children}
    </p>
  )
}
