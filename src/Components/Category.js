import React from 'react'

const Category = ({ selectCategory }) => {
  return (
    <div className='category'>
      <h3>Category</h3>
      <ul>
        <li><button id='all' onClick={selectCategory}>All</button></li>
        <li><button id='electronic' onClick={selectCategory}>Electronic</button></li>
        <li><button id='men' onClick={selectCategory}>Men</button></li>
        <li><button id='women' onClick={selectCategory}>Women</button></li>
      </ul>
    </div>
  )
}

export default Category