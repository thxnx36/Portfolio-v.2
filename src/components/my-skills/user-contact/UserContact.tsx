import { FC } from 'react'
import { Avatar, Paragraph, SocialList } from '../../../shared'
import { MySocialListType } from '../../../types/my-social-list-type'
import { userPhoto } from '../../../assets'
import styles from './UserContact.module.css'

type Props = {
  socialList: MySocialListType[]
  userName: string
}

export const UserContact: FC<Props> = ({ socialList, userName }) => {
  return (
    <div className={styles.userContact}>
      <Avatar className={styles.avatar} withBorder src={userPhoto} />
      <Paragraph sx={{ margin: '10px 0 0' }}>{userName}</Paragraph>
      <SocialList list={socialList} />
    </div>
  )
}
