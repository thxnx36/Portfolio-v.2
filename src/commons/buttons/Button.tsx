import { CSSProperties, FC, ReactNode } from "react"
import styles from "./Button.module.css"

type Props = {
  text: string
  icon?: ReactNode
  style?: CSSProperties
}

export const Button: FC<Props> = ({ text, icon, style }) => {
  return (
    <button style={style} className={styles.button}>
      <div className={styles.container}>
        <span className={styles.text}>{text}</span>
        <span className={styles.icon}>{icon}</span>
      </div>
    </button>
  )
}
