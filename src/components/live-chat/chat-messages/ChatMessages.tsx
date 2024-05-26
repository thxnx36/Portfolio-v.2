import { forwardRef } from 'react'
import { Paragraph } from '../../../shared'
import { ChatContentType } from '../../../types'
import { SENDER_BOT, SENDER_USER } from '../../../constans'
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
            <Paragraph
              className={
                msg.sender === SENDER_BOT
                  ? styles.botMessage
                  : styles.userMessage
              }
            >
              {msg.text}
            </Paragraph>
            {msg.sender === SENDER_USER && (
              <span className={`${styles.arrow} ${styles.right}`} />
            )}
          </li>
        ))}
      </ul>
    )
  },
)
