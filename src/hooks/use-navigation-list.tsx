import type { NavigationListType, ProjectsListType } from '../types'
import { FaFileCode } from 'react-icons/fa'
import { IoDocumentAttachSharp } from 'react-icons/io5'
import { MdOutlineWork } from 'react-icons/md'
import { IoSchoolSharp } from 'react-icons/io5'
import { SiAboutdotme } from 'react-icons/si'
import { NAVIGATE, ROUTES } from '../constants'
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

export const useNavigationList = () => {
  const { t } = useTranslation()

  const navigationList: NavigationListType[] = useMemo(
    () => [
      {
        text: t('navigation.SERVICES'),
        icon: <FaFileCode size='1.3em' />,
        href: NAVIGATE.services,
        id: 1,
      },
      {
        text: t('navigation.PORTFOLIO'),
        icon: <IoDocumentAttachSharp size='1.3em' />,
        href: NAVIGATE.portfolio,
        id: 2,
      },
      {
        text: t('navigation.ABOUT_ME'),
        icon: <SiAboutdotme size='1.3em' />,
        href: NAVIGATE.skills,
        id: 3,
      },
      {
        text: t('navigation.WORK_HISTORY'),
        icon: <MdOutlineWork size='1.3em' />,
        href: NAVIGATE.workHistory,
        id: 4,
      },
      {
        text: t('navigation.EDUCATION'),
        icon: <IoSchoolSharp size='1.3em' />,
        href: NAVIGATE.education,
        id: 5,
      },
    ],
    [t],
  )

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
