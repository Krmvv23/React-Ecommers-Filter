import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SideBar from './Components/SideBar'
import Body from './Components/Body'
import Cart from './Components/Cart'
import AddModal from './Components/AddModal'


const App = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState([])
  const [category, setcategory] = useState(['all'])
  const [prodPrice, setProdPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)
  const [cartList, setCartList] = useState([])
  const [total, setTotal] = useState(0)
  const [modalOn, setModalOn] = useState(false)

  useEffect(async () => {
    await axios.get('http://localhost:5000/products').then(prod => {
      setProducts(prod.data)
      var a = prod.data.map(item => { return Number(item.price) })
      setMaxPrice(Math.max(...a))
    })
    await axios.get('http://localhost:5000/cart').
      then(data => {
        setCartList(data.data)
        totalMoney(data.data)
      })
  }, [])

  const totalMoney = (arr) => {

    const num = arr.map(cart => cart.price)
    const totalNum = num.reduce((previousValue, currentValue) => Number(previousValue) + Number(currentValue), 0)
    return setTotal(totalNum)

  }

  const postCart = async (item) => {
    const res = await fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...item })
    })
    const data = await res.json()
    setCartList(cartList => [...cartList, data])
    totalMoney([...cartList, data])

  }

  const putCart = async (item, id) => {
    await fetch(`http://localhost:5000/cart/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ ...item })
    })

  }

  const deleteCart = async (id) => {
    await fetch(`http://localhost:5000/cart/${id}`, { method: "DELETE" })
  }

  const alertEl = (text) => {
    var alertEl = document.querySelector('.alertEl')
    alertEl.style.opacity = '1'
    alertEl.innerHTML = `<h4>${text}</h4>`
    setTimeout(() => {
      alertEl.style.opacity = '0'
    }, 3000);
  }

  const searchInp = e => {
    setSearch([e.target.value])
  }

  const selectCategory = e => {
    setcategory(e.target.id)
  }

  const selectPrice = (e) => {
    setProdPrice(e.target.value)
  }

  const addCart = e => {
    var id = e.target.id
    var hasEl = cartList.filter(item => {
      return item.id == id
    })

    hasEl != 0 ? alertEl('You Cart Has This Product') :
      postCart(products[id - 1])
  }

  const pulsCartItem = e => {
    var newArr = [...cartList]
    var tabIndex = e.target.tabIndex
    var targetId = e.target.id

    newArr[tabIndex].price += Number(products[targetId - 1].price)
    const a = newArr.filter(arr => {
      return arr.id == targetId
    })
    putCart(...a, targetId)
    setCartList(newArr)
    totalMoney(newArr)
  }

  const minusCartItem = e => {
    var newArr = [...cartList]
    var tabIndex = e.target.tabIndex
    var targetId = e.target.id
    newArr[tabIndex].price == products[targetId - 1].price ?
      newArr[tabIndex].price = newArr[tabIndex].price
      : newArr[tabIndex].price -= Number(products[targetId - 1].price);
    const a = newArr.filter(arr => {
      return arr.id == targetId
    })
    putCart(...a, targetId)
    setCartList(newArr)
    totalMoney(newArr)
  }

  const delCartItem = (e) => {
    var cart = cartList.filter(item => item.id != Number(e.target.id))
    deleteCart(e.target.id)
    setCartList(cart)
    totalMoney(cart)
  }

  const clearFilter = () => {
    setSearch('')
    setcategory('all')
    setProdPrice(0)
  }

  const addModal = (bool) => {
    setModalOn(bool)
  }

  const addNewProd = async (prod) => {
    await axios.post('http://localhost:5000/products', prod)
    setProducts(products => [...products, prod])
  }

  return (
    <div className='h-100 container'>
      <Cart  addModal={addModal} total={total} cartList={cartList} pulsCartItem={pulsCartItem} minusCartItem={minusCartItem} delCartItem={delCartItem} />
      <div className='row pt-5'>
        <div className='col col-md-3'>
          <SideBar clearFilter={clearFilter} selectCategory={selectCategory} maxPrice={maxPrice} selectPrice={selectPrice} />
        </div>
        <div className='col col-md-9'>
          <Body addCart={addCart} searchInp={searchInp} prod={products} search={search} category={category} prodPrice={prodPrice} />
        </div>
      </div>
      {
        modalOn ?
          <AddModal products={products} addModal={addModal} addNewProd={addNewProd} /> : ''
      }
    </div>
  )
}

export default App