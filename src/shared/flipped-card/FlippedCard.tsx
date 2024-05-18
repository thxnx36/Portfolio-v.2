import { FC, ReactNode } from 'react'
import { Title } from '../title'
import { Paragraph } from '../paragraph'
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
            sx={{ marginBottom: '15px' }}
            tag='h4'
            size='sm'
            fontWeight='regular'
          >
            {title}
          </Title>
          <button onClick={onFlip} className={styles.moreButton}>
            <span>show more</span>
          </button>
        </div>

        <div className={styles.cardBack}>
          <Paragraph sx={{ marginBottom: '10px' }}>{text}</Paragraph>
          <button onClick={onFlip} className={styles.moreButton}>
            <span>close</span>
          </button>
        </div>
      </div>
    </div>
  )
}
