import { FC, ReactNode } from "react"
import { Box } from "../../../commons/box/Box"
import styles from "./Card.module.css"
import { Paragraph } from "../../../commons/paragraph/Paragraph"

type Props = {
  icon: ReactNode
  title: string
  subTitle: string
}

export const Card: FC<Props> = ({ icon, title, subTitle }) => {
  return (
    <Box>
      <div className={styles.card}>
        <div className={styles.icon}>{icon}</div>
        <h4 className={styles.title}>{title}</h4>
        <Paragraph margin="0">{subTitle}</Paragraph>
      </div>
    </Box>
  )
}
