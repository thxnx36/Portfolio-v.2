import { FC } from 'react'
import {
  Avatar,
  BurgerButton,
  Switcher,
  Container,
  SideBar,
  ToolTip,
} from '../../../shared'
import { NavListItemDesktop } from '../nav-list-item-desktop/NavListItemDesktop'
import { NavListItemMobile } from '../nav-list-item-mobile/NavListItemMobile'
import { userPhoto } from '../../../assets'
import { IoMoonSharp } from 'react-icons/io5'
import { FaSun } from 'react-icons/fa6'
import { text } from '../../../localization'
import { NavigationListType } from '../../../types/navigation-list-type'
import styles from './NavigationPanel.module.css'

type Props = {
  onClickItemMenu: (id: number) => void
  isActiveItem: number
  handleMenu: () => void
  onChangeTheme: () => void
  handleSkills: () => void
  isShowSideBarMenu: boolean
  checked: boolean
  navigationList: NavigationListType[]
}

export const NavigationPanel: FC<Props> = ({
  onClickItemMenu,
  onChangeTheme,
  isActiveItem,
  handleSkills,
  handleMenu,
  isShowSideBarMenu,
  navigationList,
  checked,
}) => {
  const onCloseSideBarMenu = (id: number) => {
    onClickItemMenu(id)
    handleMenu()
  }
  return (
    <>
      <div className={styles.navDesktopContent}>
        <button onClick={handleSkills}>
          <ToolTip text={text.tooltip.MY_SKILLS}>
            <Avatar className={styles.avatar} withBorder src={userPhoto} />
          </ToolTip>
        </button>
        <BurgerButton onClick={handleMenu} />
        <NavListItemDesktop
          navigationList={navigationList}
          onChangeItem={onClickItemMenu}
          isActiveItem={isActiveItem}
        />
        <Switcher
          className={styles.navSwitcher}
          checkedIcon={<FaSun />}
          uncheckedIcon={<IoMoonSharp />}
          uniqueId='switch-theme-nav'
          checked={checked}
          onChange={onChangeTheme}
        />
      </div>

      <SideBar side='right' isOpen={isShowSideBarMenu} onClose={handleMenu}>
        <Container>
          <NavListItemMobile
            navigationList={navigationList}
            checked={checked}
            onChangeTheme={onChangeTheme}
            onChangeItem={onCloseSideBarMenu}
            isActiveItem={isActiveItem}
          />
        </Container>
      </SideBar>
    </>
  )
}
