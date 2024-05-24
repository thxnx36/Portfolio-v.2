import type { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  value?: string
  errorText?: string
  error?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<Props> = ({
  value,
  onChange,
  error,
  errorText,
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        {...props}
        className={error ? `${styles.input} ${styles.error}` : styles.input}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className={styles.errorMessage}>{errorText || 'Some errors'}</p>
      )}
    </div>
  )
}
