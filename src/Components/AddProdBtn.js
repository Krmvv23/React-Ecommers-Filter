import React from 'react'

const AddProdBtn = ({addModal}) => {
    return (
        <div className='position-relative'>
            <button className='add-prod-btn' onClick={addModal}>
                <i className="plus icon"></i>
            </button>
        </div>
    )
}

export default AddProdBtn