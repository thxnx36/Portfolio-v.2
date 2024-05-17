import { NavItem } from "../nav-item/NavItem"
import { FC } from "react"
import { NavigationListType } from "../../../types/navigation-list-type"
import { ChangeThemeButton } from "../../../shared"
import styles from "./DesktopNavigation.module.css"

type Props = {
  onChangeItem: (id: number) => void
  onChangeTheme: () => void
  isActiveItem: (id: number) => boolean
  navigationList: NavigationListType[]
}

export const DesktopNavigation: FC<Props> = ({
  onChangeItem,
  onChangeTheme,
  isActiveItem,
  navigationList,
}) => {
  return (
    <div className={styles.navDesktopContent}>
      <ChangeThemeButton onClick={onChangeTheme} />
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
