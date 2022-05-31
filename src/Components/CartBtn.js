import React from 'react'

const CartBtn = ({ openCart, cartList }) => {
    const num = cartList.length
    return (
        <div className='position-relative mx-3'>
            <button className='cart-btn' onClick={openCart}>
                <i className="cart icon"></i>
            </button>
            <span className="cartBtnBadge position-absolute text-dark px-2 py-1 top-0 right-0 start-100 translate-middle badge rounded-pill ">
                {num}
            </span>
        </div>
    )
}

export default CartBtn