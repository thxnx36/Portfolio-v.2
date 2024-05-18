import { Education } from '../../components/education/Education'
import { Footer } from '../../components/footer/Footer'
import { Header } from '../../components/header/Header'
import { MyServices } from '../../components/my-services/MyServices'
import { Navigation } from '../../components/navigation/Navigation'
import { Portfolio } from '../../components/portfolio/Portfolio'
import { Recommendations } from '../../components/recommendations/Recommendations'
import { WorkHistory } from '../../components/work-history/WorkHistory'

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
    </>
  )
}
