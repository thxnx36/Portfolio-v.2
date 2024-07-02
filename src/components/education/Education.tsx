import { useTranslation } from 'react-i18next'
import { useEducationList } from 'src/hooks'
import { Section, SectionHead, TimeLine } from 'src/shared'

export const Education = () => {
  const { t } = useTranslation()
  const { educationList } = useEducationList()
  return (
    <Section id='education'>
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
    </Section>
  )
}
