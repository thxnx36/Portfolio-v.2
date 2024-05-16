import { NavigationListType } from "../../../types/navigation-list-type"
import { FC, useCallback, useState } from "react"
import { NavItem } from "../nav-item/NavItem"
import {
  BurgerButton,
  ChangeThemeButton,
  Container,
  Modal,
  UserInfoButton,
} from "../../../commons"
import styles from "./MobileNavigation.module.css"

type Props = {
  onChangeItem: (id: number) => void
  onChangeTheme: () => void
  isActiveItem: (id: number) => boolean
  navigationList: NavigationListType[]
}

export const MobileNavigation: FC<Props> = ({
  onChangeItem,
  onChangeTheme,
  isActiveItem,
  navigationList,
}) => {
  const [showNavPanel, setShowNavPanel] = useState<boolean>(false)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleMenu = useCallback(() => setShowNavPanel(prev => !prev), [])
  const hideNavPanel = useCallback((id: number) => {
    setShowNavPanel(prev => !prev)
    onChangeItem(id)
  }, [])
  const handleModal = useCallback(() => setIsOpenModal(prev => !prev), [])

  return (
    <>
      <div className={styles.mobileNavContent}>
        <UserInfoButton onClick={handleModal} />
        <ChangeThemeButton onClick={onChangeTheme} />
        <BurgerButton onClick={handleMenu} />
      </div>

      <Container
        style={{
          position: "absolute",
          bottom: !showNavPanel ? "150%" : "-150%",
          transition: "bottom 0.5s ease",
        }}
      >
        <ul className={styles.navItemContainer}>
          {navigationList.map(({ id, href, text, icon }) => (
            <NavItem
              onClick={() => hideNavPanel(id)}
              key={id}
              href={href}
              text={text}
              icon={icon}
              active={isActiveItem(id)}
            />
          ))}
        </ul>
      </Container>

      {isOpenModal && (
        <Modal onClose={handleModal}>
          <>User Info comming soon</>
        </Modal>
      )}
    </>
  )
}
