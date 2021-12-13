import React from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from './Components/SuperMarket/SuperMarket'

// Components
import Landing from './Components/Landing/Landing'

const App = () => {

  // const [cash, setCash] = useState(100)

  // const handleExchange = (amt)=> {

  // }

  return ( 
      <>
    <main>
      <Nav />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path="/burgers" element={<BurgerShop />} />
      <Route path="/market" element={<SuperMarket />} />
      <Route 
      index element= {
        <Landing />
      } />
    </Routes>
    </main>
    </>
  )
}

export default App