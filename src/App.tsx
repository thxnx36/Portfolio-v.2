import "./App.css"
import { Education } from "./features/education/Education"
import { Footer } from "./features/footer/Footer"
import { Header } from "./features/header/Header"
import { MyServices } from "./features/my-services/MyServices"
import { Navigation } from "./features/navigation/Navigation"
import { Portfolio } from "./features/portfolio/Portfolio"
import { Recommendations } from "./features/recommendations/Recommendations"
import { WorkHistory } from "./features/work-history/WorkHistory"
import "./variables.css"
import "react-multi-carousel/lib/styles.css"

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
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
      </div>
    </div>
  )
}

export default App
