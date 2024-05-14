import "./App.css"
import { Education } from "./components/education/Education"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { MyServices } from "./components/my-services/MyServices"
import { Navigation } from "./components/navigation/Navigation"
import { Portfolio } from "./components/portfolio/Portfolio"
import { Recommendations } from "./components/recommendations/Recommendations"
import { Sidebar } from "./components/sidebar/Sidebar"
import { WorkHistory } from "./components/work-history/WorkHistory"
import { ThemeProvider } from "./providers/ThemeProvider"
import "./variables.css"
import "react-multi-carousel/lib/styles.css"

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="app-container">
          <Sidebar />
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
    </ThemeProvider>
  )
}

export default App
