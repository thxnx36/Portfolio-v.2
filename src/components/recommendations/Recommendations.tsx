import { SectionHead } from '../../shared/section-head/SectionHead'
import { MSection } from '../../shared/section/Section'
import { RecommedCard } from './card/RecommendCard'
import { Slider } from '../../shared/slider/Slider'
import { motionSection } from '../../constans'
import { recommendations } from '../../db'
import { useTranslation } from 'react-i18next'

export const Recommendations = () => {
  const { t } = useTranslation()

  return (
    <MSection
      id='recommendations'
      variants={motionSection.variants}
      transition={motionSection.transition}
      initial={motionSection.initial}
      whileInView={motionSection.whileInView}
    >
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
    </MSection>
  )
}
