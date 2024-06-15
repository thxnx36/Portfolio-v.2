import { useEffect, useRef } from 'react'

type Props = {
  dependencies: unknown[]
}

export const useTextAreaHeight = ({ dependencies }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (!textareaRef.current) return
    textareaRef.current.style.height = 'auto'
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return { textareaRef }
}
