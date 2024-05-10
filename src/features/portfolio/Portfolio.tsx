import { CardsContainer } from "../../commons/cards-container/CardsContainer"
import { SectionHeader } from "../../commons/section-header/SectionHeader"
import { Section } from "../../commons/section/Section"
import { portfolio } from "../../db/portfolio"
import { text } from "../../localization/text"
import { PortfolioCard } from "./card/PortfolioCard"

export const Portfolio = () => {
  return (
    <Section>
      <SectionHeader
        title={text.portfolio.TITLE}
        subTitle={text.portfolio.SUBTITLE}
      />
      <CardsContainer>
        {portfolio.map(({ title, project, src, id }) => (
          <PortfolioCard key={id} title={title} project={project} src={src} />
        ))}
      </CardsContainer>
    </Section>
  )
}
