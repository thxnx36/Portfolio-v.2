import { FC } from "react"
import { Avatar } from "../../../commons/avatar/Avatar"
import { Paragraph } from "../../../commons/paragraph/Paragraph"
import { MOCK_USER } from "../../../constans/images"
import { MySocialListType } from "../../../types/my-social-list-type"
import { SocialList } from "../../../commons/social-list/SocialList"
import styles from "./UserContact.module.css"

type Props = {
  socialList: MySocialListType[]
  userName: string
}

export const UserContact: FC<Props> = ({ socialList, userName }) => {
  return (
    <div className={styles.userContact}>
      <Avatar style={{ width: 70, height: 70 }} withBorder src={MOCK_USER} />
      <Paragraph margin="10px 0 0">{userName}</Paragraph>
      <SocialList list={socialList} />
    </div>
  )
}
