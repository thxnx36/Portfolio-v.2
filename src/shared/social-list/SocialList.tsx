import { type FC } from 'react'
import styles from './SocialList.module.css'
import { useMySocialList } from 'src/hooks'

type Props = {
  visibleIds?: number[]
}

export const SocialList: FC<Props> = ({ visibleIds }) => {
  const { socialList } = useMySocialList()

  const filteredSocialList = visibleIds
    ? socialList.filter(item => visibleIds.includes(item.id))
    : socialList

  return (
    <address>
      <ul className={styles.socialContainer}>
        {filteredSocialList.map(({ id, icon, link, bgColor }) => (
          <li key={id} className={styles.socialItem}>
            <a
              className={styles.link}
              target='_blank'
              href={link}
              rel='noreferrer'
            >
              {icon}
            </a>
            <span
              className={styles.background}
              style={{ backgroundColor: bgColor }}
            ></span>
          </li>
        ))}
      </ul>
    </address>
  )
}
