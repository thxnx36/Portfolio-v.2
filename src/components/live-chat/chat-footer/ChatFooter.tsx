import { ChangeEvent, FC, FormEvent, useEffect, useRef } from 'react'
import { Textarea } from '../../../shared'
import { IoSend } from 'react-icons/io5'
import styles from './ChatFooter.module.css'

type Props = {
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  sendMessage: (e: FormEvent) => Promise<void>
  isDisabledButton: boolean
  textareaHeight?: number
}

export const ChatFooter: FC<Props> = ({
  value,
  onChange,
  onKeyDown,
  sendMessage,
  placeholder,
  isDisabledButton,
  textareaHeight,
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus()
    }
  }, [])

  return (
    <form onSubmit={sendMessage} className={styles.chatFooterWrap}>
      <Textarea
        ref={textAreaRef}
        style={{
          height: textareaHeight,
          resize: 'none',
          maxHeight: '200px',
        }}
        id='chat-textarea'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
      <button
        className={
          isDisabledButton
            ? `${styles.sendButton} ${styles.disabled}`
            : styles.sendButton
        }
      >
        <IoSend />
      </button>
    </form>
  )
}
