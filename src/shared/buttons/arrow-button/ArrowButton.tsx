import type { FC, ReactNode } from 'react'

type Props = {
  onClick?: () => void
  icon?: ReactNode
}

export const ArrowButton: FC<Props> = ({ onClick, icon }) => {
  return <button onClick={onClick}>{icon}</button>
}
