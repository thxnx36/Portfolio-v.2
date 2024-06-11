import { useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'

type UseSocketProps = {
  userName: string
}

export const useSocket = ({ userName }: UseSocketProps): Socket | null => {
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    const socket = io('http://localhost:3000')
    socketRef.current = socket

    if (userName) {
      socket.emit('join', { userName })
    }

    return () => {
      socket.emit('leave', { userName })
      socket.disconnect()
    }
  }, [userName])

  return socketRef.current
}
