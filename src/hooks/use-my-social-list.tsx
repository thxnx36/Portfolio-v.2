import { LINKEDIN_URL, TELEGRAM_URL } from 'src/constants'
import type { MySocialListType } from 'src/types'
import { FaLinkedin } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'

export const useMySocialList = () => {
  const socialList: MySocialListType[] = [
    {
      link: LINKEDIN_URL,
      name: 'LinkedIn',
      icon: <FaLinkedin size='1.2em' />,
      id: 1,
    },
    {
      link: TELEGRAM_URL,
      name: 'Telegram',
      icon: <FaTelegramPlane size='1.2em' />,
      id: 2,
    },
  ]

  return { socialList }
}
