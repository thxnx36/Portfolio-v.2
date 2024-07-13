import { useTranslation } from 'react-i18next'
import { withAnimationSection } from 'src/hoc'
import { useWorkList } from 'src/hooks'
import { SectionHead, TimeLine } from 'src/shared'

const WorkHistorySection = () => {
  const { t } = useTranslation()
  const { workList } = useWorkList()

  return (
    <>
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
    </>
  )
}

export const WorkHistory = withAnimationSection(WorkHistorySection)
