import { FC } from 'react'
import { Avatar, Paragraph } from '../../../shared'
import { IoClose } from 'react-icons/io5'
import { IoChatbubbles } from 'react-icons/io5'
import { chatPhoto } from '../../../assets'
import styles from './ChatHead.module.css'

type Props = {
  onToggleChat: () => void
  isOpenChat: boolean
}

export const ChatHead: FC<Props> = ({ onToggleChat, isOpenChat }) => {
  return (
    <>
      {isOpenChat && (
        <div className={styles.overlay} onClick={onToggleChat}></div>
      )}
      <div className={styles.buttonsContainer}>
        {isOpenChat ? (
          <>
            <div className={styles.contactWrap}>
              <Avatar className={styles.avatar} src={chatPhoto} />
              <div className={styles.contact}>
                <Paragraph>Vlad</Paragraph>
                <Paragraph className={styles.status}>online</Paragraph>
              </div>
            </div>
            <button className={styles.closeButton} onClick={onToggleChat}>
              <IoClose size={'2em'} />
            </button>
          </>
        ) : (
          <button className={styles.openButton} onClick={onToggleChat}>
            <Paragraph>
              Live Chat <IoChatbubbles size={'1.2em'} />
            </Paragraph>
          </button>
        )}
      </div>
    </>
  )
}
