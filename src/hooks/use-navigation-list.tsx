import { NavigationListType } from "../types/navigation-list-type"
import { FaFileCode } from "react-icons/fa"
import { MdHome } from "react-icons/md"
import { IoDocumentAttachSharp } from "react-icons/io5"
import { BiSolidMessageCheck } from "react-icons/bi"
import { MdOutlineWork } from "react-icons/md"
import { IoSchoolSharp } from "react-icons/io5"
import { useMemo } from "react"

export const useNavigationList = () => {
  const navigationList: NavigationListType[] = useMemo(
    () => [
      {
        text: "Home",
        icon: <MdHome size="1.3em" />,
        href: "#",
        id: 1,
      },
      {
        text: "Services",
        icon: <FaFileCode size="1.3em" />,
        href: "#",
        id: 2,
      },
      {
        text: "Portfolio",
        icon: <IoDocumentAttachSharp size="1.3em" />,
        href: "#",
        id: 3,
      },
      {
        text: "Testimonials",
        icon: <BiSolidMessageCheck size="1.3em" />,
        href: "#",
        id: 4,
      },
      {
        text: "Work History",
        icon: <MdOutlineWork size="1.3em" />,
        href: "#",
        id: 5,
      },
      {
        text: "Education",
        icon: <IoSchoolSharp size="1.3em" />,
        href: "#",
        id: 6,
      },
    ],
    [],
  )
  return { navigationList }
}
