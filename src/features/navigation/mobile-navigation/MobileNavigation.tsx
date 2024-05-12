import { Box } from "../../../commons/box/Box"
import { NavigationListType } from "../../../types/navigation-list-type"
import { FC, useState } from "react"
import { NavItem } from "../nav-item/NavItem"
import { ChangeThemeButton } from "../../../commons/buttons/change-theme/ChangeThemeButton"
import { BurgerButton } from "../../../commons/buttons/burger-button/BurgerButton"
import { UserInfoButton } from "../../../commons/buttons/user-info-button/UserInfoButton"
import styles from "./MobileNavigation.module.css"

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: (id: number) => boolean
  navigationList: NavigationListType[]
}

export const MobileNavigation: FC<Props> = ({
  onChangeItem,
  isActiveItem,
  navigationList,
}) => {
  const [showNav, setShowNav] = useState<boolean>(false)

  const onOpenMenu = () => setShowNav(prev => !prev)

  return (
    <>
      <div className={styles.mobileNavContent}>
        <UserInfoButton />
        <ChangeThemeButton />
        <BurgerButton onClick={onOpenMenu} />
      </div>

      <Box
        style={{
          marginTop: "5px",
          position: "absolute",
          bottom: !showNav ? "150%" : "-150%",
          transition: "bottom 0.5s ease",
        }}
      >
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
      </Box>
    </>
  )
}
