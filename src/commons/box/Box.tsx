import { FC, ReactNode } from "react"
import styles from "./Box.module.css"

type Props = {
  children: ReactNode
  margin?: string
}

export const Box: FC<Props> = ({ children, margin }) => {
  return (
    <div className={styles.box} style={{ margin }}>
      {children}
    </div>
  )
}
