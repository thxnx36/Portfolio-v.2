import {
  forwardRef,
  type ChangeEvent,
  type TextareaHTMLAttributes,
} from 'react'
import { classNames } from 'src/utils'
import styles from './Textarea.module.css'

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  value?: string
  errorText?: string
  error?: boolean
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(
  ({ value, error, errorText, onChange, ...props }, ref) => {
    return (
      <div className={styles.textareaContainer}>
        <textarea
          ref={ref}
          className={classNames(styles.textarea, error && styles.error)}
          onChange={onChange}
          value={value}
          {...props}
        />
        {error && (
          <p className={styles.errorMessage}>{errorText || 'Some errors'}</p>
        )}
      </div>
    )
  },
)
