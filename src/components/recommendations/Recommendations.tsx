import { SectionHeader } from "../../commons/section-header/SectionHeader"
import { Section } from "../../commons/section/Section"
import { text } from "../../localization"
import { RecommedCard } from "./card/RecommendCard"
import { recommendations } from "../../db"
import { Slider } from "../../commons/slider/Slider"

export const Recommendations = () => {
  return (
    <Section id="recommendations">
      <SectionHeader
        title={text.recommendations.TITLE}
        subTitle={text.recommendations.SUBTITLE}
      />
      <div style={{ width: "100%" }}>
        <Slider>
          {recommendations.map(
            ({ title, user, userPhoto, comment, rating, id }) => (
              <RecommedCard
                key={id}
                title={title}
                user={user}
                userPhoto={userPhoto}
                comment={comment}
                rating={rating}
              />
            ),
          )}
        </Slider>
      </div>
    </Section>
  )
}
