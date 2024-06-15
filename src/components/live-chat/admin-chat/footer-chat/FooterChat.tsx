import { SendMessageChatButton, Textarea } from 'src/shared'
import { ChangeEvent, FormEvent, forwardRef } from 'react'
import styles from './FooterChat.module.css'

type Props = {
  textAreaValue: string
  isDisabledButton: boolean
  onChangeMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  onSendMessage: (e: FormEvent) => Promise<void>
}

export const FooterChat = forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      textAreaValue,
      isDisabledButton,
      onChangeMessage,
      onSendMessage,
      onKeyDown,
    },
    ref,
  ) => {
    return (
      <form onSubmit={onSendMessage} className={styles.footerChat}>
        <Textarea
          ref={ref}
          value={textAreaValue}
          onChange={onChangeMessage}
          onKeyDown={onKeyDown}
          placeholder='Type text'
          style={{ overflow: 'auto', resize: 'none', maxHeight: '90px' }}
          rows={1}
        />
        <SendMessageChatButton isDisabled={isDisabledButton} />
      </form>
    )
  },
)
