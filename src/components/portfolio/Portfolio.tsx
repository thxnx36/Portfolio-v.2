import { usePortfolioList } from 'src/hooks'
import { SectionHead, CardsContainer } from 'src/shared'
import { PortfolioCard } from './card/PortfolioCard'
import { useTranslation } from 'react-i18next'
import { withAnimationSection } from 'src/hoc'

const PortfolioSection = () => {
  const { t } = useTranslation()
  const { portfolioList } = usePortfolioList()

  return (
    <>
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
    </>
  )
}

export const Portfolio = withAnimationSection(PortfolioSection)
