import { forwardRef } from 'react'
import { Paragraph } from 'src/shared'
import { formatDateTime } from 'src/utils'
import { MessageType } from 'src/types'
import styles from './ChatMessages.module.css'

type Props = {
  messages: MessageType[]
  adminSender: string
  userSender: string
}

export const ChatMessages = forwardRef<HTMLUListElement, Props>(
  ({ messages, adminSender, userSender }, ref) => {
    return (
      <ul className={styles.messagesContent} ref={ref}>
        {messages.map((msg, index) => (
          <li
            key={index}
            className={msg?.sender === adminSender ? styles.admin : styles.user}
          >
            {msg.sender === adminSender && (
              <span className={`${styles.arrow} ${styles.left}`} />
            )}
            <div
              className={
                msg.sender === adminSender
                  ? styles.adminMessage
                  : styles.userMessage
              }
            >
              <Paragraph>{msg?.text}</Paragraph>
              <small className={styles.time}>
                {formatDateTime(msg?.timestamp!)}
              </small>
            </div>
            {msg.sender === userSender && (
              <span className={`${styles.arrow} ${styles.right}`} />
            )}
          </li>
        ))}
      </ul>
    )
  },
)
