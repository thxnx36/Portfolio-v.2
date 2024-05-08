import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Header } from "./features/header/Header"
import { Quotes } from "./features/quotes/Quotes"
import "./variables.css"

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
      </div>
    </div>
  )
}

export default App
