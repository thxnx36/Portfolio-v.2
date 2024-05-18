import { FC } from 'react'
import { Avatar, ChangeThemeButton } from '../../../shared'
import { NavListItem } from '../nav-list-item/NavListItem'
import { userPhoto } from '../../../assets'
import styles from './DesktopNavigation.module.css'

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: (id: number) => boolean
  onChangeTheme: () => void
  handleSideBar: () => void
}

export const DesktopNavigation: FC<Props> = ({
  onChangeItem,
  onChangeTheme,
  isActiveItem,
  handleSideBar,
}) => {
  return (
    <div className={styles.navDesktopContent}>
      <ChangeThemeButton onClick={onChangeTheme} />
      <NavListItem onChangeItem={onChangeItem} isActiveItem={isActiveItem} />
      <div className={styles.userInfoButton}>
        <Avatar
          tag='button'
          sx={{ width: 40, height: 40 }}
          withBorder
          src={userPhoto}
          onClick={handleSideBar}
        />
      </div>
    </div>
  )
}
