import { FC } from 'react'
import { MySocialListType } from '../../types/my-social-list-type'
import { ToolTip } from '../tool-tip'
import styles from './SocialList.module.css'

type Props = {
  list: MySocialListType[]
}

export const SocialList: FC<Props> = ({ list }) => {
  return (
    <address>
      <ul className={styles.socialContainer}>
        {list.map(({ id, icon, link, name }) => (
          <li key={id} className={styles.socialItem}>
            <ToolTip text={name}>
              <a className={styles.link} target='_blank' href={link}>
                {icon}
              </a>
            </ToolTip>
          </li>
        ))}
      </ul>
    </address>
  )
}
