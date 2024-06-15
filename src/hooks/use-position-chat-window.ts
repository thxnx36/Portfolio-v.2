import { useEffect, useRef } from 'react'

type Props = {
  dependencies: unknown[]
}

export const usePositionChatWindow = ({ dependencies }: Props) => {
  const messagesContainerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!messagesContainerRef.current) return
    messagesContainerRef.current.scrollTop =
      messagesContainerRef.current.scrollHeight

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return { messagesContainerRef }
}
