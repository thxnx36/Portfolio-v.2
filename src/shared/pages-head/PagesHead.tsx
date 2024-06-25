
import { BackButton, ToggleLang } from "../buttons"
import { Title } from "../title"
import styles from './PagesHead.module.css'

import { FC } from 'react'

type Props = {
  onClick: () => void
  title?: string
}

export const PagesHead: FC<Props> = ({ onClick, title }) => {
  return (
    <div className={styles.pagesHead}>
      <div className={styles.title}>
        <BackButton onClick={onClick} />
        <Title style={{ margin: 0 }} tag='h2'>
          {title}
        </Title>
      </div>
      <ToggleLang uniqueToggletId={'toggle-lang-on-page'} />
    </div>
  )
}
