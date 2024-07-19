import { FC } from 'react'
import { IoSend } from 'react-icons/io5'
import styles from './SendMessageChat.module.css'
import { classNames } from 'src/utils'

type Props = {
  onClick?: () => void
  isDisabled?: boolean
}
export const SendMessageChatButton: FC<Props> = ({ onClick, isDisabled }) => {
  return (
    <button
      className={classNames(styles.sendButton, isDisabled && styles.disabled)}
      onClick={onClick}
    >
      <IoSend size={'1.5em'} />
    </button>
  )
}
