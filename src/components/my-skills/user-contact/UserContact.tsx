import type { FC } from 'react'
import { userPhoto } from 'src/assets'
import { Avatar, Paragraph, SocialList } from 'src/shared'
import styles from './UserContact.module.css'

type Props = {
  userName: string
}

export const UserContact: FC<Props> = ({ userName }) => {
  return (
    <div className={styles.userContact}>
      <Avatar className={styles.avatar} withBorder src={userPhoto} />
      <div className={styles.info}>
        <Paragraph style={{ margin: '0 0 5px' }}>{userName}</Paragraph>
        <SocialList />
      </div>
    </div>
  )
}
