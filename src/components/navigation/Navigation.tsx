import { useState, useCallback, useContext, CSSProperties } from 'react'
import { useScrollListener } from '../../hooks'
import { ThemeContext } from '../../providers'
import { DARK, LIGHT, motionNav } from '../../constans'
import { MContainer, Drawer } from '../../shared'
import { MySkills } from '../my-skills/MySkills'
import { NavigationPanel } from './navigation-panel/NavigationPanel'
import { NavListItemMobile } from './nav-list-item-mobile/NavListItemMobile'

export const Navigation = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
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

  const onChangeTheme = useCallback(
    () => changeTheme(theme === LIGHT ? DARK : LIGHT),
    [theme],
  )

  const onCloseSideBarMenu = (id: number) => {
    onClickItemMenu(id)
    handleMenu()
  }

  const checkedSwitcher = theme === LIGHT

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
            onChangeTheme={onChangeTheme}
            checked={checkedSwitcher}
          />
        </nav>
      </MContainer>

      <Drawer side={'left'} isOpen={isShowSideBarSkills} onClose={handleSkills}>
        <MySkills />
      </Drawer>

      <Drawer side='right' isOpen={isShowSideBarMenu} onClose={handleMenu}>
        <NavListItemMobile
          checked={checkedSwitcher}
          onChangeTheme={onChangeTheme}
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
