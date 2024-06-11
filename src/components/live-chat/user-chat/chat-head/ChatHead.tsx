import { FC } from 'react'
import { IoClose } from 'react-icons/io5'
import { chatPhoto } from 'src/assets'
import { Avatar, Paragraph } from 'src/shared'
import { BsFullscreen } from 'react-icons/bs'
import { BsFullscreenExit } from 'react-icons/bs'
import { RxExit } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { ROUTES } from 'src/constants'
import styles from './ChatHead.module.css'
import { PiTrashSimpleLight } from "react-icons/pi";
type Props = {
  onToggleChat: () => void
  onToogleZoomWindow: () => void
  onLeaveChat: () => void
  isZoomWindow: boolean
  isJoinedUser: boolean
}

export const ChatHead: FC<Props> = ({
  onToggleChat,
  onToogleZoomWindow,
  onLeaveChat,
  isZoomWindow,
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
      <div className={styles.buttonsWrap}>
        <button className={styles.zoomButton} onClick={onToogleZoomWindow}>
          {isZoomWindow ? <BsFullscreenExit size={'1.1em'}/> : <BsFullscreen />}
        </button>
        {isJoinedUser ? (
          <>
            <button onClick={onLeaveChat}>
              <PiTrashSimpleLight size={'1.5em'} />
            </button>
            <button onClick={onLeaveChat}>
              <RxExit size={'1.2em'} />
            </button>
          </>
        ) : null}
        <button onClick={onToggleChat}>
          <IoClose size={'2em'} />
        </button>
      </div>
    </div>
  )
}
