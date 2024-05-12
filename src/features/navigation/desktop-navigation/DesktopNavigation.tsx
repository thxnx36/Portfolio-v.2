import { IoMoonSharp } from "react-icons/io5"
import { NavItem } from "../nav-item/NavItem"
import { FC } from "react"
import { NavigationListType } from "../../../types/navigation-list-type"
import styles from "./DesktopNavigation.module.css"
import { ChangeThemeButton } from "../../../commons/buttons/change-theme/ChangeThemeButton"

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: (id: number) => boolean
  navigationList: NavigationListType[]
}

export const DesktopNavigation: FC<Props> = ({
  onChangeItem,
  isActiveItem,
  navigationList,
}) => {
  return (
    <div className={styles.navDesktopContent}>
      <ChangeThemeButton />
      <ul className={styles.navItemContainer}>
        {navigationList.map(({ id, href, text, icon }) => (
          <NavItem
            onClick={() => onChangeItem(id)}
            key={id}
            href={href}
            text={text}
            icon={icon}
            active={isActiveItem(id)}
          />
        ))}
      </ul>
    </div>
  )
}
