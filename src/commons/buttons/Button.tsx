import { CSSProperties, FC, ReactNode } from "react"
import styles from "./Button.module.css"

type Props = {
  onClick?: () => void
  text: string
  icon?: ReactNode
  style?: CSSProperties
  disabled?: boolean
}

export const Button: FC<Props> = ({ text, icon, style, disabled, onClick }) => {
  return (
    <button onClick={onClick} style={style} className={styles.button}>
      <div className={styles.content}>
        <span className={styles.text}>{text}</span>
        <span className={styles.icon}>{icon}</span>
      </div>
    </button>
  )
}
