import { FC } from 'react'
import { FaBurger } from 'react-icons/fa6'
type Props = {
  onClick: () => void
}
export const BurgerButton: FC<Props> = ({ onClick }) => {
  return (
    <button>
      <FaBurger size='1.4em' onClick={onClick} />
    </button>
  )
}
