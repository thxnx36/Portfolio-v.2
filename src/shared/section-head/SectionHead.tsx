import type { FC } from 'react'
import { Title } from '../title/Title'
import { Paragraph } from '../paragraph'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  subTitle: string
  isLink?: boolean
  to?: string
  linkText?: string
}

export const SectionHead: FC<Props> = ({
  title,
  subTitle,
  isLink,
  to,
  linkText,
}) => {
  return (
    <>
      <Title tag='h2' style={{ textAlign: 'center' }}>
        {title}
      </Title>
      <Paragraph>
        {subTitle}{' '}
        {isLink && to && (
          <Link style={{ textDecoration: 'underline' }} to={to}>
            {linkText}
          </Link>
        )}
      </Paragraph>
    </>
  )
}
