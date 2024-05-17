import { Button, Section, Title } from "../../shared"
import { TbError404 } from "react-icons/tb"
import { COLOR_YELLOW } from "../../constans"
import { useNavigate } from "react-router-dom"
import styles from "./NotFound.module.css"
import { useCallback } from "react"
import { text } from "../../localization"

export const NotFound = () => {
  const navigate = useNavigate()

  const handleBack = useCallback(() => navigate(-1), [navigate])

  return (
    <Section>
      <div className={styles.notFoundContainer}>
        <TbError404 color={COLOR_YELLOW} size={"5em"} />
        <Title type="h1">{text.pages.notFound.NOT_FOUND}</Title>
        <Title size="sm" type="h4">
          {text.pages.notFound.RETURN_HOME}
        </Title>
        <Button onClick={handleBack} text={text.button.GO_BACK} />
      </div>
    </Section>
  )
}
