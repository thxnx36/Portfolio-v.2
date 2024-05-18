import { FC } from 'react'
import { Skills, Title } from '../../../shared'

type Props = {
  title: string
  skillsList: any[]
}

export const TechSkills: FC<Props> = ({ title, skillsList }) => {
  return (
    <>
      <Title
        sx={{ marginBottom: '15px' }}
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
