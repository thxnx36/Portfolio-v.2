import { NavigationListType } from "../types/navigation-list-type"
import { FaFileCode } from "react-icons/fa"
import { MdHome } from "react-icons/md"
import { IoDocumentAttachSharp } from "react-icons/io5"
import { BiSolidMessageCheck } from "react-icons/bi"
import { MdOutlineWork } from "react-icons/md"
import { IoSchoolSharp } from "react-icons/io5"
import { useMemo } from "react"
import { NAVIGATE } from "../nav"

export const useNavigationList = () => {
  const navigationList: NavigationListType[] = useMemo(
    () => [
      {
        text: "Home",
        icon: <MdHome size="1.3em" />,
        href: NAVIGATE.home,
        id: 1,
      },
      {
        text: "Services",
        icon: <FaFileCode size="1.3em" />,
        href: NAVIGATE.services,
        id: 2,
      },
      {
        text: "Portfolio",
        icon: <IoDocumentAttachSharp size="1.3em" />,
        href: NAVIGATE.portfolio,
        id: 3,
      },
      {
        text: "Recommendations",
        icon: <BiSolidMessageCheck size="1.3em" />,
        href: NAVIGATE.recommendations,
        id: 4,
      },
      {
        text: "Work History",
        icon: <MdOutlineWork size="1.3em" />,
        href: NAVIGATE.workHistory,
        id: 5,
      },
      {
        text: "Education",
        icon: <IoSchoolSharp size="1.3em" />,
        href: NAVIGATE.education,
        id: 6,
      },
    ],
    [],
  )
  return { navigationList }
}
