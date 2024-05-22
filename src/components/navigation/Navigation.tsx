import { useState, useCallback, useContext, CSSProperties } from 'react'
import { useNavigationList, useResizeScreen } from '../../hooks'
import { TABLET } from '../../constans'
import { ThemeContext } from '../../providers'
import { DARK, LIGHT } from '../../constans'
import { Container, SideBar } from '../../shared'
import { MySkills } from '../my-skills/MySkills'
import { NavigationPanel } from './navigation-panel/NavigationPanel'

export const Navigation = () => {
  const { theme, changeTheme } = useContext(ThemeContext)
  // const { isResizeScreen } = useResizeScreen(TABLET)
  const { navigationList } = useNavigationList()

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

  return (
    <>
      <Container style={additionalContainerStyles}>
        <nav>
          <NavigationPanel
            navigationList={navigationList}
            handleSkills={handleSkills}
            handleMenu={handleMenu}
            onClickItemMenu={onClickItemMenu}
            isActiveItem={activeItem}
            isShowSideBarMenu={isShowSideBarMenu}
            onChangeTheme={onChangeTheme}
            checked={theme === LIGHT}
          />
        </nav>
      </Container>
      <SideBar
        side={'left'}
        isOpen={isShowSideBarSkills}
        onClose={handleSkills}
      >
        <MySkills />
      </SideBar>
    </>
  )
}

const additionalContainerStyles: CSSProperties = {
  // position: 'sticky',
  // top: 0,
  // zIndex: 99,
  marginBottom: '10px',
}
