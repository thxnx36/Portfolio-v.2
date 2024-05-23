import { useContext } from 'react'
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
import { DataContext } from '../providers'

export const MainPage = () => {
  const { data } = useContext(DataContext)

  return (
    <>
      <Navigation />
      <Header />
      <main>
        <MyServices />
        <Portfolio data={data} />
        <Recommendations data={data} />
        <WorkHistory data={data} />
        <Education data={data} />
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
