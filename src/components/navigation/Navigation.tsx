import { Container } from "../../commons/container/Container"
import { useNavigationList } from "../../hooks/use-navigation-list"
import { useState, useCallback, useContext } from "react"
import { useResizeScreen } from "../../hooks/use-resize-screen"
import { DesktopNavigation } from "./desktop-navigation/DesktopNavigation"
import styles from "./Navigation.module.css"
import { MobileNavigation } from "./mobile-navigation/MobileNavigation"
import { TABLET } from "../../constans/screen"
import { ThemeContext } from "../../providers/ThemeProvider"
import { DARK, LIGHT } from "../../constans/theme"

export const Navigation = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
  const [activeItem, setActiveItem] = useState<number>(1)

  const { navigationList } = useNavigationList()
  const { isSmallScreen } = useResizeScreen(TABLET)

  const onChangeItem = useCallback((id: number) => setActiveItem(id), [])

  const isActiveItem = useCallback(
    (id: number) => id === activeItem,
    [activeItem],
  )

  const onChangeTheme = useCallback(
    () => changeTheme(theme === LIGHT ? DARK : LIGHT),
    [theme],
  )
  return (
    <Container
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 99,
        marginBottom: "10px",
      }}
    >
      <nav>
        {!isSmallScreen ? (
          <DesktopNavigation
            navigationList={navigationList}
            onChangeItem={onChangeItem}
            isActiveItem={isActiveItem}
            onChangeTheme={onChangeTheme}
          />
        ) : (
          <MobileNavigation
            navigationList={navigationList}
            onChangeItem={onChangeItem}
            isActiveItem={isActiveItem}
            onChangeTheme={onChangeTheme}
          />
        )}
      </nav>
    </Container>
  )
}
