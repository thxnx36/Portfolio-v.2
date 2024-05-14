import { useState, useEffect } from "react"

export const useResizeScreen = (width: number) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      setIsSmallScreen(windowWidth <= width)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { isSmallScreen }
}
