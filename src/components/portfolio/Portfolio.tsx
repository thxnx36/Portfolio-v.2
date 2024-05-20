import { CardsContainer, MSection, SectionHead } from '../../shared'
import { portfolio } from '../../db/portfolio'
import { text } from '../../localization'
import { PortfolioCard } from './card/PortfolioCard'
import { motionSection } from '../../constans'

export const Portfolio = () => {
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
        {portfolio.map(({ title, project, src, id }) => (
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
