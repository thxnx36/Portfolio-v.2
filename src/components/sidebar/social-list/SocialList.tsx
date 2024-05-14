import { FC } from "react"
import { MySocialListType } from "../../../types/my-social-list-type"
import styles from "./SocialList.module.css"

type Props = {
  list: MySocialListType[]
}

export const SocialList: FC<Props> = ({ list }) => {
  return (
    <ul className={styles.socialContainer}>
      {list.map(({ id, icon, link }) => (
        <li key={id} className={styles.socialItem}>
          <a className={styles.link} target="_blank" href={link}>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
