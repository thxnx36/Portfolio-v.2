import { ServicesListType } from "../types/services-list-type"
import { LiaLaptopCodeSolid } from "react-icons/lia"
import { MdOutlineDesignServices } from "react-icons/md"
import { CgWebsite } from "react-icons/cg"
import { CgPerformance } from "react-icons/cg"
import { CgBrowser } from "react-icons/cg"
import { RiGithubLine } from "react-icons/ri"
import { COLOR_YELLOW } from "../constans/colors"
import { useMemo } from "react"

export const useServicesList = () => {
  const servicesList: ServicesListType[] = useMemo(
    () => [
      {
        title: "Front-end Development",
        text: "Creating modern and interactive user interfaces using HTML, CSS, and JavaScript",
        icon: <LiaLaptopCodeSolid size="5em" color={COLOR_YELLOW} />,
        id: 1,
      },
      {
        title: "Responsive Design",
        text: "Developing responsive websites ensuring optimal display on all devices and screen resolutions",
        icon: <MdOutlineDesignServices size="5em" color={COLOR_YELLOW} />,
        id: 2,
      },
      {
        title: "UI/UX Design",
        text: "Designing aesthetically pleasing and user-friendly interfaces with a focus on user experience",
        icon: <CgWebsite size="5em" color={COLOR_YELLOW} />,
        id: 3,
      },
      {
        title: "Performance Optimization",
        text: "Optimizing the performance of web applications for fast loading times and maximum responsiveness.",
        icon: <CgPerformance size="5em" color={COLOR_YELLOW} />,
        id: 4,
      },
      {
        title: "Cross-Browser Compatibility",
        text: "Ensuring compatibility of web applications with various browsers for a wide audience reach",
        icon: <CgBrowser size="5em" color={COLOR_YELLOW} />,
        id: 5,
      },
      {
        title: "Version Control",
        text: "Managing code versions using Git version control system for efficient collaboration and change tracking",
        icon: <RiGithubLine size="5em" color={COLOR_YELLOW} />,
        id: 6,
      },
    ],
    [],
  )
  return { servicesList }
}
