import { Box } from "../../commons/box/Box"
import { SectionHeader } from "../../commons/section-header/SectionHeader"
import { Section } from "../../commons/section/Section"
import { Table } from "../../commons/table/Table"
import { education } from "../../data/education"
import { text } from "../../localization/text"

export const Education = () => {
  return (
    <Section>
      <SectionHeader
        title={text.education.TITLE}
        subTitle={text.education.SUBTITLE}
      />
      {education.map(
        ({ university, position, date, title, description, url, id }) => (
          <Box key={id} margin="0 0 5px">
            <Table
              namePlace={university}
              namePosition={position}
              date={date}
              title={title}
              description={description}
              url={url}
            />
          </Box>
        ),
      )}
    </Section>
  )
}
