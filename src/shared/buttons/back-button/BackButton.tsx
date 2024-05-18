import { FC, ReactNode } from 'react'
import { IoIosArrowBack } from 'react-icons/io'

type Props = {
  onClick: () => void
  icon?: ReactNode
}

export const BackButton: FC<Props> = ({ onClick, icon }) => {
  return (
    <button style={{ padding: 0 }} onClick={onClick}>
      {icon || <IoIosArrowBack size={'2em'} />}
    </button>
  )
}
