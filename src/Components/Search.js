import { React, useState } from 'react'

const Search = ({searchInp}) => {
    
    return (
        <div>
            <div className="ui input focus w-100 m-0">
                <input  type="text" className='w-100 search-inp' placeholder="Search..." onKeyUp={searchInp} />
            </div>
        </div>
    )

    
}

export default Search