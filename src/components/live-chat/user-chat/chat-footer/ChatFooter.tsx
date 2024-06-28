import type { FC } from 'react'
import { SendMessageChatButton, Textarea } from 'src/shared'
import styles from './ChatFooter.module.css'
import { useSendMessageInChat, useTextAreaHeight } from 'src/hooks'
import { ADMIN } from 'src/constants'
import { Socket } from 'socket.io-client'

type Props = {
  userId: string
  socket: Socket | null
  isDisabledInput: boolean
  placeholder: string
}

export const ChatFooter: FC<Props> = ({
  socket,
  userId,
  isDisabledInput,
  placeholder,
}) => {

  const {
    onSendMessage,
    handleKeyDown,
    handleChangeTextArea,
    textareaContent,
    isDisabledButton,
  } = useSendMessageInChat({
    socket,
    sender: userId,
    receiver: ADMIN,
  })
  
  const { textareaRef } = useTextAreaHeight({
    dependencies: [textareaContent],
  })

  return (
    <form onSubmit={onSendMessage} className={styles.chatFooterWrap}>
      <Textarea
        ref={textareaRef}
        id='chat-textarea'
        value={textareaContent}
        disabled={isDisabledInput}
        onChange={handleChangeTextArea}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={1}
      />
      <SendMessageChatButton isDisabled={isDisabledButton} />
    </form>
  )
}
