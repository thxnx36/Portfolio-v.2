import { FC, ReactNode, CSSProperties, useEffect, useState } from "react"
import { IoMoonSharp } from "react-icons/io5"
import { FaSun } from "react-icons/fa6"
import { DARK, LIGHT } from "../../../constans"
import { getStorageValue } from "../../../utils/local-storage"

type Props = {
  onClick: () => void
  icon?: ReactNode
  sx?: CSSProperties
}

export const ChangeThemeButton: FC<Props> = ({ onClick, icon, sx }) => {
  const [theme, setTheme] = useState<string | null>(LIGHT)
  const currentTheme = getStorageValue("theme")

  useEffect(() => {
    setTheme(currentTheme)
  }, [])

  const onChangeIcon = () => {
    const newTheme = theme === LIGHT ? DARK : LIGHT
    setTheme(newTheme)
    onClick()
  }

  return (
    <button onClick={onChangeIcon} style={sx}>
      {icon || theme === LIGHT ? (
        <IoMoonSharp size="1.3em" />
      ) : (
        <FaSun size="1.3em" />
      )}
    </button>
  )
}
