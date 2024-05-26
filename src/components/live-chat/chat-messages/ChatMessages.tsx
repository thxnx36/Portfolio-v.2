import { forwardRef } from 'react'
import { Paragraph } from '../../../shared'
import { ChatContentType } from '../../../types'
import { SENDER_BOT, SENDER_USER } from '../../../constans'
import { IoCheckmarkOutline } from 'react-icons/io5'
import { IoCheckmarkDone } from 'react-icons/io5'
import { MdError } from 'react-icons/md'
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
              <Paragraph>
                {msg.text}
                <span className={styles.statusWrap}>
                  {msg.sender === SENDER_USER && (
                    <span>
                      {msg.status === 'loading' && <IoCheckmarkOutline />}
                      {msg.status === 'success' && <IoCheckmarkDone />}
                      {msg.status === 'error' && <MdError color='red' />}
                    </span>
                  )}
                </span>
              </Paragraph>
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
