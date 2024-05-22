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
import { userPhoto } from '../../../assets'
import { IoMoonSharp } from 'react-icons/io5'
import { FaSun } from 'react-icons/fa6'
import { text } from '../../../localization'
import styles from './NavigationPanel.module.css'

type Props = {
  onClickItemMenu: (id: number) => void
  handleMenu: () => void
  onChangeTheme: () => void
  handleSkills: () => void
  isShowSideBarMenu: boolean
  checked: boolean
  isActiveItem: number
}

export const NavigationPanel: FC<Props> = ({
  onClickItemMenu,
  onChangeTheme,
  isActiveItem,
  handleSkills,
  handleMenu,
  checked,
}) => {
  return (
    <div className={styles.navContent}>
      <ToolTip text={text.tooltip.MY_SKILLS}>
        <Avatar
          className={styles.avatar}
          withBorder
          src={userPhoto}
          onClick={handleSkills}
        />
      </ToolTip>
      <BurgerButton onClick={handleMenu} />
      <NavListItemDesktop
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
  )
}
