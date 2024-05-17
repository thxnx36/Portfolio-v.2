import { CSSProperties, FC, ReactNode } from "react"
import styles from "./Box.module.css"

type Props = {
  children: ReactNode
  style?: CSSProperties
}

export const Box: FC<Props> = ({ children, style }) => {
  return (
    <div className={styles.box} style={style}>
      {children}
    </div>
  )
}
