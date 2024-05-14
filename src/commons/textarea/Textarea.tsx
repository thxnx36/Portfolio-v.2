import { ChangeEvent, FC } from "react"
import styles from "./Textarea.module.css"

type Props = {
  value?: string
  placeholder?: string
  rows: number
  cols: number
  errorText?: string
  error?: boolean
  onChange?: (value: string) => void
}

export const Textarea: FC<Props> = ({
  value,
  placeholder,
  rows,
  cols,
  error,
  errorText,
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    onChange && onChange(e.target.value)

  return (
    <div className={styles.textareaContainer}>
      <textarea
        className={
          error ? `${styles.textarea} ${styles.error}` : styles.textarea
        }
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
        cols={cols}
        rows={rows}
      />
      {error && (
        <p className={styles.errorMessage}>{errorText || "Some errors"}</p>
      )}
    </div>
  )
}
