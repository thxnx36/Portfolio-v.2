import { FC, ReactNode, CSSProperties } from "react"
import { IoMoonSharp } from "react-icons/io5"

type Props = {
  onClick?: () => void
  icon?: ReactNode
  style?: CSSProperties
}

export const ChangeThemeButton: FC<Props> = ({ onClick, icon, style }) => {
  return <button style={style}>{icon || <IoMoonSharp size="1.3em" />}</button>
}
