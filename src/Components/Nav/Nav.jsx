import React from 'react'
import { Link } from 'react-router-dom'


// Components & Assets
import Logo from '../../assets/react-logo.png'
import Wallet from './Wallet'

const Nav = (props) => {
  console.log(Logo)
  return (
    <nav className="navigation-bar">
      <Link to="/"><img src={Logo} /></Link>
      <Link to="/burgers"> BURGER SHOP</Link>
      <Link to="/market"> SUPER MARKET</Link>
      <Wallet cash={props.cash} />
    </nav>
  )
}

export default Nav