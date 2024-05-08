import { FC, ReactNode } from "react"
import styles from "./Title.module.css"

export type Props = {
  children: ReactNode
}

export const Title: FC<Props> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>
}
