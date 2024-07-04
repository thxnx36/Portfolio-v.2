import { FC } from 'react'
import { BackButton } from '../buttons'
import { Title } from '../title'
import { Toolbar } from '../toolbar'
import styles from './PagesHead.module.css'

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
      <Toolbar />
    </div>
  )
}
