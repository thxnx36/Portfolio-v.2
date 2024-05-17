import { text } from "../../localization"
import { workHistory } from "../../db"
import { Container, Section, SectionHeader, Table } from "../../shared"

export const WorkHistory = () => {
  return (
    <Section id="work-history">
      <SectionHeader
        title={text.workHistory.TITLE}
        subTitle={text.workHistory.SUBTITLE}
      />
      {workHistory.map(
        ({ company, position, date, title, description, url, id }) => (
          <Container key={id} sx={{ margin: "0 0 5px" }}>
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
    </Section>
  )
}
