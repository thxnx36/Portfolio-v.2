import { text } from '../../localization'
import { Container, MSection, SectionHead, Table } from '../../shared'
import { motionSection } from '../../constans'
import { workHistory } from '../../db'

export const WorkHistory = () => {
  return (
    <MSection
      id='work-history'
      variants={motionSection.variants}
      transition={motionSection.transition}
      initial={motionSection.initial}
      whileInView={motionSection.whileInView}
    >
      <SectionHead
        title={text.workHistory.TITLE}
        subTitle={text.workHistory.SUBTITLE}
      />
      {workHistory?.map(
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
