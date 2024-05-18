import { useEffect, useRef, useState } from 'react'

export const useAnimatedDiv = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const animatedDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const element = animatedDivRef.current
      if (element) {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        setIsVisible(elementTop < windowHeight - 50)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isVisible, animatedDivRef }
}
