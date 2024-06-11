import { FC, HTMLAttributes } from 'react'
import { IoClose } from 'react-icons/io5'

type Props = HTMLAttributes<HTMLButtonElement> & {
  onClick: () => void
  size?: string
}
export const CloseButton: FC<Props> = ({ onClick, size = '2em', ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      <IoClose size={size} />
    </button>
  )
}
