import type { FC } from 'react'
import { chatPhoto } from 'src/assets'
import { Avatar, Paragraph } from 'src/shared'
import { Link } from 'react-router-dom'
import { ROUTES } from 'src/constants'
import { ButtonsWrapper } from './buttons-wrapper/ButtonsWrapper'
import { useTranslation } from 'react-i18next'
import styles from './ChatHead.module.css'

type Props = {
  onToggleChat: () => void
  onToggleZoomWindow: () => void
  onDeleteChat: () => void
  onDeleteChatHistory: () => Promise<void>
  isJoinedUser: boolean
  showDeleteHistory: boolean
}

export const ChatHead: FC<Props> = ({
  onToggleChat,
  onToggleZoomWindow,
  onDeleteChat,
  onDeleteChatHistory,
  isJoinedUser,
  showDeleteHistory,
}) => {
  const { t } = useTranslation()
  return (
    <div className={`${styles.chatHeadContainer} drag-handle`}>
      <div className={styles.contactWrap}>
        <Link to={ROUTES.admin}>
          <Avatar className={styles.avatar} src={chatPhoto} />
        </Link>
        <div className={styles.contact}>
          <Paragraph>{t('chat.NAME')}</Paragraph>
          <Paragraph className={styles.status}>
            {t('chat.ONLINE_STATUS')}
          </Paragraph>
        </div>
      </div>
      <ButtonsWrapper
        onToggleChat={onToggleChat}
        onToggleZoomWindow={onToggleZoomWindow}
        onDeleteChat={onDeleteChat}
        onDeleteChatHistory={onDeleteChatHistory}
        isJoinedUser={isJoinedUser}
        showDeleteHistory={showDeleteHistory}
      />
    </div>
  )
}
