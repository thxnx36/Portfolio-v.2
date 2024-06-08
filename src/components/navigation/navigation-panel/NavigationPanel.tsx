import type { FC } from 'react'
import { NavListItemDesktop } from '../nav-list-item-desktop/NavListItemDesktop'
import { Toolbar } from '../toolbar/Toolbar'
import { PiDevToLogoFill } from 'react-icons/pi'
import { BurgerButton, UserInfoButton } from 'src/shared'
import styles from './NavigationPanel.module.css'

type Props = {
  onClickItemMenu: (id: number) => void
  handleMenu: () => void
  handleSkills: () => void
  isShowSideBarMenu: boolean
  isActiveItem: number
}

export const NavigationPanel: FC<Props> = ({
  onClickItemMenu,
  isActiveItem,
  handleSkills,
  handleMenu,
}) => {
  return (
    <div className={styles.navContent}>
      <UserInfoButton onClick={handleSkills} />
      <div className={styles.logo}>
        <PiDevToLogoFill size='1.5em' />
      </div>
      <BurgerButton onClick={handleMenu} />
      <NavListItemDesktop
        onChangeItem={onClickItemMenu}
        isActiveItem={isActiveItem}
      />
      <div className={styles.navToolbar}>
        <Toolbar
          uniqueIdForSwitcher='switch-theme-desk'
          uniqueToggletId='toggle-lang-desk'
        />
      </div>
    </div>
  )
}
