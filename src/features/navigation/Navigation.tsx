import { Container } from "../../commons/container/Container"
import { useNavigationList } from "../../hooks/use-navigation-list"
import { useState, useCallback } from "react"
import { useResizeScreen } from "../../hooks/use-resize-screen"
import { DesktopNavigation } from "./desktop-navigation/DesktopNavigation"
import styles from "./Navigation.module.css"
import { MobileNavigation } from "./mobile-navigation/MobileNavigation"
import { TABLET } from "../../constans/screen"

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState<number>(1)

  const navigationList = useNavigationList()
  const { isSmallScreen } = useResizeScreen(TABLET)

  const onChangeItem = useCallback((id: number) => setActiveItem(id), [])
  const isActiveItem = useCallback(
    (id: number) => id === activeItem,
    [activeItem],
  )

  return (
    <Container style={{ position: "sticky", top: 0, left: 0, zIndex: 99 }}>
      <nav>
        {!isSmallScreen ? (
          <DesktopNavigation
            navigationList={navigationList}
            onChangeItem={onChangeItem}
            isActiveItem={isActiveItem}
          />
        ) : (
          <MobileNavigation
            navigationList={navigationList}
            onChangeItem={onChangeItem}
            isActiveItem={isActiveItem}
          />
        )}
      </nav>
    </Container>
  )
}
