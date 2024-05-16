import { CSSProperties, FC, ReactNode } from "react"
import styles from "./Section.module.css"

type Props = {
  children: ReactNode
  id?: string
  style?: CSSProperties
}

export const Section: FC<Props> = ({ children, id, style }) => {
  return (
    <section id={id} style={style} className={styles.section}>
      {children}
    </section>
  )
}
