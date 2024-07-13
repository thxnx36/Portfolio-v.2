import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

type Props = {
  isAnimateOnce?: boolean
}

export const useAnimateDuringScroll = ({ isAnimateOnce = true }: Props) => {
  const controls = useAnimation()
  const [refInView, inView] = useInView({ triggerOnce: isAnimateOnce })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 })
    } else {
      controls.start({ opacity: 0 })
    }
  }, [controls, inView])

  return { refInView, controls }
}
