import { FC } from 'react'
import { MessageType, UserType } from 'src/types'
import { Paragraph } from 'src/shared'
import { formatDateTime } from 'src/utils'
import styles from './ChatWindow.module.css'

type Props = {
  messages?: MessageType[]
  selectedUser: UserType | null
}

export const ChatWindow: FC<Props> = ({ messages, selectedUser }) => {
  return (
    <div className={styles.chatWindow}>
      {selectedUser && (
        <ul className={styles.messagesContent}>
          {messages?.map(msg => (
            <li
              key={msg?.messageId}
              className={
                msg?.sender === selectedUser?.userId
                  ? styles.user
                  : styles.admin
              }
            >
              {msg?.text?.length && (
                <div
                  className={
                    msg?.sender === selectedUser?.userId
                      ? styles.userMessage
                      : styles.adminMessage
                  }
                >
                  <Paragraph>{msg?.text}</Paragraph>
                </div>
              )}
              {msg?.timestamp && (
                <small className={styles.time}>
                  {formatDateTime(msg?.timestamp, true)}
                </small>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
