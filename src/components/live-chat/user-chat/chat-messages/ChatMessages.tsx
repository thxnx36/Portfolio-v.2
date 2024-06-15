import { forwardRef, useMemo } from 'react'
import { Paragraph } from 'src/shared'
import { formatDateTime, formatMessage } from 'src/utils'
import { MessageType } from 'src/types'
import { useTranslation } from 'react-i18next'
import styles from './ChatMessages.module.css'

type Props = {
  messages: MessageType[]
  adminSender: string
  userSender: string
  userName: string
}

export const ChatMessages = forwardRef<HTMLUListElement, Props>(
  ({ messages, adminSender, userSender, userName }, ref) => {
    const { t } = useTranslation()
    const filteredMessages = useMemo(
      () =>
        messages.filter(
          msg => msg.receiver === userSender || msg.sender === userSender,
        ),
      [messages, userSender],
    )

    return (
      <ul ref={ref} className={styles.messagesContent}>
        <li className={styles.admin}>
          <span className={`${styles.arrow} ${styles.left}`} />
          <div className={styles.adminMessage}>
            <Paragraph>
              {t('chat.HI')}, {userName}! {t('chat.HOW_ARE_YOU')} 😎🤙
            </Paragraph>
            <small className={styles.time}>{formatDateTime(Date.now())}</small>
          </div>
        </li>

        {filteredMessages?.map(msg => (
          <li
            key={msg?.messageId}
            className={msg?.sender === adminSender ? styles.admin : styles.user}
          >
            {msg.sender === adminSender && (
              <span className={`${styles.arrow} ${styles.left}`} />
            )}
            <div
              className={
                msg?.sender === adminSender
                  ? styles.adminMessage
                  : styles.userMessage
              }
            >
              <p
                dangerouslySetInnerHTML={{ __html: formatMessage(msg?.text) }}
              />
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
