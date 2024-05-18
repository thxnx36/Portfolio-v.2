import { useEffect, useRef } from "react"

type Props = {
  f: () => void
  isOpen: boolean
}

export const useOverLay = ({ f, isOpen }: Props) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      contentRef.current?.focus()
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const onCloseContent = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      f()
    }
  }

  return { onCloseContent, contentRef }
}
