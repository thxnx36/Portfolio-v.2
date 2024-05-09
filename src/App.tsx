import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Education } from "./features/education/Education"
import { Header } from "./features/header/Header"
import { MyServices } from "./features/my-services/MyServices"
import { Quotes } from "./features/quotes/Quotes"
import "./variables.css"

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <main>
          <MyServices />
          <Education />
        </main>
      </div>
    </div>
  )
}

export default App
