import type { FC } from 'react'
import { userPhoto } from 'src/assets'
import { Avatar, Paragraph, SocialList } from 'src/shared'
import { MySocialListType } from 'src/types'
import styles from './UserContact.module.css'

type Props = {
  socialList: MySocialListType[]
  userName: string
}

export const UserContact: FC<Props> = ({ socialList, userName }) => {
  return (
    <div className={styles.userContact}>
      <Avatar className={styles.avatar} withBorder src={userPhoto} />
      <div className={styles.info}>
        <Paragraph style={{ margin: '0 0 5px' }}>{userName}</Paragraph>
        <SocialList list={socialList} />
      </div>
    </div>
  )
}
