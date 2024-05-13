import { FC } from "react"
import { Skills } from "../../../commons/skills/Skills"
import styles from "./TechSkills.module.css"

type Props = {
  title: string
  skillsList: any[]
}

export const TechSkills: FC<Props> = ({ title, skillsList }) => {
  return (
    <div className={styles.techSkillsContainer}>
      <h4 className={styles.title}>{title}</h4>
      {skillsList.map(({ id, skill, progress }) => (
        <Skills key={id} nameSkill={skill} progress={progress} />
      ))}
    </div>
  )
}
