import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Header } from "./features/header/Header"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"

const App = () => {


  return (
    <div className="App">
      <div className='main'></div>
      <Header />
    </div>
  )
}

export default App
