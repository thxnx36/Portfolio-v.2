import { useState, useEffect } from "react"

export const useResizeScreen = (width: number) => {
  const [isResizeScreen, setIsResizeScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      setIsResizeScreen(windowWidth <= width)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { isResizeScreen }
}
