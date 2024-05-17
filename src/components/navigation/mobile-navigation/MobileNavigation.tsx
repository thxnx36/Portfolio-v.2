import { CSSProperties, FC, useCallback, useState } from "react"
import {
  BurgerButton,
  ChangeThemeButton,
  Container,
  UserInfoButton,
} from "../../../shared"
import { NavListItem } from "../nav-list-item/NavListItem"
import styles from "./MobileNavigation.module.css"

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: (id: number) => boolean
  handleSideBar: () => void
  onChangeTheme: () => void
}

export const MobileNavigation: FC<Props> = ({
  onChangeItem,
  onChangeTheme,
  isActiveItem,
  handleSideBar,
}) => {
  const [showNavPanel, setShowNavPanel] = useState<boolean>(false)

  const handleMenu = useCallback(() => setShowNavPanel(prev => !prev), [])
  const hideNavPanel = useCallback((id: number) => {
    setShowNavPanel(prev => !prev)
    onChangeItem(id)
  }, [])

  return (
    <>
      <div className={styles.mobileNavContent}>
        <BurgerButton onClick={handleMenu} />
        <ChangeThemeButton onClick={onChangeTheme} />
        <UserInfoButton onClick={handleSideBar} />
      </div>
      <Container
        sx={{
          ...additionalStyles,
          bottom: !showNavPanel ? "150%" : "-150%",
        }}
      >
        <NavListItem
          sx={{ padding: "10px" }}
          onChangeItem={hideNavPanel}
          isActiveItem={isActiveItem}
        />
      </Container>
    </>
  )
}

const additionalStyles: CSSProperties = {
  position: "absolute",
  transition: "bottom 0.5s ease",
}
