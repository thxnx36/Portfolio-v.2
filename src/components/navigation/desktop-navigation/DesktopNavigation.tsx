import { FC } from "react"
import { ChangeThemeButton, UserInfoButton } from "../../../shared"
import { NavListItem } from "../nav-list-item/NavListItem"
import styles from "./DesktopNavigation.module.css"

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: (id: number) => boolean
  onChangeTheme: () => void
  handleSideBar: () => void
}

export const DesktopNavigation: FC<Props> = ({
  onChangeItem,
  onChangeTheme,
  isActiveItem,
  handleSideBar,
}) => {
  return (
    <div className={styles.navDesktopContent}>
      <ChangeThemeButton onClick={onChangeTheme} />
      <NavListItem onChangeItem={onChangeItem} isActiveItem={isActiveItem} />
      <div className={styles.userInfoButton}>
        <UserInfoButton onClick={handleSideBar} />
      </div>
    </div>
  )
}
