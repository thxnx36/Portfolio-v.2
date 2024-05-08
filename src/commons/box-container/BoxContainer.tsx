import { FC, ReactNode } from "react"
import styles from "./BoxContainer.module.css"

type Props = {
  children: ReactNode
}

export const BoxContainer: FC<Props> = ({ children }) => {
  return <section className={styles.section}>{children}</section>
}
