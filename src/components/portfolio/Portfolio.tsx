import { CardsContainer, MSection, SectionHead } from '../../shared'
import { portfolio } from '../../db/portfolio'
import { text } from '../../localization'
import { PortfolioCard } from './card/PortfolioCard'
import { motionSection } from '../../constans'
import { FC } from 'react'
import { MyInfoType } from '../../types/my-info-type'

type Props = {
  data?: MyInfoType
}

export const Portfolio: FC<Props> = ({ data }) => {
  return (
    <MSection
      id='portfolio'
      variants={motionSection.variants}
      transition={motionSection.transition}
      initial={motionSection.initial}
      whileInView={motionSection.whileInView}
    >
      <SectionHead
        title={text.portfolio.TITLE}
        subTitle={text.portfolio.SUBTITLE}
      />
      <CardsContainer>
        {data?.portfolio.map(({ title, project, src, id }) => (
          <PortfolioCard
            key={id}
            title={title}
            project={project}
            src={src}
            id={id}
          />
        ))}
      </CardsContainer>
    </MSection>
  )
}
