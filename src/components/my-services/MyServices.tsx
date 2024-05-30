import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Section, SectionHead, CardsContainer, FlippedCard } from 'src/shared'
import { ROUTES } from 'src/constants'
import { useServicesList } from 'src/hooks'

export const MyServices = () => {
  const { t } = useTranslation()
  const { servicesList } = useServicesList()
  const [activeCards, setActiveCards] = useState<number[]>([])

  const onToggleCard = useCallback((id: number) => {
    setActiveCards(prevState =>
      prevState.includes(id)
        ? prevState.filter(cardId => cardId !== id)
        : [...prevState, id],
    )
  }, [])

  const isFlipped = (id: number) => activeCards.includes(id)

  return (
    <Section style={{ marginBottom: '30px' }} id='services'>
      <SectionHead
        title={t('myServices.TITLE')}
        subTitle={t('myServices.SUBTITLE')}
        isLink
        to={ROUTES.aboutMe}
        linkText={t('myServices.ABOUT_ME')}
      />
      <CardsContainer>
        {servicesList.map(({ title, text, icon, id }) => (
          <FlippedCard
            onFlip={() => onToggleCard(id)}
            isFlipped={isFlipped(id)}
            title={title}
            text={text}
            showText={t('button.SHOW_MORE_CARD')}
            closeText={t('button.CLOSE_CARD')}
            icon={icon}
            key={id}
          />
        ))}
      </CardsContainer>
    </Section>
  )
}
