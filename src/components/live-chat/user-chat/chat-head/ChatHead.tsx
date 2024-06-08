import { FC } from 'react'
import { IoClose } from 'react-icons/io5'
import { chatPhoto } from 'src/assets'
import { Avatar, Paragraph } from 'src/shared'
import { BsFullscreen } from 'react-icons/bs'
import { BsFullscreenExit } from 'react-icons/bs'
import { RxExit } from 'react-icons/rx'
import styles from './ChatHead.module.css'

type Props = {
  onToggleChat: () => void
  onToogleZoomWindow: () => void
  onLeaveChat: () => void
  isZoomWindow: boolean
  showExitButton: string
}

export const ChatHead: FC<Props> = ({
  onToggleChat,
  onToogleZoomWindow,
  onLeaveChat,
  isZoomWindow,
  showExitButton,
}) => {
  return (
    <div className={styles.chatHeadContainer}>
      <div className={styles.contactWrap}>
        <Avatar className={styles.avatar} src={chatPhoto} />
        <div className={styles.contact}>
          <Paragraph>Vlad</Paragraph>
          <Paragraph className={styles.status}>online</Paragraph>
        </div>
      </div>
      <div className={styles.buttonsWrap}>
        <button className={styles.zoomButton} onClick={onToogleZoomWindow}>
          {isZoomWindow ? <BsFullscreenExit /> : <BsFullscreen />}
        </button>
        {showExitButton === 'true' ? (
          <button onClick={onLeaveChat}>
            <RxExit size={'1.2em'} />
          </button>
        ) : null}
        <button onClick={onToggleChat}>
          <IoClose size={'2em'} />
        </button>
      </div>
    </div>
  )
}
