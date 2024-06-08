import { ChangeEvent, FC, FormEvent } from 'react'
import { Textarea } from 'src/shared'
import { IoSend } from 'react-icons/io5'
import styles from './ChatFooter.module.css'

type Props = {
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  sendMessage: (e: FormEvent) => Promise<void>
  isDisabledButton: boolean
}

export const ChatFooter: FC<Props> = ({
  value,
  onChange,
  onKeyDown,
  sendMessage,
  placeholder,
  isDisabledButton,
}) => {
  return (
    <form onSubmit={sendMessage} className={styles.chatFooterWrap}>
      <Textarea
        style={{
          resize: 'none',
        }}
        id='chat-textarea'
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        rows={1}
      />
      <button
        className={
          isDisabledButton
            ? `${styles.sendButton} ${styles.disabled}`
            : styles.sendButton
        }
      >
        <IoSend size={'1.5em'} />
      </button>
    </form>
  )
}
