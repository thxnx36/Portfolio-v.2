import { CSSProperties, FC, ReactNode } from "react"
import styles from "./Button.module.css"

type Props = {
  onClick?: () => void
  text: string
  icon?: ReactNode
  type?: string
  sx?: CSSProperties
  disabled?: boolean
}

export const Button: FC<Props> = ({
  text,
  icon,
  sx,
  disabled,
  type,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={sx}
      className={
        disabled ? `${styles.button} ${styles.disabled}` : styles.button
      }
    >
      <div className={styles.content}>
        <span className={styles.text}>{text}</span>
        <span className={styles.icon}>{icon}</span>
      </div>
    </button>
  )
}
