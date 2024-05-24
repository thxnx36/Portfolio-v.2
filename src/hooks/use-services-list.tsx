import { ServicesListType } from '../types/services-list-type'
import { FaReact } from 'react-icons/fa'
import { SiPagespeedinsights } from 'react-icons/si'
import { PiBrowsersThin } from 'react-icons/pi'
import { COLOR_YELLOW } from '../constans'
import { CiDatabase } from 'react-icons/ci'
import { CiMobile3 } from 'react-icons/ci'
import { HiOutlineCodeBracket } from 'react-icons/hi2'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export const useServicesList = () => {
  const { t } = useTranslation()

  const servicesList: ServicesListType[] = useMemo(
    () => [
      {
        title: t('myServices.cards.FRONT_END_DEVELOPMENT_TITLE'),
        text: t('myServices.cards.FRONT_END_DEVELOPMENT_TEXT'),
        icon: <FaReact size='5em' color={COLOR_YELLOW} />,
        id: 1,
      },
      {
        title: t('myServices.cards.RESPONSIVE_DESIGN_TITLE'),
        text: t('myServices.cards.RESPONSIVE_DESIGN_TEXT'),
        icon: <CiMobile3 size='5em' color={COLOR_YELLOW} />,
        id: 2,
      },
      {
        title: t('myServices.cards.API_BACKEND_INTEGRATION_TITLE'),
        text: t('myServices.cards.API_BACKEND_INTEGRATION_TEXT'),
        icon: <CiDatabase size='5em' color={COLOR_YELLOW} />,
        id: 3,
      },
      {
        title: t('myServices.cards.PERFORMANCE_OPTIMIZATION_TITLE'),
        text: t('myServices.cards.PERFORMANCE_OPTIMIZATION_TEXT'),
        icon: <SiPagespeedinsights size='4.4em' color={COLOR_YELLOW} />,
        id: 4,
      },
      {
        title: t('myServices.cards.CROSS_BROWSER_COMPATIBILITY_TITLE'),
        text: t('myServices.cards.CROSS_BROWSER_COMPATIBILITY_TEXT'),
        icon: <PiBrowsersThin size='5em' color={COLOR_YELLOW} />,
        id: 5,
      },
      {
        title: t('myServices.cards.TECHNICAL_SUPPORT_TITLE'),
        text: t('myServices.cards.TECHNICAL_SUPPORT_TEXT'),
        icon: <HiOutlineCodeBracket size='5em' color={COLOR_YELLOW} />,
        id: 6,
      },
    ],
    [t],
  )

  return { servicesList }
}
