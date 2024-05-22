import {
  NavigationListType,
  ProjectsListType,
} from '../types/navigation-list-type'
import { FaFileCode } from 'react-icons/fa'
import { IoDocumentAttachSharp } from 'react-icons/io5'
import { BiSolidMessageCheck } from 'react-icons/bi'
import { MdOutlineWork } from 'react-icons/md'
import { IoSchoolSharp } from 'react-icons/io5'
import { IoMdHome } from 'react-icons/io'
import { SiAboutdotme } from 'react-icons/si'
import { text } from '../localization'
import { NAVIGATE, ROUTES } from '../constans'

export const useNavigationList = () => {
  const navigationList: NavigationListType[] = [
    {
      text: text.navigation.HOME,
      icon: <IoMdHome size='1.3em' />,
      href: '#',
      id: 1,
    },
    {
      text: text.navigation.SERVICES,
      icon: <FaFileCode size='1.3em' />,
      href: NAVIGATE.services,
      id: 2,
    },
    {
      text: text.navigation.PORTFOLIO,
      icon: <IoDocumentAttachSharp size='1.3em' />,
      href: NAVIGATE.portfolio,
      id: 3,
    },
    {
      text: text.navigation.RECOMMEND,
      icon: <BiSolidMessageCheck size='1.3em' />,
      href: NAVIGATE.recommendations,
      id: 4,
    },
    {
      text: text.navigation.WORK_HISTORY,
      icon: <MdOutlineWork size='1.3em' />,
      href: NAVIGATE.workHistory,
      id: 5,
    },
    {
      text: text.navigation.EDUCATION,
      icon: <IoSchoolSharp size='1.3em' />,
      href: NAVIGATE.education,
      id: 6,
    },
    {
      text: 'About me',
      icon: <SiAboutdotme size='1.3em' />,
      href: ROUTES.aboutMe,
      id: 7,
    },
  ]

  const projectsPages: ProjectsListType[] = [
    {
      name: 'Tutiffy',
      link: `${ROUTES.dynamic.projectId(1)}`,
      id: 1,
    },
    {
      name: 'ASX Sports',
      link: `${ROUTES.dynamic.projectId(2)}`,
      id: 2,
    },
    {
      name: 'Maven 11',
      link: `${ROUTES.dynamic.projectId(3)}`,
      id: 3,
    },
  ]
  return { navigationList, projectsPages }
}
