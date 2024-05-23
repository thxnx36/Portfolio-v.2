import { text } from '../../localization'
import { Container, MSection, SectionHead, Table } from '../../shared'
import { motionSection } from '../../constans'
import { MyInfoType } from '../../types/my-info-type'
import { FC } from 'react'

type Props = {
  data?: MyInfoType
}

export const WorkHistory: FC<Props> = ({ data }) => {
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
      {data?.workHistory?.map(
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
