import { FC, ReactNode } from "react"
import { Paragraph } from "../../../commons/paragraph/Paragraph"
import { Container } from "../../../commons/container/Container"
import { Title } from "../../../commons/title/Title"
import styles from "./Card.module.css"

type Props = {
  icon: ReactNode
  title: string
  subTitle: string
}

export const Card: FC<Props> = ({ icon, title, subTitle }) => {
  return (
    <Container>
      <div className={styles.card}>
        <div className={styles.icon}>{icon}</div>
        <Title
          style={{ marginBottom: "15px" }}
          type="h4"
          size="sm"
          fontWeight="regular"
        >
          {title}
        </Title>
        <Paragraph margin="0">{subTitle}</Paragraph>
      </div>
    </Container>
  )
}
