import React from 'react'

const ClearFilter = ({clearFilter}) => {
  return (
    <div>
        <button onClick={clearFilter} className='btn clearFilter mt-4 btn-outline-dark'>Clear Filter</button>
    </div>
  )
}

export default ClearFilter