import { FC, ReactNode } from "react"
import styles from "./Button.module.css"

type Props = {
  text: string
  icon?: ReactNode
  size?: string
}

export const Button: FC<Props> = ({ text, icon, size }) => {
  return (
    <button className={styles.button}>
      <div className={styles.container}>
        <span className={styles.text}>{text}</span>
        <span className={styles.icon}>{icon}</span>
      </div>
    </button>
  )
}
