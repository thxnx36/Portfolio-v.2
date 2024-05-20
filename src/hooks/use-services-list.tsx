import { ServicesListType } from '../types/services-list-type'
import { FaReact } from 'react-icons/fa'
import { SiPagespeedinsights } from 'react-icons/si'
import { PiBrowsersThin } from 'react-icons/pi'
import { COLOR_YELLOW } from '../constans'
import { CiDatabase } from 'react-icons/ci'
import { CiMobile3 } from 'react-icons/ci'
import { HiOutlineCodeBracket } from 'react-icons/hi2'
import { useMemo } from 'react'

export const useServicesList = () => {
  const servicesList: ServicesListType[] = useMemo(
    () => [
      {
        title: 'Front-end development',
        text: 'Development UI and business logic using React/Next, TypeScript, CSS',
        icon: <FaReact size='5em' color={COLOR_YELLOW} />,
        id: 1,
      },
      {
        title: 'Responsive design',
        text: 'Responsive websites and apps ensuring optimal display on all devices and screen resolutions',
        icon: <CiMobile3 size='5em' color={COLOR_YELLOW} />,
        id: 2,
      },
      {
        title: 'API and backend integration',
        text: 'Work with APIs and backend to implement web application functionality, including data exchange',
        icon: <CiDatabase size='5em' color={COLOR_YELLOW} />,
        id: 3,
      },
      {
        title: 'Performance optimization',
        text: 'Optimizing the performance of web applications for fast loading times and maximum responsiveness',
        icon: <SiPagespeedinsights size='4.4em' color={COLOR_YELLOW} />,
        id: 4,
      },
      {
        title: 'Cross-browser compatibility',
        text: 'Ensuring compatibility of web applications with various browsers',
        icon: <PiBrowsersThin size='5em' color={COLOR_YELLOW} />,
        id: 5,
      },
      {
        title: 'Technical support',
        text: 'Updating and supporting existing code to ensure stable operation of the application',
        icon: <HiOutlineCodeBracket size='5em' color={COLOR_YELLOW} />,
        id: 6,
      },
    ],
    [],
  )
  return { servicesList }
}
