import React from 'react'
import ProductList from './ProductList'
const Body = ({prod, search, category, searchInp, prodPrice, addCart}) => {
  return (
    <div className='prod-body'>
      <ProductList addCart={addCart}  searchInp={searchInp} prod={prod} search={search} category={category} prodPrice={prodPrice}/>

    </div>
  )
}

export default Body