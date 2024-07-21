import { FC } from 'react'
import { ArrowButton } from '../buttons'
import { Title } from '../title'
import { Toolbar } from '../toolbar'
import { IoIosArrowBack } from 'react-icons/io'
import styles from './PagesHead.module.css'

type Props = {
  title?: string
  goBack?: () => void
}

export const PagesHead: FC<Props> = ({ title, goBack }) => {
  return (
    <div className={styles.pagesHead}>
      <div className={styles.title}>
        <ArrowButton icon={<IoIosArrowBack size={'2em'} />} onClick={goBack} />
        <Title style={{ margin: 0 }} tag='h2'>
          {title}
        </Title>
      </div>
      <Toolbar />
    </div>
  )
}
