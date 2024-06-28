import type { CSSProperties } from 'react'
import { useState } from 'react'
import { NavigationPanel } from './navigation-panel/NavigationPanel'
import { NavListItemMobile } from './nav-list-item-mobile/NavListItemMobile'
import { motionNav } from 'src/constants'
import { useScrollListener } from 'src/hooks'
import { MContainer, Drawer } from 'src/shared'
import styles from './Navigation.module.css'

export const Navigation = () => {
  const { isScrollDown } = useScrollListener()

  const [activeItem, setActiveItem] = useState<number>(1)
  const [isShowSideBarMenu, setIsShowSideBarMenu] = useState<boolean>(false)

  const handleMenu = () => setIsShowSideBarMenu(prev => !prev)

  const onClickItemMenu = (id: number) => setActiveItem(id)

  const onCloseSideBarMenu = (id: number) => {
    onClickItemMenu(id)
    handleMenu()
  }

  return (
    <>
      <MContainer
        variants={motionNav.variants}
        transition={motionNav.transition}
        animate={
          isScrollDown ? motionNav.animate.hidden : motionNav.animate.visible
        }
        style={additionalContainerStyles}
      >
        <nav>
          <NavigationPanel
            handleMenu={handleMenu}
            onClickItemMenu={onClickItemMenu}
            isActiveItem={activeItem}
            isShowSideBarMenu={isShowSideBarMenu}
          />
        </nav>
      </MContainer>

      <Drawer
        className={styles.menuDrawer}
        side='right'
        isOpen={isShowSideBarMenu}
        onClose={handleMenu}
      >
        <NavListItemMobile
          onChangeItem={onCloseSideBarMenu}
          isActiveItem={activeItem}
          isMobile={isShowSideBarMenu}
        />
      </Drawer>
    </>
  )
}

const additionalContainerStyles: CSSProperties = {
  position: 'sticky',
  zIndex: 1,
  top: 0,
  margin: '10px 0',
}
