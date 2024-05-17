import { CSSProperties, FC, ReactNode } from "react"
import styles from "./Container.module.css"

type Props = {
  children: ReactNode
  style?: CSSProperties
}

export const Container: FC<Props> = ({ children, style }) => {
  return (
    <div style={style} className={styles.container}>
      {children}
    </div>
  )
}
