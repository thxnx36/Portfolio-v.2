import { useTranslation } from 'react-i18next'
import {
  Header,
  MyServices,
  Portfolio,
  Recommendations,
  WorkHistory,
  Education,
  Footer,
  UserChat,
  Navigation,
} from 'src/components'
import { SEO } from 'src/shared'

export const MainPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navigation />
      <Header />
      <main>
        <MyServices />
        <Portfolio />
        <Recommendations />
        <WorkHistory />
        <Education />
      </main>
      <Footer />
      <SEO tabTitle={t('pages.mainPage.seo.TITLE')} />
      <UserChat />
    </>
  )
}
