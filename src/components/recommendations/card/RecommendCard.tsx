import { FC } from 'react'
import { MdStar } from 'react-icons/md'
import { COLOR_YELLOW } from '../../../constans'
import { Paragraph, Title } from '../../../shared'
import styles from './RecommendCard.module.css'

type Props = {
  rating: number
  user: string
  title: string
  comment: string
}

export const RecommedCard: FC<Props> = ({ rating, user, title, comment }) => {
  const quantityRatingStars = Array.from(
    { length: rating },
    (_, index) => index + 1,
  )

  return (
    <article className={styles.container}>
      <ul className={styles.rating}>
        {quantityRatingStars.map(item => (
          <li key={item} className={styles.star}>
            <MdStar color={COLOR_YELLOW} size={'1.5em'} />
          </li>
        ))}
      </ul>
      <Title
        style={{ marginBottom: '15px' }}
        tag='h4'
        size='sm'
        fontWeight='regular'
      >
        {title}
      </Title>
      <Paragraph style={{ textAlign: 'left', margin: '0 0 25px' }}>
        {comment}
      </Paragraph>
      <div className={styles.userInfo}>
        <Title
          style={{ marginBottom: '15px' }}
          tag='h4'
          size='sm'
          fontWeight='regular'
        >
          {user}
        </Title>
      </div>
    </article>
  )
}
