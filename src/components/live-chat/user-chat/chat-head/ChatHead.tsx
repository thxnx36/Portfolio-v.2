import { FC } from 'react'
import { chatPhoto } from 'src/assets'
import { Avatar, Paragraph } from 'src/shared'
import { Link } from 'react-router-dom'
import { ROUTES } from 'src/constants'
import { ButtonsWrapper } from './buttons-wrapper/ButtonsWrapper'
import styles from './ChatHead.module.css'

type Props = {
  onToggleChat: () => void
  onToogleZoomWindow: () => void
  onLeaveChat: () => void
  onDeleteChat: () => Promise<void>
  isJoinedUser: boolean
}

export const ChatHead: FC<Props> = ({
  onToggleChat,
  onToogleZoomWindow,
  onLeaveChat,
  onDeleteChat,
  isJoinedUser,
}) => {
  return (
    <div className={styles.chatHeadContainer}>
      <div className={styles.contactWrap}>
        <Link to={ROUTES.admin}>
          <Avatar className={styles.avatar} src={chatPhoto} />
        </Link>
        <div className={styles.contact}>
          <Paragraph>Vlad</Paragraph>
          <Paragraph className={styles.status}>online</Paragraph>
        </div>
      </div>
      <ButtonsWrapper
        onToggleChat={onToggleChat}
        onToogleZoomWindow={onToogleZoomWindow}
        onLeaveChat={onLeaveChat}
        onDeleteChat={onDeleteChat}
        isJoinedUser={isJoinedUser}
      />
    </div>
  )
}
