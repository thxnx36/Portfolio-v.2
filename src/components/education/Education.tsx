import { useTranslation } from 'react-i18next'
import { motionSection } from 'src/constants'
import { useEducationList } from 'src/hooks'
import { MSection, SectionHead, TimeLine } from 'src/shared'

export const Education = () => {
  const { t } = useTranslation()
  const { educationList } = useEducationList()
  return (
    <MSection
      id='education'
      variants={motionSection.variants}
      transition={motionSection.transition}
      initial={motionSection.initial}
      whileInView={motionSection.whileInView}
    >
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
    </MSection>
  )
}
