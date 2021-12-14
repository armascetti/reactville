import React from 'react'

const CategoryMenu = (props) => {

  const categoriesArr = [...new Set(props.products.map(
    (product) => product.category
  ))]

  return (
    <select onChange={(e) => props.setProductCategory(e.target.value)}>
      {categoriesArr.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}
export default CategoryMenu


