import { FC, ReactNode } from "react"
import styles from "./Paragraph.module.css"

export type Props = {
  children: ReactNode
  margin?: string
  align?: string
}

export const Paragraph: FC<Props> = ({ children, margin, align }) => {
  return (
    <p
      className={styles.paragraph}
      style={{ margin, textAlign: !align ? "center" : "left" }}
    >
      {children}
    </p>
  )
}
