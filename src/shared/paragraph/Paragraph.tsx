import { CSSProperties, FC, ReactNode } from "react"
import styles from "./Paragraph.module.css"

export type Props = {
  children: ReactNode
  style?: CSSProperties
}

export const Paragraph: FC<Props> = ({ children, style }) => {
  return (
    <p className={styles.paragraph} style={style}>
      {children}
    </p>
  )
}
