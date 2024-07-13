import { motionSection } from 'src/constants'
import { useAnimateDuringScroll } from 'src/hooks'
import { MSection } from 'src/shared'

type Props = {
  sectionId: string
}

export const withAnimationSection =
  <P extends Props>(Component: React.ComponentType<P>) =>
  (props: P) => {
    const { refInView, controls } = useAnimateDuringScroll({})

    return (
      <MSection
        ref={refInView}
        animate={controls}
        initial={motionSection.initial}
        transition={motionSection.transition}
        id={props.sectionId}
      >
        <Component {...props} />
      </MSection>
    )
  }
