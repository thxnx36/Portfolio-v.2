import { useScrollListener } from "../../hooks"
import { useState, useCallback, useContext, CSSProperties } from "react"
import { useResizeScreen } from "../../hooks"
import { DesktopNavigation } from "./desktop-navigation/DesktopNavigation"
import { MobileNavigation } from "./mobile-navigation/MobileNavigation"
import { TABLET } from "../../constans"
import { ThemeContext } from "../../providers"
import { DARK, LIGHT } from "../../constans"
import { Container, SideBar } from "../../shared"
import { MySkills } from "../my-skills/MySkills"

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState<number>(1)
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false)

  const { theme, changeTheme } = useContext(ThemeContext)
  const { isResizeScreen } = useResizeScreen(TABLET)
  const { isScrollDown } = useScrollListener()

  const onChangeItem = useCallback((id: number) => setActiveItem(id), [])
  const handleSideBar = useCallback(() => setIsOpenSideBar(prev => !prev), [])

  const isActiveItem = useCallback(
    (id: number) => id === activeItem,
    [activeItem],
  )

  const onChangeTheme = useCallback(
    () => changeTheme(theme === LIGHT ? DARK : LIGHT),
    [theme],
  )

  return (
    <>
      <Container
        sx={{
          ...additionalContainerStyles,
          top: !isScrollDown ? "0" : "-50%",
        }}
      >
        <nav>
          {!isResizeScreen ? (
            <DesktopNavigation
              handleSideBar={handleSideBar}
              onChangeItem={onChangeItem}
              isActiveItem={isActiveItem}
              onChangeTheme={onChangeTheme}
            />
          ) : (
            <MobileNavigation
              onChangeItem={onChangeItem}
              isActiveItem={isActiveItem}
              onChangeTheme={onChangeTheme}
              handleSideBar={handleSideBar}
            />
          )}
        </nav>
      </Container>
      <SideBar isOpen={isOpenSideBar} onClose={handleSideBar}>
        <MySkills />
      </SideBar>
    </>
  )
}

const additionalContainerStyles: CSSProperties = {
  position: "sticky",
  zIndex: 99,
  marginBottom: "10px",
  transition: "top .7s ease",
}
