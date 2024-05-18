import { FC, useCallback, useState } from 'react'
import {
  Avatar,
  BurgerButton,
  ChangeThemeButton,
  Container,
} from '../../../shared'
import { NavListItem } from '../nav-list-item/NavListItem'
import { userPhoto } from '../../../assets'
import styles from './MobileNavigation.module.css'

type Props = {
  onChangeItem: (id: number) => void
  isActiveItem: (id: number) => boolean
  handleSideBar: () => void
  onChangeTheme: () => void
}

export const MobileNavigation: FC<Props> = ({
  onChangeItem,
  onChangeTheme,
  isActiveItem,
  handleSideBar,
}) => {
  const [showNavPanel, setShowNavPanel] = useState<boolean>(false)

  const handleMenu = useCallback(() => setShowNavPanel(prev => !prev), [])
  const hideNavPanel = useCallback((id: number) => {
    setShowNavPanel(prev => !prev)
    onChangeItem(id)
  }, [])

  return (
    <>
      <div className={styles.mobileNavContent}>
        <BurgerButton onClick={handleMenu} />
        <ChangeThemeButton onClick={onChangeTheme} />
        <Avatar
          tag='button'
          sx={{ width: 30, height: 30 }}
          withBorder
          src={userPhoto}
          onClick={handleSideBar}
        />
      </div>
      {showNavPanel && (
        <Container
          sx={{
            position: 'absolute',
            top: 50,
          }}
        >
          <NavListItem
            sx={{ padding: '10px' }}
            onChangeItem={hideNavPanel}
            isActiveItem={isActiveItem}
          />
        </Container>
      )}
    </>
  )
}
