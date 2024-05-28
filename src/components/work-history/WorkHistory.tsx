import { Container, MSection, SectionHead, Table } from '../../shared'
import { motionSection } from '../../constants'
import { useTranslation } from 'react-i18next'
import { useWorkList } from '../../hooks'

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
        ({ company, position, date, title, description, url, id }) => (
          <Container key={id} style={{ margin: '0 0 5px' }}>
            <Table
              namePlace={company}
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
