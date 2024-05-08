import { FC, ReactNode } from "react"
import styles from "./Paragraph.module.css"

export type Props = {
  children: ReactNode
  margin?: string
}

export const Paragraph: FC<Props> = ({ children, margin }) => {
  return (
    <p className={styles.paragraph} style={{ margin }}>
      {children}
    </p>
  )
}
