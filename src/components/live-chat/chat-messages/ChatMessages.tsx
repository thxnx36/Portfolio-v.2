import {
  FORMAT_DATE,
  SENDER_BOT,
  SENDER_USER,
  STATUS_MESSAGE,
} from '../../../constans'
import { forwardRef } from 'react'
import { Paragraph } from '../../../shared'
import { ChatContentType } from '../../../types'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { IoCheckmarkDone } from 'react-icons/io5'
import { MdError } from 'react-icons/md'
import { format } from 'date-fns'
import styles from './ChatMessages.module.css'

type Props = {
  messages: ChatContentType[]
}

export const ChatMessages = forwardRef<HTMLUListElement, Props>(
  ({ messages }, ref) => {
    const formattedTime = (timestamp: number) =>
      format(new Date(timestamp), FORMAT_DATE)

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
              <span className={styles.statusWrap}>
                {msg.sender === SENDER_USER ? (
                  <>
                    <>
                      {msg.status === STATUS_MESSAGE.loading && (
                        <IoCheckmarkOutline />
                      )}
                      {msg.status === STATUS_MESSAGE.success && (
                        <IoCheckmarkDone />
                      )}
                      {msg.status === STATUS_MESSAGE.error && (
                        <MdError color='red' />
                      )}
                    </>
                    <span className={styles.userTime}>
                      {formattedTime(msg.timestamp)}
                    </span>
                  </>
                ) : (
                  <span className={styles.botTime}>
                    {formattedTime(msg.timestamp)}
                  </span>
                )}
              </span>
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
