import { useEffect, useState } from "react"

export const useContentLoaded = () => {
  const [isLoading, setIsLoading] = useState(true)
  const handleContentLoaded = () => {
    setIsLoading(prev => !prev)
  }
  useEffect(() => {
    window.addEventListener("load", handleContentLoaded)

    return () => window.removeEventListener("load", handleContentLoaded)
  }, [])

  return { isLoading }
}
