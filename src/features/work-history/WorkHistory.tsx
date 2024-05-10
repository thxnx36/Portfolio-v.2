import { Box } from "../../commons/box/Box"
import { SectionHeader } from "../../commons/section-header/SectionHeader"
import { Section } from "../../commons/section/Section"
import { Table } from "../../commons/table/Table"
import { text } from "../../localization/text"
import { workHistory } from "../../db/work-history"

export const WorkHistory = () => {
  return (
    <Section>
      <SectionHeader
        title={text.workHistory.TITLE}
        subTitle={text.workHistory.SUBTITLE}
      />
      {workHistory.map(
        ({ company, position, date, title, description, url, id }) => (
          <Box key={id} margin="0 0 5px">
            <Table
              namePlace={company}
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
