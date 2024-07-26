import type { FC } from 'react'
import { ButtonWithIcon, Textarea } from 'src/shared'
import { BiSolidSend } from 'react-icons/bi'
import { useSendMessageInChat, useTextAreaHeight } from 'src/hooks'
import { ADMIN } from 'src/constants'
import { Socket } from 'socket.io-client'
import styles from './ChatFooter.module.css'

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
      <ButtonWithIcon icon={<BiSolidSend />} isDisabled={isDisabledButton} />
    </form>
  )
}
