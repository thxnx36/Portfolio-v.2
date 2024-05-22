import { FC, ReactNode } from 'react'
import { Title } from '../title'
import { Paragraph } from '../paragraph'
import { text as t } from '../../localization'
import styles from './FlippedCard.module.css'

type Props = {
  title: string
  text: string
  isFlipped: boolean
  onFlip: () => void
  icon?: ReactNode
}

export const FlippedCard: FC<Props> = ({
  icon,
  title,
  text,
  isFlipped,
  onFlip,
}) => {
  return (
    <div
      className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`}
    >
      <div className={styles.card}>
        <div className={styles.cardFront}>
          <div className={styles.icon}>{icon}</div>
          <Title
            style={{ marginBottom: '15px' }}
            tag='h4'
            size='sm'
            fontWeight='regular'
          >
            {title}
          </Title>
          <button onClick={onFlip} className={styles.moreButton}>
            <span>{t.button.SHOW_MORE_CARD}</span>
          </button>
        </div>

        <div className={styles.cardBack}>
          <Paragraph style={{ marginBottom: '10px' }}>{text}</Paragraph>
          <button onClick={onFlip} className={styles.moreButton}>
            <span>{t.button.CLOSE_CARD}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
