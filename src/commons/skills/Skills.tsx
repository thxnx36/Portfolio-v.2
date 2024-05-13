import { FC } from "react"
import { Paragraph } from "../paragraph/Paragraph"
import { ProgressLine } from "../progress-line/ProgressLine"
import styles from "./Skils.module.css"

type Props = {
  nameSkill: string
  progress: number
}

export const Skills: FC<Props> = ({ progress, nameSkill }) => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.info}>
        <Paragraph margin="0">{nameSkill}</Paragraph>
        <Paragraph margin="0">{`${progress}%`}</Paragraph>
      </div>
      <ProgressLine progress={progress} />
    </div>
  )
}
