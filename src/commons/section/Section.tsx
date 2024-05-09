import { FC, ReactNode } from "react"
import styles from "./Section.module.css"

type Props = {
  children: ReactNode
}

export const Section: FC<Props> = ({ children }) => {
  return <section className={styles.section}>{children}</section>
}
