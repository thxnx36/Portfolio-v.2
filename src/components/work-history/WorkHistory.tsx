import { useTranslation } from 'react-i18next'
import { motionSection } from 'src/constants'
import { useWorkList } from 'src/hooks'
import { MSection, SectionHead, TimeLine } from 'src/shared'

export const WorkHistory = () => {
  const { t } = useTranslation()
  const { workList } = useWorkList()

  return (
    <MSection
      id='work-history'
      variants={motionSection.variants}
      transition={motionSection.transition}
      initial={motionSection.initial}
      whileInView={motionSection.whileInView}
    >
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
    </MSection>
  )
}
