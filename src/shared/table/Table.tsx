import type { FC } from 'react'
import { Paragraph } from '../paragraph'
import { Title } from '../title'
import { classNames } from 'src/utils'
import styles from './Table.module.css'

type Props = {
  namePlace: string
  namePosition: string
  date: string | number
  title: string
  description: string
  url: string
}

export const Table: FC<Props> = ({
  namePlace,
  namePosition,
  date,
  title,
  description,
  url,
}) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.place}>
        <a
          className={classNames(
            styles.link,
            url === '#' && styles.disabledLink,
          )}
          href={url}
          target='_blank'
          rel='noreferrer'
        >
          <Title
            style={{ marginBottom: '15px' }}
            tag='h4'
            size='sm'
            fontWeight='regular'
          >
            {namePlace}
          </Title>
        </a>
        <div className={styles.period}>
          <p className={styles.position}>{namePosition}</p>
          <span className={styles.date}>
            <p>{date}</p>
          </span>
        </div>
      </div>
      <article className={styles.description}>
        <Title tag='h4' size='sm' fontWeight='regular'>
          {title}
        </Title>
        <Paragraph style={{ textAlign: 'left', margin: 0 }}>
          {description}
        </Paragraph>
      </article>
    </div>
  )
}
