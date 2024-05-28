import { SENDER_BOT, SENDER_USER } from '../../../constants'
import { forwardRef } from 'react'
import { Paragraph } from '../../../shared'
import { ChatContentType } from '../../../types'
import { MessageTimeStatus } from './message-time-status/MessageTimeStatus'
import { formatDateTime } from '../../../utils'
import styles from './ChatMessages.module.css'

type Props = {
  messages: ChatContentType[]
}

export const ChatMessages = forwardRef<HTMLUListElement, Props>(
  ({ messages }, ref) => {
    return (
      <ul className={styles.messagesContent} ref={ref}>
        {messages.map((msg, index) => (
          <li
            key={index}
            className={msg.sender === SENDER_BOT ? styles.bot : styles.user}
          >
            {msg.sender === SENDER_BOT && (
              <span className={`${styles.arrow} ${styles.left}`} />
            )}
            <div
              className={
                msg.sender === SENDER_BOT
                  ? styles.botMessage
                  : styles.userMessage
              }
            >
              <Paragraph>{msg.text}</Paragraph>
              <MessageTimeStatus
                isSenderUser={msg.sender === SENDER_USER}
                time={formatDateTime(msg.timestamp)}
                messageStatus={msg.status}
              />
            </div>
            {msg.sender === SENDER_USER && (
              <span className={`${styles.arrow} ${styles.right}`} />
            )}
          </li>
        ))}
      </ul>
    )
  },
)
