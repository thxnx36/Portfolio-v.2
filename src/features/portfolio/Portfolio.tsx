import { SectionHeader } from "../../commons/section-header/SectionHeader"
import { Section } from "../../commons/section/Section"
import { portfolio } from "../../data/portfolio"
import { text } from "../../localization/text"
import styles from "./Portfolio.module.css"
import { PortfolioCard } from "./card/PortfolioCard"

export const Portfolio = () => {
  return (
    <Section>
      <SectionHeader
        title={text.portfolio.TITLE}
        subTitle={text.portfolio.SUBTITLE}
      />
      <div className={styles.portfolio}>
        {portfolio.map(({ title, project, src, id }) => (
          <PortfolioCard key={id} title={title} project={project} src={src} />
        ))}
      </div>
    </Section>
  )
}
