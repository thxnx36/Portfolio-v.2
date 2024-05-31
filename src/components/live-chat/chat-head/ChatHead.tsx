import { FC } from 'react'
import { IoClose } from 'react-icons/io5'
import { chatPhoto } from 'src/assets'
import { Avatar, Paragraph } from 'src/shared'
import { BsFullscreen } from 'react-icons/bs'
import { BsFullscreenExit } from 'react-icons/bs'
import styles from './ChatHead.module.css'

type Props = {
  onToggleChat: () => void
  onToogleZoomWindow: () => void
  isZoomWindow: boolean
}

export const ChatHead: FC<Props> = ({
  onToggleChat,
  onToogleZoomWindow,
  isZoomWindow,
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
        <button onClick={onToggleChat}>
          <IoClose size={'2em'} />
        </button>
      </div>
    </div>
  )
}
