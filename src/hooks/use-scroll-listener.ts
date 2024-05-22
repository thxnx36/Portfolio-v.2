import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'

export const useScrollListener = () => {
  const { scrollY } = useScroll()

  const [showButton, setShowButton] = useState<boolean>(false)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(false)

  // hide-show navbar
  useMotionValueEvent(scrollY, 'change', latest => {
    const previous = scrollY.getPrevious()
    if (latest > previous! && latest > 100) {
      setIsScrollDown(true)
    } else {
      setIsScrollDown(false)
    }
  })

  // show button to scroll down
  const thirdOfPage = useTransform(
    scrollY,
    value => value > document.body.clientHeight / 3,
  )

  useMotionValueEvent(scrollY, 'change', _ => {
    const previous = thirdOfPage.getPrevious()
    setShowButton(previous!)
  })

  // on click to scroll down
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return { isScrollDown, scrollToTop, showButton }
}
