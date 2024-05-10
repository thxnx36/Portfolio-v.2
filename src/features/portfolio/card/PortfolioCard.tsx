import { FC } from "react"
import { Box } from "../../../commons/box/Box"
import { AiOutlineApple } from "react-icons/ai"
import styles from "./PortfolioCard.module.css"

type Props = {
  src: string
  title: string
  project: string
}

export const PortfolioCard: FC<Props> = ({ src, title, project }) => {
  return (
    <Box>
      <div className={styles.container}>
        <div className={styles.line}>
          <ul className={styles.dotContainer}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img src={src} alt="portfolio-picture" />
          <div className={styles.content}>
            <h4 className={styles.nameProject}>{project}</h4>
            <p className={styles.titleProject}>{title}</p>
          </div>
        </div>
        <div className={styles.logo}>
          <AiOutlineApple />
        </div>
      </div>
    </Box>
  )
}
