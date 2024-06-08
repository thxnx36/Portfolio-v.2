import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'

interface UseSocketProps {
  url?: string
  userName: string
}

export const useSocket = ({
  url = 'http://localhost:3000',
  userName,
}: UseSocketProps): Socket | null => {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    const socket = io(url)
    socketRef.current = socket

    if (userName) {
      socket.emit('join', { userName })
    }

    return () => {
      socket.emit('leave', { userName })
      socket.disconnect()
    }
  }, [url, userName])

  return socketRef.current
}
