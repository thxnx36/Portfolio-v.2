import { useTranslation } from 'react-i18next'
import { motionSection } from "src/constants"
import { useEducationList } from "src/hooks"
import { MSection, SectionHead, Container, Table } from "src/shared"


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
        ({ university, position, date, title, description, url, id }) => (
          <Container key={id} style={{ margin: '0 0 5px' }}>
            <Table
              namePlace={university}
              namePosition={position}
              date={date}
              title={title}
              description={description}
              url={url}
            />
          </Container>
        ),
      )}
    </MSection>
  )
}
