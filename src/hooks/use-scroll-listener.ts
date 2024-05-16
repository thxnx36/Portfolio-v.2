import { useEffect, useState } from "react"

export const useScrollListener = () => {
  const [isScrollDown, setIsScrollDown] = useState<boolean>(true)
  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY

      if (currentScrollPosition > lastScrollPosition) {
        setIsScrollDown(true)
      } else if (currentScrollPosition < lastScrollPosition) {
        setIsScrollDown(false)
      }

      setLastScrollPosition(currentScrollPosition)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollPosition])

  return { isScrollDown }
}
