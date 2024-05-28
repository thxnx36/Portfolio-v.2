import { ChatHead } from './chat-head/ChatHead'
import { useLocalStorage } from '../../hooks'
import {
  OPEN,
  CLOSE,
  KEY,
  SENDER_USER,
  SENDER_BOT,
  HEIGHT_INPUT,
  MESSAGE_LENGTH,
  STATUS_MESSAGE,
} from '../../constans'
import { ChatFooter } from './chat-footer/ChatFooter'
import { useTranslation } from 'react-i18next'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { ChatMessages } from './chat-messages/ChatMessages'
import { ChatContentType } from '../../types'
import { soundResponseMessage, soundSendMessage } from '../../assets'
import { playSoundsInChat } from '../../utils'
import { useSendTelegramMessageMutation } from '../../app/api'
import { IoChatbubbles } from 'react-icons/io5'
import { Button } from '../../shared'
import styles from './LiveChat.module.css'

export const LiveChat = () => {
  const { t } = useTranslation()
  const [
    sendTelegramMessage,
    {
      isLoading: isLoadingMessage,
      isError: isErrorMessage,
      isSuccess: isSuccessMessage,
    },
  ] = useSendTelegramMessageMutation()

  const messagesContainerRef = useRef<HTMLUListElement>(null)
  const [openChat, setOpenChat] = useLocalStorage(KEY, CLOSE)
  const [textareaContent, setTextareaContent] = useState<string>('')
  const [textareaHeight, setTextareaHeight] = useState<number>(HEIGHT_INPUT)
  const [isShowWarning, setIsShowWarning] = useState<boolean>(false)

  //mock messages
  const [messages, setMessages] = useState<ChatContentType[]>([
    {
      sender: SENDER_BOT,
      text: t('chat.THERE_WILL_BE_CHAT') + ' 🧑‍💻🤏',
      status: 'none',
      timestamp: Date.now(),
    },
    {
      sender: SENDER_USER,
      text: t('chat.BELIEVE') + ' 🤞💪',
      status: 'success',
      timestamp: Date.now(),
    },
  ])

  const onToggleChat = () => setOpenChat(openChat === OPEN ? CLOSE : OPEN)

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, scrollHeight } = e.target
    if (value.length <= MESSAGE_LENGTH) {
      setTextareaContent(value)
      setTextareaHeight(scrollHeight)
    } else {
      setIsShowWarning(true)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(e)
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

  useEffect(() => {
    if (isLoadingMessage || isErrorMessage || isSuccessMessage) {
      setMessages(prevMessages => {
        const updatedMessages: ChatContentType[] = [...prevMessages]
        const lastIndex: number = updatedMessages.length - 1

        if (updatedMessages[lastIndex].sender === SENDER_USER) {
          if (isLoadingMessage) {
            updatedMessages[lastIndex].status = STATUS_MESSAGE.loading
          } else if (isSuccessMessage) {
            updatedMessages[lastIndex].status = STATUS_MESSAGE.success
          } else if (isErrorMessage) {
            updatedMessages[lastIndex].status = STATUS_MESSAGE.error
          }
        }

        return updatedMessages
      })
    }
  }, [isLoadingMessage, isErrorMessage, isSuccessMessage])

  useEffect(() => {
    if (isShowWarning) {
      const timeoutId = setTimeout(() => setIsShowWarning(false), 1500)

      return () => clearTimeout(timeoutId)
    }
  }, [isShowWarning])

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault()
    if (textareaContent.trim()) {
      const newMessage = {
        sender: SENDER_USER,
        text: textareaContent,
        status: STATUS_MESSAGE.loading,
        timestamp: Date.now(),
      }
      setMessages([...messages, newMessage])
      setTextareaContent('')
      setTextareaHeight(HEIGHT_INPUT)
      playSoundsInChat(soundSendMessage)
      scrollToBottom()
      await sendTelegramMessage({ message: textareaContent })
    }

    // simulate bot response
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        {
          sender: SENDER_BOT,
          text: 'This is a bot response!',
          status: 'none',
          timestamp: Date.now(),
        },
      ])
      playSoundsInChat(soundResponseMessage)
      scrollToBottom()
    }, 1500)
  }

  const isOpenChat = openChat === OPEN
  const isDisabledButton = !textareaContent

  return (
    <>
      <div className={styles.openButton}>
        <Button
          onClick={onToggleChat}
          text='Live Chat'
          icon={<IoChatbubbles size={'1.2em'} />}
        />
      </div>

      {isOpenChat && (
        <div className={styles.chat}>
          <ChatHead onToggleChat={onToggleChat} />
          <ChatMessages ref={messagesContainerRef} messages={messages} />
          {isShowWarning && (
            <span className={styles.lengthWarning}>
              {t('toast.warning.LENGTH_TEXT')}
            </span>
          )}
          <ChatFooter
            value={textareaContent}
            sendMessage={sendMessage}
            isDisabledButton={isDisabledButton}
            onChange={handleChangeTextArea}
            onKeyDown={handleKeyDown}
            placeholder={t('input.placeholder.YOUR_MESSAGE')}
            textareaHeight={textareaHeight}
          />
        </div>
      )}
    </>
  )
}
