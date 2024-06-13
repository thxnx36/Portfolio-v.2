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
import { APP_URL } from 'src/constants'
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
      <SEO
        tabTitle={t('pages.mainPage.seo.TITLE')}
        metaDescriptionContent='Discover more about my skills, projects, and work experience'
        metaOgTitleContent='The best Front-end Developer in the world'
        metaOgDescriptionContent='Portfolio of a Front-end Developer'
        metaOgURLContent={APP_URL}
        metaOgImageContent=''
      />
      <UserChat />
    </>
  )
}
