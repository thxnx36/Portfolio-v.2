import { FC, ReactNode } from 'react'
import { Title } from '../title'
import { Paragraph } from '../paragraph'
import styles from './FlippedCard.module.css'

type Props = {
  title: string
  text: string
  closeText: string
  showText: string
  isFlipped: boolean
  onFlip: () => void
  icon?: ReactNode
}

export const FlippedCard: FC<Props> = ({
  icon,
  title,
  text,
  closeText,
  showText,
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
            <span>{showText}</span>
          </button>
        </div>

        <div className={styles.cardBack}>
          <Paragraph style={{ marginBottom: '10px' }}>{text}</Paragraph>
          <button onClick={onFlip} className={styles.moreButton}>
            <span>{closeText}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
