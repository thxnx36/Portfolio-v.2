import { SectionHeader } from "../../commons/section-header/SectionHeader"
import { Section } from "../../commons/section/Section"
import { text } from "../../localization/text"
import { RecommedCard } from "./card/RecommendCard"
import { recommendations } from "../../db/recommendations"
import { Slider } from "../../commons/slider/Slider"
// import { MdArrowBackIos } from "react-icons/md"
// import { MdArrowForwardIos } from "react-icons/md"

export const Recommendations = () => {
  return (
    <Section>
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
