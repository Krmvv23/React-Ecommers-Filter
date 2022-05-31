import React from 'react'
import Category from './Category'
import ClearFilter from './ClearFilter'
import Price from './Price'
// import Search from './Search'

const SideBar = ({ selectCategory, selectPrice, maxPrice, clearFilter}) => {
  return (
    <div className='sideBar'>
        <Category selectCategory={selectCategory}/>
        <Price maxPrice={maxPrice} selectPrice={selectPrice} />
        <ClearFilter clearFilter={clearFilter} />
    </div>
  )
}

export default SideBar