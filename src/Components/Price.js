import { React, useState } from 'react'

const Price = ({ selectPrice, maxPrice }) => {
    const [val, setVal] = useState(maxPrice)
    const onInp = e => {
        setVal(e.target.value)
        selectPrice(e)
    }
    return (
        <div className='mt-4'>
            <div>
                <h3>Price</h3>
                <div className='d-flex flex-column w-50'>
                    <input type="range" className="form-range bg-danger" min={0} max={maxPrice} value={val} step="10" onInput={onInp} />
                    <label htmlFor="customRange3" className="form-label">{val + '$'}</label>
                </div>
            </div>

        </div>
    )
}

export default Price

