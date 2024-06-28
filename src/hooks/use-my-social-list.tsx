import {
  CV_URL,
  GIT_HUB_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  UP_WORK_URL,
} from 'src/constants'
import type { MySocialListType } from 'src/types'
import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { FaSquareUpwork, FaSquareGithub } from 'react-icons/fa6'
import { TbFileCv } from "react-icons/tb";

export const useMySocialList = () => {
  const socialList: MySocialListType[] = [
    {
      link: LINKEDIN_URL,
      name: 'LinkedIn',
      bgColor: '#0A65C2',
      icon: <FaLinkedin size='1.2em' />,
      id: 1,
    },
    {
      link: TELEGRAM_URL,
      name: 'Telegram',
      bgColor: '#35ACE1',
      icon: <FaTelegramPlane size='1.2em' />,
      id: 2,
    },
    {
      link: UP_WORK_URL,
      name: 'UpWork',
      bgColor: '#0F8A00',
      icon: <FaSquareUpwork size='1.2em' />,
      id: 3,
    },
    {
      link: CV_URL,
      name: 'CV',
      bgColor: '#4285F4',
      icon: <TbFileCv size='1.5em' />,
      id: 4,
    },
    {
      link: GIT_HUB_URL,
      name: 'GitHub',
      bgColor: '#242526',
      icon: <FaSquareGithub size='1.2em' />,
      id: 5,
    },

  ]

  return { socialList }
}
