import {
  Education,
  Footer,
  Header,
  MyServices,
  Navigation,
  Portfolio,
  Recommendations,
  WorkHistory,
  LiveChat,
} from '../components'
import { useTranslation } from 'react-i18next'
import { APP_URL } from '../constans'
import { SEO } from '../shared'

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
        metaDescriptionContent={t('pages.mainPage.seo.DISCOVER_MORE')}
        metaOgTitleContent={t('pages.mainPage.seo.THE_BEST')}
        metaOgDescriptionContent={t('pages.mainPage.seo.PORTFOLIO_OF')}
        metaOgURLContent={APP_URL}
        metaOgImageContent=''
      />
      <LiveChat />
    </>
  )
}
