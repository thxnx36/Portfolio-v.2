import { Education } from '../components/education/Education'
import { Footer } from '../components/footer/Footer'
import { Header } from '../components/header/Header'
import { MyServices } from '../components/my-services/MyServices'
import { Navigation } from '../components/navigation/Navigation'
import { Portfolio } from '../components/portfolio/Portfolio'
import { Recommendations } from '../components/recommendations/Recommendations'
import { WorkHistory } from '../components/work-history/WorkHistory'
import { APP_URL } from '../constans'
import { text } from '../localization'
import { SEO } from '../shared'

export const MainPage = () => {
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
        tabTitle={text.pages.mainPage.seo.TITLE}
        metaDescriptionContent={text.pages.mainPage.seo.DISCOVER_MORE}
        metaOgTitleContent={text.pages.mainPage.seo.THE_BEST}
        metaOgDescriptionContent={text.pages.mainPage.seo.PORTFOLIO_OF}
        metaOgURLContent={APP_URL}
        metaOgImageContent=''
      />
    </>
  )
}
