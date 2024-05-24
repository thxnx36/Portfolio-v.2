import type { FC } from 'react'
import type { MySocialListType } from '../../types'
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
              <a className={styles.link} target='_blank' href={link} rel="noreferrer">
                {icon}
              </a>
            </ToolTip>
          </li>
        ))}
      </ul>
    </address>
  )
}
