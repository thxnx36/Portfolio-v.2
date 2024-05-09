import { FC } from "react"
import styles from "./Table.module.css"
import { Paragraph } from "../paragraph/Paragraph"

type Props = {
  namePlace: string
  namePosition: string
  date: string | number
  title: string
  description: string
}

export const Table: FC<Props> = ({
  namePlace,
  namePosition,
  date,
  title,
  description,
}) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.place}>
        <h4 className={styles.namePlace}>{namePlace}</h4>
        <div className={styles.period}>
          <p className={styles.position}>{namePosition}</p>
          <span className={styles.date}>
            <p>{date}</p>
          </span>
        </div>
      </div>

      <div className={styles.description}>
        <h4 className={styles.title}>{title}</h4>
        <Paragraph align="left" margin="0">
          {description}
        </Paragraph>
      </div>
    </div>
  )
}
