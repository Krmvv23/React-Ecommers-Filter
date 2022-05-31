import React from 'react'
import AddProdBtn from './AddProdBtn'
import CartBtn from './CartBtn'
import PayBtn from './PayBtn'

const Cart = ({ addModal, cartList, pulsCartItem, minusCartItem, delCartItem, total }) => {
    const openCart = () => {
        document.querySelector('.cart-body').classList.toggle('trnsfrm')
        document.querySelector('.cart-btn .icon').classList.toggle('close')
    }
    const cartItem = cartList.map((item, index, cartlist) => {
        return (
            <div key={item.id} className=' mt-3 bg-light rounded d-flex justify-content- px-4 py-4 border'>
                <div className='d-flex justify-content-between align-items-center w-100 pr-3'>
                    <div>
                        <h2 className='mb-2'>{item.title}</h2>
                        <h4 className='m-0'>{item.model}</h4>
                    </div>
                    <div className='font-weight-bolder h5'>
                        {item.price}$
                    </div>
                </div>
                <div className='d-flex flex-column align-items-center cart-item-btns'>
                    <button id={item.id} tabIndex={index} className='h4 mb-0' onClick={pulsCartItem}>+</button>
                    <i id={item.id} tabIndex={index} className='trash icon mx-0 px-0 my-2' onClick={delCartItem}></i>
                    <button id={item.id} tabIndex={index} className='h4 mb-0 ' onClick={minusCartItem}>-</button>
                </div>

            </div>
        )
    })
    return (
        <div className='cart'>
            <div className='d-flex justify-content-end'>
                <CartBtn openCart={openCart} cartList={cartList} />
                <AddProdBtn addModal={addModal} />
            </div>

            <div className='cart-body p-5'>
                <div className='w-100 d-flex flex-column align-items-center position-relative'>
                    <h1 className='text-dark mb-5'>Cart</h1>
                    <div className='w-50'>
                        {cartItem}
                    </div>
                    <PayBtn total={total} />
                </div>
            </div>

        </div>
    )
}

export default Cart