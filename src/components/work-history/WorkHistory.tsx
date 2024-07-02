import { useTranslation } from 'react-i18next'
import { useWorkList } from 'src/hooks'
import { Section, SectionHead, TimeLine } from 'src/shared'

export const WorkHistory = () => {
  const { t } = useTranslation()
  const { workList } = useWorkList()

  return (
    <Section id='work-history'>
      <SectionHead
        title={t('workHistory.TITLE')}
        subTitle={t('workHistory.SUBTITLE')}
      />
      {workList?.map(
        ({ company, position, date, description, url, id }, index) => (
          <TimeLine
            key={id}
            namePlace={company}
            namePosition={position}
            date={date}
            description={description}
            url={url}
            isActiveDot={index === 0}
          />
        ),
      )}
    </Section>
  )
}
