import {React} from 'react'

const Products = ({ title, price, model, addCart ,id}) => {
  return (
    <div className='cols'>
    { <div className='product m-3'>
      <div className="ui card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="description">
            <p>{model}</p>
          </div>
        </div>
        <div className="extra content prod-footer">
          <span className="right floated like">
            <i className="cart icon"   id={id} onClick={addCart}></i>
          </span>
          <span className="left floated like">
            {price+"$"}
          </span>
        </div>
      </div> 
    </div>}
    </div>
  )
}

export default Products