import { useNavigationList } from "../../hooks"
import { useState, useCallback, useContext } from "react"
import { useResizeScreen } from "../../hooks"
import { DesktopNavigation } from "./desktop-navigation/DesktopNavigation"
import { MobileNavigation } from "./mobile-navigation/MobileNavigation"
import { TABLET } from "../../constans"
import { ThemeContext } from "../../providers"
import { DARK, LIGHT } from "../../constans"
import { Container } from "../../commons"

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
