import { CardsContainer, Section, SectionHeader } from "../../commons"
import { portfolio } from "../../db/portfolio"
import { text } from "../../localization"
import { PortfolioCard } from "./card/PortfolioCard"

export const Portfolio = () => {
  return (
    <Section id="portfolio">
      <SectionHeader
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
    </Section>
  )
}
