import type { FC } from 'react'
import { Avatar, BurgerButton, ToolTip } from '../../../shared'
import { NavListItemDesktop } from '../nav-list-item-desktop/NavListItemDesktop'
import { userPhoto } from '../../../assets'
import { Toolbar } from '../toolbar/Toolbar'
import styles from './NavigationPanel.module.css'
import { useTranslation } from 'react-i18next'

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
