import { LINKEDIN_URL, TELEGRAM_URL } from "../constans"
import { FaLinkedin } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
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
    ],
    [],
  )

  return { socialList }
}
