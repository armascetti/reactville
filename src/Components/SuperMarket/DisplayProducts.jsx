import React from 'react'
import Product from './Product'

const DisplayProducts = (props) => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => {
        if (product.category === props.productCategory)
          return (
            <Product
              key={index}
              product={product}
              addToCart={props.addToCart}
            />
          )
      })}
    </div>
  )
}

export default DisplayProducts
