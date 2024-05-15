import { FC, useEffect } from "react"

type Props = {
  title: string
}

export const BrowserTabTitle: FC<Props> = ({ title }) => {
  useEffect(() => {
    document.title = title || "Tab Title"
  }, [title])

  return null
}
