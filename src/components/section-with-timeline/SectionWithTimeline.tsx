import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { SectionHead, TimeLine } from 'src/shared'
import { ExperienceListType } from 'src/types'

type Props = {
  title: string
  subTitle: string
  list: ExperienceListType[]
}

export const SectionWithTimeline: FC<Props> = ({ list, title, subTitle }) => {
  const { t } = useTranslation()

  return (
    <>
      <SectionHead title={t(title)} subTitle={t(subTitle)} />
      {list?.map(({ place, position, date, description, img, url, id }) => (
        <TimeLine
          key={id}
          namePlace={place}
          namePosition={position}
          date={date}
          description={description}
          url={url}
          imageSrc={img}
        />
      ))}
    </>
  )
}
