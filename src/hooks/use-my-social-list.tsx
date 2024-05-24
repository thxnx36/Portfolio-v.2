import { LINKEDIN_URL, TELEGRAM_URL, EMAIL_URL, GIT_HUB_URL } from '../constans'
import { FaLinkedin } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaGithubSquare } from 'react-icons/fa'
import type { MySocialListType } from '../types'

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
      link: EMAIL_URL,
      name: 'Email',
      icon: <MdEmail size='1.2em' />,
      id: 3,
    },
    {
      link: GIT_HUB_URL,
      name: 'GitHub',
      icon: <FaGithubSquare size='1.2em' />,
      id: 4,
    },
  ]

  return { socialList }
}
