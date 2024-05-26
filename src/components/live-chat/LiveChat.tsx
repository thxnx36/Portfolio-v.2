import { ChatHead } from './chat-head/ChatHead'
import { useLocalStorage } from '../../hooks'
import { OPEN, CLOSE, KEY, SENDER_USER, SENDER_BOT } from '../../constans'
import { ChatFooter } from './chat-footer/ChatFooter'
import { useTranslation } from 'react-i18next'
import { ChangeEvent, useRef, useState } from 'react'
import { ChatMessages } from './chat-messages/ChatMessages'
import { ChatContentType } from '../../types'
import { soundResponseMessage, soundSendMessage } from '../../assets'
import { playSoundsInChat } from '../../utils'
import styles from './LiveChat.module.css'

export const LiveChat = () => {
  const { t } = useTranslation()

  const messagesContainerRef = useRef<HTMLUListElement>(null)
  const [openChat, setOpenChat] = useLocalStorage(KEY, CLOSE)
  const [textareaContent, setTextareaContent] = useState<string>('')
  const [textareaHeight, setTextareaHeight] = useState<number>(32)

  //mock messages
  const [messages, setMessages] = useState<ChatContentType[]>([
    { sender: SENDER_BOT, text: t('chat.THERE_WILL_BE_CHAT') + '🧑‍💻🤏' },
    { sender: SENDER_USER, text: t('chat.BELIEVE') + '🤞💪' },
  ])

  const onToggleChat = () => setOpenChat(openChat === OPEN ? CLOSE : OPEN)

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaContent(e.target.value)
    setTextareaHeight(e.target.scrollHeight)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const scrollToBottom = () =>
    requestAnimationFrame(() => {
      if (messagesContainerRef.current) {
        messagesContainerRef.current.scrollTo({
          top: messagesContainerRef.current.scrollHeight,
          behavior: 'smooth',
        })
      }
    })

  const sendMessage = () => {
    if (textareaContent.trim()) {
      setMessages([...messages, { sender: SENDER_USER, text: textareaContent }])
      setTextareaContent('')
      setTextareaHeight(32)
      playSoundsInChat(soundSendMessage)
      scrollToBottom()

      // simulate bot response
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: SENDER_BOT, text: 'This is a bot response!' },
        ])
        playSoundsInChat(soundResponseMessage)
        scrollToBottom()
      }, 1500)
    }
  }

  const isOpenChat = openChat === OPEN
  const isDisabledButton = !textareaContent

  return (
    <div
      className={
        isOpenChat
          ? `${styles.chat} ${styles.open}`
          : `${styles.chat} ${styles.close}`
      }
    >
      <ChatHead onToggleChat={onToggleChat} isOpenChat={isOpenChat} />
      {isOpenChat && (
        <>
          <ChatMessages ref={messagesContainerRef} messages={messages} />
          <ChatFooter
            value={textareaContent}
            sendMessage={sendMessage}
            isDisabledButton={isDisabledButton}
            onChange={handleChangeTextArea}
            onKeyDown={handleKeyDown}
            placeholder={t('input.placeholder.YOUR_MESSAGE')}
            textareaHeight={textareaHeight}
          />
        </>
      )}
    </div>
  )
}
