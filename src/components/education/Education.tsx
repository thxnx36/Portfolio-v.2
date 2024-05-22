import { Container, MSection, SectionHead, Table } from '../../shared'
import { education } from '../../db'
import { text } from '../../localization'
import { motionSection } from '../../constans'

export const Education = () => {
  return (
    <MSection
      id='education'
      variants={motionSection.variants}
      transition={motionSection.transition}
      initial={motionSection.initial}
      whileInView={motionSection.whileInView}
    >
      <SectionHead
        title={text.education.TITLE}
        subTitle={text.education.SUBTITLE}
      />
      {education.map(
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
