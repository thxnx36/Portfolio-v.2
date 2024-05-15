import { Container, Section, SectionHeader, Table } from "../../commons"
import { education } from "../../db"
import { text } from "../../localization"

export const Education = () => {
  return (
    <Section id="education">
      <SectionHeader
        title={text.education.TITLE}
        subTitle={text.education.SUBTITLE}
      />
      {education.map(
        ({ university, position, date, title, description, url, id }) => (
          <Container key={id} style={{ margin: "0 0 5px" }}>
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
    </Section>
  )
}
