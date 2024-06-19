import { LINKEDIN_URL, TELEGRAM_URL, UP_WORK_URL } from 'src/constants'
import type { MySocialListType } from 'src/types'
import { FaLinkedin } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaSquareUpwork } from 'react-icons/fa6'

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
    {
      link: UP_WORK_URL,
      name: 'UpWork',
      icon: <FaSquareUpwork size='1.2em' />,
      id: 3,
    },
  ]

  return { socialList }
}
