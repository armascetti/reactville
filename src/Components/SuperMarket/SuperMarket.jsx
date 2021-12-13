import React from 'react'
import { useState } from 'react'
import '../../styles/super-market.css'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'
import Cart from './Cart'


// Components & Data
import { products } from '../../data/market-data'

const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Produce')
console.log("Product CATEGORY HERE", productCategory)
  console.log(products)
  return (
    <div className="super-market">
      <section>
        <MarketNav />
        <DisplayProducts products={products} productCategory={productCategory}/>
      </section>

      Cart component here

    </div>
  )
}

export default SuperMarket