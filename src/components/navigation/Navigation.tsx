import { useNavigationList, useScrollListener } from "../../hooks"
import { useState, useCallback, useContext, useEffect } from "react"
import { useResizeScreen } from "../../hooks"
import { DesktopNavigation } from "./desktop-navigation/DesktopNavigation"
import { MobileNavigation } from "./mobile-navigation/MobileNavigation"
import { TABLET } from "../../constans"
import { ThemeContext } from "../../providers"
import { DARK, LIGHT } from "../../constans"
import { Container } from "../../commons"

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState<number>(1)
  const { theme, changeTheme } = useContext(ThemeContext)
  const { navigationList } = useNavigationList()
  const { isSmallScreen } = useResizeScreen(TABLET)
  const { isScrollDown } = useScrollListener()

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
        top: !isScrollDown ? "0" : "-50%",
        zIndex: 99,
        marginBottom: "10px",
        transition: "top .7s ease",
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
