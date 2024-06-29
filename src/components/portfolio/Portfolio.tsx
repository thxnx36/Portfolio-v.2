import { motionSection } from 'src/constants'
import { usePortfolioList } from 'src/hooks'
import { MSection, SectionHead, CardsContainer } from 'src/shared'
import { PortfolioCard } from './card/PortfolioCard'
import { useTranslation } from 'react-i18next'

export const Portfolio = () => {
  const { t } = useTranslation()
  const { portfolioList } = usePortfolioList()

  return (
    <MSection
      id='portfolio'
      variants={motionSection.variants}
      transition={motionSection.transition}
      initial={motionSection.initial}
      whileInView={motionSection.whileInView}
      viewport={motionSection.viewport}
    >
      <SectionHead
        title={t('portfolio.TITLE')}
        subTitle={t('portfolio.SUBTITLE')}
      />
      <CardsContainer>
        {portfolioList.map(({ title, project, src, id, link }) => (
          <PortfolioCard
            key={id}
            title={title}
            project={project}
            src={src}
            link={link}
            id={id}
          />
        ))}
      </CardsContainer>
    </MSection>
  )
}
