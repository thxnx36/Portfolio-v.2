import { NotFound } from '../../components/not-found/NotFound'
import { Section } from '../../shared'

const NotFoundPage = () => {
  return (
    <Section animated={false}>
      <NotFound />
    </Section>
  )
}

export default NotFoundPage