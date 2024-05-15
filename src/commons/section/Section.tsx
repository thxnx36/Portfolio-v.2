import { FC, ReactNode } from "react"
import styles from "./Section.module.css"

type Props = {
  children: ReactNode
  id?: string
}

export const Section: FC<Props> = ({ children, id }) => {
  return (
    <section id={id} className={styles.section}>
      {children}
    </section>
  )
}
