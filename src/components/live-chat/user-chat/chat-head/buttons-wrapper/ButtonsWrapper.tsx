import { FC } from 'react'
import { PiResizeLight } from 'react-icons/pi'
import { VscDebugDisconnect } from 'react-icons/vsc'
import { CloseButton, ToolTip } from 'src/shared'
import { useTranslation } from 'react-i18next'
import styles from './ButtonsWraapper.module.css'

type Props = {
  onToggleChat: () => void
  onToogleZoomWindow: () => void
  onDeleteChat: () => Promise<void>
  isJoinedUser: boolean
}

export const ButtonsWrapper: FC<Props> = ({
  onToogleZoomWindow,
  isJoinedUser,
  onDeleteChat,
  onToggleChat,
}) => {
  const { t } = useTranslation()
  return (
    <div className={styles.buttonsWrap}>
      {isJoinedUser && (
        <>
          <button className={styles.zoomButton} onClick={onToogleZoomWindow}>
            <ToolTip text={t('chat.setting_buttons.RESIZE_WINDOW')}>
              <PiResizeLight size={'1.6em'} />
            </ToolTip>
          </button>
          <button onClick={onDeleteChat}>
            <ToolTip text={t('chat.setting_buttons.DELETE_CHAT')}>
              <VscDebugDisconnect size={'1.4em'} />
            </ToolTip>
          </button>
        </>
      )}
      <CloseButton onClick={onToggleChat} />
    </div>
  )
}
