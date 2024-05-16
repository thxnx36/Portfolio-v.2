import { useEffect, useRef, useState } from "react"

type Props = {
  f: (value: boolean) => void
  checkAnimation: boolean
}

export const useAnimatedDiv = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [hasAnimated, setHasAnimated] = useState<boolean>(false)
  const animatedDivRef = useRef<HTMLDivElement>(null)

  const positionElement = ({ f, checkAnimation }: Props) => {
    const element = animatedDivRef.current
    if (element) {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      f(elementTop < windowHeight - 50)

      if (checkAnimation && !hasAnimated && elementTop < windowHeight - 50) {
        f(true)
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      positionElement({ f: setIsVisible, checkAnimation: false })
    }

    const handleInitialAnimation = () => {
      positionElement({ f: setHasAnimated, checkAnimation: true })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("load", handleInitialAnimation)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("load", handleInitialAnimation)
    }
  }, [hasAnimated])

  return { hasAnimated, isVisible, animatedDivRef }
}
