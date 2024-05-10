import { FC } from "react"
import { Box } from "../../../commons/box/Box"
import styles from "./RecommendCard.module.css"
import { MdStar } from "react-icons/md"
import { Paragraph } from "../../../commons/paragraph/Paragraph"
import { COLOR_YELLOW } from "../../../constans/colors"

type Props = {
  rating: number
  user: string
  title: string
  comment: string
  userPhoto: string
}

export const RecommedCard: FC<Props> = ({
  rating,
  user,
  title,
  comment,
  userPhoto,
}) => {
  const arrayFromNumber = Array.from(
    { length: rating },
    (_, index) => index + 1,
  )

  return (
    <div className={styles.container}>
      <ul className={styles.rating}>
        {arrayFromNumber.map(item => (
          <li key={item} className={styles.star}>
            <MdStar color={COLOR_YELLOW} size={"1.5em"} />
          </li>
        ))}
      </ul>
      <h4 className={styles.title}>{title}</h4>
      <Paragraph margin="0 0 25px" align="left">
        {comment}
      </Paragraph>
      <div className={styles.userInfo}>
        <div className={styles.photo}>
          <img src={userPhoto} alt="User-photo" />
        </div>
        <h4 className={styles.title}>{user}</h4>
      </div>
    </div>
  )
}
