import { useEffect, useState } from "react"

export const useScrollListener = () => {
  const [showButton, setShowButton] = useState(false)
  const [isScrollDown, setIsScrollDown] = useState<boolean>(true)
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)

  useEffect(() => {
    const handleScrollForNavigate = () => {
      const currentScrollPosition = window.scrollY

      if (currentScrollPosition > lastScrollPosition) {
        setIsScrollDown(true)
      } else if (currentScrollPosition < lastScrollPosition) {
        setIsScrollDown(false)
      }

      setLastScrollPosition(currentScrollPosition)
    }

    window.addEventListener("scroll", handleScrollForNavigate)

    return () => {
      window.removeEventListener("scroll", handleScrollForNavigate)
    }
  }, [lastScrollPosition])

  useEffect(() => {
    const handleScrollForButton = () => {
      const scrollPosition = window.scrollY
      const thirdOfPage = document.body.clientHeight / 3
      setShowButton(scrollPosition > thirdOfPage)
    }

    window.addEventListener("scroll", handleScrollForButton)
    return () => {
      window.removeEventListener("scroll", handleScrollForButton)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return { isScrollDown, scrollToTop, showButton }
}
