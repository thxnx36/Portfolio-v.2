import { FC } from "react"
import { PiUserListFill } from "react-icons/pi"

type Props = {
  onClick: () => void
}

export const UserInfoButton: FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <PiUserListFill size="2em" />
    </button>
  )
}
