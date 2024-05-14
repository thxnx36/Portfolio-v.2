import { FC } from "react"
import { Skills } from "../../../commons/skills/Skills"
import { Title } from "../../../commons/title/Title"

type Props = {
  title: string
  skillsList: any[]
}

export const TechSkills: FC<Props> = ({ title, skillsList }) => {
  return (
    <>
      <Title
        style={{ marginBottom: "15px" }}
        type="h4"
        size="sm"
        fontWeight="regular"
      >
        {title}
      </Title>
      {skillsList.map(({ id, skill, progress }) => (
        <Skills key={id} nameSkill={skill} progress={progress} />
      ))}
    </>
  )
}
