import { FC, ReactNode } from "react"
import styles from "./Box.module.css"

type Props = {
  children: ReactNode
}

export const Box: FC<Props> = ({ children }) => {
  return <div className={styles.box}>{children}</div>
}
