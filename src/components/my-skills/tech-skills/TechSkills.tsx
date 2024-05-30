import type { FC } from 'react'
import { Title, Skills } from 'src/shared'
import { SkillsType } from 'src/types'

type Props = {
  title: string
  skillsList: SkillsType[]
}

export const TechSkills: FC<Props> = ({ title, skillsList }) => {
  return (
    <>
      <Title
        style={{ marginBottom: '15px' }}
        tag='h4'
        size='sm'
        fontWeight='regular'
      >
        {title}
      </Title>
      {skillsList.map(({ id, skill, progress }) => (
        <Skills key={id} nameSkill={skill} progress={progress} />
      ))}
    </>
  )
}
