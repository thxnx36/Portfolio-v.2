import { Section, SectionHead, Slider } from 'src/shared'
import { RecommedCard } from './card/RecommendCard'
import { useTranslation } from 'react-i18next'
import { recommendations } from 'src/constants'

export const Recommendations = () => {
  const { t } = useTranslation()

  return (
    <Section id='recommendations'>
      <SectionHead
        title={t('recommendations.TITLE')}
        subTitle={t('recommendations.SUBTITLE')}
      />
      <div style={{ width: '100%' }}>
        <Slider>
          {recommendations.map(({ title, user, comment, rating, id }) => (
            <RecommedCard
              key={id}
              title={title}
              user={user}
              comment={comment}
              rating={rating}
            />
          ))}
        </Slider>
      </div>
    </Section>
  )
}
