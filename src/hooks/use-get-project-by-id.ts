import { useMemo } from "react"
import { portfolio } from "../db"

export const useGetProjectById = (id: number) => {
  const project = useMemo(
    () => portfolio.find(item => item.id === id) || null,
    [id, portfolio],
  )

  return { project }
}
