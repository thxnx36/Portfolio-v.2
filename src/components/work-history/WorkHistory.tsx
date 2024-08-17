import { withAnimationSection } from 'src/hoc'
import { useWorkList } from 'src/hooks'
import { SectionWithTimeline } from '../section-with-timeline'

const WorkHistorySection = () => {
  const { workList } = useWorkList()
  const test = 'dddd'
  return (
    <SectionWithTimeline
      title='workHistory.TITLE'
      subTitle='workHistory.SUBTITLE'
      list={workList}
      isActiveDot
    />
  )
}

export const WorkHistory = withAnimationSection(WorkHistorySection)
