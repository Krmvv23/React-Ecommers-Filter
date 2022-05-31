import Products from './Products'
import Search from './Search'
import { React } from 'react'

const ProductList = ({ prod, search, category, searchInp, prodPrice, addCart}) => {
  
  const filterProd = prod.filter(item => {
    return category == 'all' ? item : item.category.toLowerCase() == category
  }).filter(item=>{
    return prodPrice != 0 ? Number(item.price) <= prodPrice : item
  }).filter(item => {
    return item.title.toLowerCase().match(search) || item.model.toLowerCase().match(search)
  }).sort((a,b)=>a.price-b.price).map(item => {
    return <Products addCart={addCart} id={item.id} key={item.id} title={item.title} price={item.price} category={item.category} model={item.model} />
  })
  return (
    <div>
      <Search searchInp={searchInp} search={search} />
      <div className='row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 '>
        {
          filterProd
        }
      </div>
    </div>
  )

}

export default ProductList