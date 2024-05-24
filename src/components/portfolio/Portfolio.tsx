import { CardsContainer, MSection, SectionHead } from '../../shared'
import { PortfolioCard } from './card/PortfolioCard'
import { motionSection } from '../../constans'
import { useTranslation } from 'react-i18next'
import { usePortfolioList } from '../../hooks'

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
    >
      <SectionHead
        title={t('portfolio.TITLE')}
        subTitle={t('portfolio.SUBTITLE')}
      />
      <CardsContainer>
        {portfolioList.map(({ title, project, src, id }) => (
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
