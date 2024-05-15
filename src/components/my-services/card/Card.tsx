import { FC, ReactNode } from "react"
import { Container, Paragraph, Title } from "../../../commons"
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
        <Paragraph style={{ margin: 0 }}>{subTitle}</Paragraph>
      </div>
    </Container>
  )
}
