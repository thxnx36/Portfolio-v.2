import { useEffect, useRef } from "react"

type Props = {
  f: () => void
}

export const useOverLay = ({ f }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    contentRef.current?.focus()

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const onCloseContent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      f()
    }
  }

  return { onCloseContent, contentRef }
}
