import { FC } from "react"
import styles from "./Table.module.css"
import { Paragraph } from "../paragraph/Paragraph"
import { Title } from "../title/Title"

type Props = {
  namePlace: string
  namePosition: string
  date: string | number
  title: string
  description: string
  url: string
}

export const Table: FC<Props> = ({
  namePlace,
  namePosition,
  date,
  title,
  description,
  url,
}) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.place}>
        <a className={styles.link} href={url} target="_blank">
          <Title
            sx={{ marginBottom: "15px" }}
            type="h4"
            size="sm"
            fontWeight="regular"
          >
            {namePlace}
          </Title>
        </a>
        <div className={styles.period}>
          <p className={styles.position}>{namePosition}</p>
          <span className={styles.date}>
            <p>{date}</p>
          </span>
        </div>
      </div>
      <div className={styles.description}>
        <Title type="h4" size="sm" fontWeight="regular">
          {title}
        </Title>
        <Paragraph sx={{ textAlign: "left", margin: 0 }}>
          {description}
        </Paragraph>
      </div>
    </div>
  )
}
