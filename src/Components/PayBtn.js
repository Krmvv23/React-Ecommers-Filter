import React from 'react'

const PayBtn = ({ total }) => {
    return (
        <div className='pay-btn w-100 d-flex flex-column align-items-end'>
            <div className='d-flex flex-column bg-light rounded'>
                <span className='text-center'>Total: {total}$</span>
                <button className='btn btn-outline-dark border-0 pay'>Buy</button>
            </div>
        </div>
    )
}

export default PayBtn