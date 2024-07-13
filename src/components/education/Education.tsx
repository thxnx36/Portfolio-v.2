import { useTranslation } from 'react-i18next'
import { withAnimationSection } from 'src/hoc'
import { useEducationList } from 'src/hooks'
import { SectionHead, TimeLine } from 'src/shared'

export const EducationSection = () => {
  const { t } = useTranslation()
  const { educationList } = useEducationList()

  return (
    <>
      <SectionHead
        title={t('education.TITLE')}
        subTitle={t('education.SUBTITLE')}
      />
      {educationList?.map(
        ({ university, position, date, description, url, id }) => (
          <TimeLine
            key={id}
            namePlace={university}
            namePosition={position}
            date={date}
            description={description}
            url={url}
          />
        ),
      )}
    </>
  )
}

export const Education = withAnimationSection(EducationSection)
