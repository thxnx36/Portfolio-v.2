import { SectionHead } from '../../shared/section-head/SectionHead'
import { MSection } from '../../shared/section/Section'
import { text } from '../../localization'
import { RecommedCard } from './card/RecommendCard'
import { Slider } from '../../shared/slider/Slider'
import { motionSection } from '../../constans'
import { MyInfoType } from '../../types/my-info-type'
import { FC } from 'react'

type Props = {
  data?: MyInfoType
}

export const Recommendations: FC<Props> = ({ data }) => {
  return (
    <MSection
      id='recommendations'
      variants={motionSection.variants}
      transition={motionSection.transition}
      initial={motionSection.initial}
      whileInView={motionSection.whileInView}
    >
      <SectionHead
        title={text.recommendations.TITLE}
        subTitle={text.recommendations.SUBTITLE}
      />
      <div style={{ width: '100%' }}>
        {data ? (
          <Slider>
            {data.recommendations.map(
              ({ title, user, comment, rating, id }) => (
                <RecommedCard
                  key={id}
                  title={title}
                  user={user}
                  comment={comment}
                  rating={rating}
                />
              ),
            )}
          </Slider>
        ) : null}
      </div>
    </MSection>
  )
}
