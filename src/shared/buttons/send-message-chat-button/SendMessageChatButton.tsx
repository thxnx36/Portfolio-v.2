import { FC } from 'react'
import { IoSend } from 'react-icons/io5'
import styles from './SendMessageChat.module.css'

type Props = {
  onClick?: () => void
  isDisabled?: boolean
}
export const SendMessageChatButton: FC<Props> = ({ onClick, isDisabled }) => {
  return (
    <button
      className={
        isDisabled
          ? `${styles.sendButton} ${styles.disabled}`
          : styles.sendButton
      }
      onClick={onClick}
    >
      <IoSend size={'1.5em'} />
    </button>
  )
}
