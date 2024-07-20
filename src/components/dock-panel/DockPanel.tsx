import { SocialList, Toolbar } from 'src/shared'
import { NavList } from './nav-list/NavList'
import { motion } from 'framer-motion'
import { motionDockPanel } from 'src/constants'
import styles from './DockPanel.module.css'

export const DockPanel = () => {
  return (
    <motion.nav
      className={styles.dockPanelContainer}
      initial={motionDockPanel.initial}
      animate={motionDockPanel.animate}
      transition={motionDockPanel.transition}
    >
      <div className={styles.dockPanelContent}>
        <div className={styles.navList}>
          <NavList />
        </div>
        <div className={styles.socialList}>
          <SocialList />
        </div>
        <Toolbar />
      </div>
    </motion.nav>
  )
}
