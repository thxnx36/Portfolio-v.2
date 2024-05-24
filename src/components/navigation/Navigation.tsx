import { useState, useCallback, useContext, CSSProperties } from 'react'
import { useScrollListener } from '../../hooks'
import { motionNav } from '../../constans'
import { MContainer, Drawer } from '../../shared'
import { MySkills } from '../my-skills/MySkills'
import { NavigationPanel } from './navigation-panel/NavigationPanel'
import { NavListItemMobile } from './nav-list-item-mobile/NavListItemMobile'

export const Navigation = () => {
  const { isScrollDown } = useScrollListener()

  const [activeItem, setActiveItem] = useState<number>(1)
  const [isShowSideBarSkills, setIsShowSideBarSkills] = useState<boolean>(false)
  const [isShowSideBarMenu, setIsShowSideBarMenu] = useState<boolean>(false)

  const handleMenu = useCallback(() => setIsShowSideBarMenu(prev => !prev), [])

  const handleSkills = useCallback(
    () => setIsShowSideBarSkills(prev => !prev),
    [],
  )
  const onClickItemMenu = useCallback((id: number) => setActiveItem(id), [])

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
            handleSkills={handleSkills}
            handleMenu={handleMenu}
            onClickItemMenu={onClickItemMenu}
            isActiveItem={activeItem}
            isShowSideBarMenu={isShowSideBarMenu}
          />
        </nav>
      </MContainer>

      <Drawer side={'left'} isOpen={isShowSideBarSkills} onClose={handleSkills}>
        <MySkills />
      </Drawer>

      <Drawer side='right' isOpen={isShowSideBarMenu} onClose={handleMenu}>
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
  zIndex: 99,
  top: 0,
  marginBottom: '10px',
}
