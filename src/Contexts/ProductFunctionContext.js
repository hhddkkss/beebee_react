import { createContext, useState } from 'react'
import axios from 'axios'
import { HOST } from '../component/LoginApi'

const ProductFunctionContext = createContext({})
export default ProductFunctionContext

export const ProductFunctionContextProvider = function ({ children }) {
  //拿到produtct
  const getProductData = async () => {
    const dev = 'http://localhost:3003'
    const res = await axios.get(dev + '/products/pd_api')
    const initialData = res.data.map((v, i) => {
      return { ...v, isLiked: false, isCompared: false }
    })
    console.log(initialData)
    setProducts(initialData)
  }

  //開關
  const [toggleCartButton, setToggleCartButton] = useState(false)

  const [products, setProducts] = useState([])

  //寫入購物車
  const addToCartTable = async () => {
    const dev = 'http://localhost:3003/cart'
    const aaron = 'http://localhost:3030/cart'

    await axios
      .post(dev, {
        member_id: 1,
        product_id: JSON.parse(localStorage.getItem('cartItem')).map(
          (v) => v.product_id
        ),
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
  }
  //購物車

  let initCart = []
  try {
    initCart = JSON.parse(localStorage.getItem('cartItem')) || []
  } catch (ex) {}

  const [cartItem, setCartItem] = useState(initCart)

  const myCartItem = cartItem || []
  const cartItemPId = myCartItem.map((v) => v.product_id)

  //比較列表
  let initComparedList = []
  try {
    initComparedList = JSON.parse(localStorage.getItem('comparedList')) || []
  } catch (ex) {}
  const [comparedList, setComparedList] = useState(initComparedList)
  //收藏
  let initFavorites = []

  try {
    initFavorites = JSON.parse(localStorage.getItem('favorites')) || []
  } catch (ex) {}
  const [favorites, setFavorite] = useState(initFavorites)

  //加入收藏(外觀)
  const toggleLiked = (arr, product_id) => {
    return arr.map((v, i) => {
      if (product_id === v.product_id) return { ...v, isLiked: !v.isLiked }
      else {
        return { ...v }
      }
    })
  }

  //加入比較清單(外觀)
  const toggleCompared = (arr, product_id) => {
    return arr.map((v) => {
      if (product_id === v.product_id)
        return { ...v, isCompared: !v.isCompared }
      else {
        return { ...v }
      }
    })
  }

  //加入購物車
  const handleAddOrDeleteCart = (product_id, count) => {
    //判斷購物車內有沒有這個商品
    const inCart = cartItem.find((v) => v.product_id === product_id)

    //有的話
    if (inCart) {
      const newCart = cartItem.filter((v) => v.product_id !== product_id)

      setCartItem(newCart)
      //轉成字串寫進localStorage
      localStorage.setItem('cartItem', JSON.stringify(newCart))
    }

    //沒有的話
    else {
      const newCart = [...cartItem, { product_id: product_id, count: count }]
      setCartItem(newCart)
      //轉成字串寫進localStorage
      localStorage.setItem('cartItem', JSON.stringify(newCart))
    }
  }

  //加入比較清單
  const handleAddOrDeleteCompared = (product_id) => {
    const isOnComparedList = comparedList.includes(product_id)

    if (isOnComparedList) {
      const newComparedList = [...comparedList].filter((v) => {
        return v !== product_id
      })
      setComparedList(newComparedList)
      localStorage.setItem('comparedList', JSON.stringify(newComparedList))
    } else {
      //不須限制只能三項進比較總表
      // if (comparedList.length < 3) {
      //   const newComparedList = [...comparedList, product_id]
      //   setComparedList(newComparedList)
      //   localStorage.setItem('comparedList', JSON.stringify(newComparedList))
      // } else {
      //   comparedList.length = 4
      // }

      const newComparedList = [...comparedList, product_id]
      console.log('plus')
      setComparedList(newComparedList)
      localStorage.setItem('comparedList', JSON.stringify(newComparedList))
    }
  }
  //收藏商品
  const handleAddOrDeleteFavorite = (product_id) => {
    const hasFavorite = favorites.includes(product_id)

    if (hasFavorite) {
      const newFavorites = [...favorites].filter((v) => v !== product_id)
      setFavorite(newFavorites)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    } else {
      const newFavorites = [...favorites, product_id]
      setFavorite(newFavorites)
      localStorage.setItem('favorites', JSON.stringify(newFavorites))
    }
  }

  return (
    <ProductFunctionContext.Provider
      value={{
        cartItem,
        setCartItem,
        comparedList,
        setComparedList,
        favorites,
        setFavorite,
        toggleLiked,
        toggleCompared,
        handleAddOrDeleteCart,
        handleAddOrDeleteCompared,
        handleAddOrDeleteFavorite,
        toggleCartButton,
        setToggleCartButton,
        products,
        setProducts,
        addToCartTable,
        cartItemPId,
        getProductData,
      }}
    >
      {children}
    </ProductFunctionContext.Provider>
  )
}
