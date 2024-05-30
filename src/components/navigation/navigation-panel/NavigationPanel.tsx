import type { FC } from 'react'
import { NavListItemDesktop } from '../nav-list-item-desktop/NavListItemDesktop'
import { Toolbar } from '../toolbar/Toolbar'
import { useTranslation } from 'react-i18next'
import { PiDevToLogoFill } from 'react-icons/pi'
import { userPhoto } from 'src/assets'
import { ToolTip, Avatar, BurgerButton } from 'src/shared'
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
  const { t } = useTranslation()

  return (
    <div className={styles.navContent}>
      <ToolTip text={t('tooltip.MY_SKILLS')}>
        <Avatar
          className={styles.avatar}
          withBorder
          src={userPhoto}
          onClick={handleSkills}
        />
      </ToolTip>
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
          reverse
          uniqueIdForSwitcher='switch-theme-desk'
          uniqSelectId='select-lang-desk'
        />
      </div>
    </div>
  )
}
