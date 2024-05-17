import { ChangeEvent, FC, TextareaHTMLAttributes } from "react"
import styles from "./Textarea.module.css"

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value?: string
  errorText?: string
  error?: boolean
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: FC<Props> = ({
  value,
  error,
  errorText,
  onChange,
  ...props
}) => {
  return (
    <div className={styles.textareaContainer}>
      <textarea
        {...props}
        className={
          error ? `${styles.textarea} ${styles.error}` : styles.textarea
        }
        onChange={onChange}
        value={value}
      />
      {error && (
        <p className={styles.errorMessage}>{errorText || "Some errors"}</p>
      )}
    </div>
  )
}
