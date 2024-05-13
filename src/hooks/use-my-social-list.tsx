import { EMAIL_URL, LINKEDIN_URL, TELEGRAM_URL } from "../constans/URLs"
import { FaLinkedin } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { MySocialListType } from "../types/my-social-list-type"
import { useMemo } from "react"

export const useMySocialList = () => {
  const socialList: MySocialListType[] = useMemo(
    () => [
      {
        link: LINKEDIN_URL,
        icon: <FaLinkedin size="1.2em" />,
        id: 1,
      },
      {
        link: TELEGRAM_URL,
        icon: <FaTelegramPlane size="1.2em" />,
        id: 2,
      },
      /* {
        link: EMAIL_URL,
        icon: <MdEmail size="1.2em" />,
        id: 3,
      }, */
    ],
    [],
  )

  return { socialList }
}
