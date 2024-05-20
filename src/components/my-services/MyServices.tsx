import { CardsContainer, FlippedCard, Section, SectionHead } from '../../shared'
import { useServicesList } from '../../hooks'
import { text } from '../../localization/text'
import { useCallback, useState } from 'react'

export const MyServices = () => {
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
    <Section sx={{ marginBottom: '30px' }} id='services'>
      <SectionHead
        title={text.myServices.TITLE}
        subTitle={text.myServices.SUBTITLE}
      />
      <CardsContainer>
        {servicesList.map(({ title, text, icon, id }) => (
          <FlippedCard
            onFlip={() => onToggleCard(id)}
            isFlipped={isFlipped(id)}
            title={title}
            text={text}
            icon={icon}
            key={id}
          />
        ))}
      </CardsContainer>
    </Section>
  )
}
