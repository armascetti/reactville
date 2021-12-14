import React from 'react'
import { useState } from 'react'
import './styles/App.css'
import { Route, Routes } from 'react-router-dom'

// Components
import Landing from './Components/Landing/Landing'
import BurgerShop from './Components/BurgerShop/BurgerShop'
import Nav from './Components/Nav/Nav'
import SuperMarket from './Components/SuperMarket/SuperMarket'

const App = () => {

  const [cash, setCash] = useState(100)

  const handleExchange = (amt) => {
    if (cash - amt < 0) return false
    setCash((cash - amt).toFixed(2))
    return true
  }

  return (
    <main>
      <Nav cash={cash} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/burgers" element={<BurgerShop />} />
        <Route path="/market" element={<SuperMarket handleExchange={handleExchange} />} />
        <Route
          index element={
            <Landing />
          } />
      </Routes>
    </main>
  )
}

export default App