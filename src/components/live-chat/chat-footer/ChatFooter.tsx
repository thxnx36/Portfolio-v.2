import { ChangeEvent, FC } from 'react'
import { Textarea } from '../../../shared'
import { IoSend } from 'react-icons/io5'
import styles from './ChatFooter.module.css'

type Props = {
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  sendMessage: () => void
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
  return (
    <div className={styles.chatFooterWrap}>
      <Textarea
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
        onClick={sendMessage}
        className={
          isDisabledButton
            ? `${styles.sendButton} ${styles.disabled}`
            : styles.sendButton
        }
      >
        <IoSend />
      </button>
    </div>
  )
}
