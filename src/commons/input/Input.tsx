import { ChangeEvent, FC } from "react"
import styles from "./Input.module.css"

type Props = {
  value?: string
  onChange?: (value: string) => void
  type?: string
  errorText?: string
  placeholder?: string
  error?: boolean
}

export const Input: FC<Props> = ({
  value,
  onChange,
  placeholder,
  type,
  error,
  errorText,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange && onChange(e.target.value)

  return (
    <div className={styles.inputContainer}>
      <input
        className={error ? `${styles.input} ${styles.error}` : styles.input}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        type={type || "text"}
      />
      {error && (
        <p className={styles.errorMessage}>{errorText || "Some errors"}</p>
      )}
    </div>
  )
}
