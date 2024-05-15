import { FC } from "react"
import styles from "./Head.module.css"
import { BackButton } from "../../../commons/buttons"
import { Title } from "../../../commons"

type Props = {
  onClick: () => void
  projectTitle?: string
  imgSrc?: string
}

export const Head: FC<Props> = ({ onClick, projectTitle, imgSrc }) => {
  return (
    <>
      <div className={styles.title}>
        <BackButton onClick={onClick} />
        <Title style={{ margin: 0 }} type="h2">
          {projectTitle}
        </Title>
      </div>
      <div className={styles.headImg}>
        <img src={imgSrc} alt={`${projectTitle}-project-picture`} />
      </div>
    </>
  )
}
