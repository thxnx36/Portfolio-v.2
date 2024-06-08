import { FC } from 'react'
import { IoCheckmarkDone, IoCheckmarkOutline } from 'react-icons/io5'
import { MdError } from 'react-icons/md'
import { STATUS_MESSAGE } from 'src/constants'
import styles from './MessageTimeStatus.module.css'

type Props = {
  isSenderUser: boolean
  messageStatus: string
  time: string
}

export const MessageTimeStatus: FC<Props> = ({
  isSenderUser,
  messageStatus,
  time,
}) => {
  return (
    <span className={styles.statusTimeWrap}>
      {isSenderUser ? (
        <>
          {messageStatus === STATUS_MESSAGE.loading && <IoCheckmarkOutline />}
          {messageStatus === STATUS_MESSAGE.success && <IoCheckmarkDone />}
          {messageStatus === STATUS_MESSAGE.error && <MdError color='red' />}
          <span className={styles.userTime}>{time}</span>
        </>
      ) : (
        <span className={styles.botTime}>{time}</span>
      )}
    </span>
  )
}
