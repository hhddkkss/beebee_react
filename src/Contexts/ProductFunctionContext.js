import { createContext, useState, useContext } from 'react'
import axios from 'axios'
import { HOST, GET_CART_ITEM_API, FAVORITES } from '../component/LoginApi'
import AuthContext from './AuthContext'

const ProductFunctionContext = createContext({})
export default ProductFunctionContext

export const ProductFunctionContextProvider = function ({ children }) {
  const { memberAuth } = useContext(AuthContext)

  //拿到produtct

  const getProductData = async () => {
    const res = await axios.get(HOST + '/products/pd_api')
    const initialData = res.data.map((v, i) => {
      return { ...v, isLiked: false, isCompared: false }
    })
    // console.log(initialData)
    setProducts(initialData)
  }

  const getFavoritesData = async (member_id) => {
    const res = await axios.get(HOST + '/favorites/' + member_id)

    setProducts(res.data)
  }
  //donepage用 後端傳回來的檔案
  const [donepageData, setDonepageData] = useState({})

  // forRemoveInfo
  const [showRemove, setShowRemove] = useState(false)

  //cart item pid
  const [cartPId, setCartPId] = useState([])

  const [pageNow, setPageNow] = useState(1) //預設第一頁
  const [perPage, setPerPage] = useState(25) // 一頁25個
  const [pageTotal, setPageTotal] = useState(0) // 預設總筆數是0
  //開關
  const [toggleCartButton, setToggleCartButton] = useState(false)

  const [products, setProducts] = useState([])

  //寫入資料庫購物車
  const addToCartTable = async () => {
    const dev = 'http://localhost:3003/cart'
    const aaron = 'http://localhost:3030/cart'

    await axios
      .post(dev, {
        member_id: memberAuth.memberId,
        product_id:
          localStorage.getItem('cartItem') &&
          JSON.parse(localStorage.getItem('cartItem')).map((v) => v.product_id),
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e.error))
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

  // //收藏
  // let initFavorites = []

  // try {
  //   initFavorites = JSON.parse(localStorage.getItem('favorites')) || []
  // } catch (ex) {}
  const [favorites, setFavorite] = useState([])

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

  const handleAddOrDeleteCart = (product_id) => {
    //判斷購物車內有沒有這個商品
    const inCart = cartItem.find((v) => v.product_id === product_id)

    //有的話
    if (inCart) {
      // const newCart = cartItem.filter((v) => v.product_id !== product_id)
      // setCartItem(newCart)
      // //轉成字串寫進localStorage
      // localStorage.setItem('cartItem', JSON.stringify(newCart))
    }

    //沒有的話 寫進localStorage
    else {
      const newCart = [...cartItem, { product_id: product_id, count: 1 }]
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

  const [reGetFavorites, setReGetFavorites] = useState(false) //改變就重新拿最愛清單
  const [favoritePId, setFavoritePId] = useState([])

  const getFavorites = async (member_id) => {
    const res = await axios.get(`${FAVORITES}/${member_id}`)
    console.log(res.data, '收藏')
    await setFavorite(res.data)
    await setFavoritePId(res.data.map((v) => v.product_id))
  }

  const handleAddOrDeleteFavorite = async (member_id, product_id) => {
    const favoritesData = favorites.map((v) => v.product_id)

    if (favoritesData.includes(product_id)) {
      console.log(111, '有加入收藏')
      await axios.delete(FAVORITES, {
        data: { member_id: member_id, product_id: product_id },
      })
      setReGetFavorites(!reGetFavorites)
    } else {
      console.log(999, '沒加入收藏')
      await axios.post(FAVORITES, {
        member_id: member_id,
        product_id: product_id,
      })
      setReGetFavorites(!reGetFavorites)
    }
  }

  // const handleAddOrDeleteFavorite = (product_id) => {
  //   const hasFavorite = favorites.includes(product_id)

  //   if (hasFavorite) {
  //     const newFavorites = [...favorites].filter((v) => v !== product_id)
  //     setFavorite(newFavorites)
  //     localStorage.setItem('favorites', JSON.stringify(newFavorites))
  //   } else {
  //     const newFavorites = [...favorites, product_id]
  //     setFavorite(newFavorites)
  //     localStorage.setItem('favorites', JSON.stringify(newFavorites))
  //   }
  // }

  //購物車拿資料
  const [cartData, setCartData] = useState([])
  //購物車幾樣商品
  const [cartTotalRows, setCarTotalRows] = useState(0)

  //算出總價
  const totalPrice = cartData
    .map((v) => (v.product_price - 1000) * v.quantity)
    .reduce((a, c) => a + c, 0)
  //拿到某會員的購物車 getCartData

  const getCartData = async () => {
    const member_id =
      localStorage.getItem('beebeeMemberAuth') &&
      JSON.parse(memberAuth.memberId)

    // console.log(member_id)

    //data :{rows,totalRows}
    const res = await axios
      .get(`${GET_CART_ITEM_API}/${member_id}`)
      .then((r) => {
        setCartData(r.data.rows) //拉資料庫購物車 新增進狀態中
        const itemData = r.data.rows.map((v) => v.product_id) //拉到的資料變成為儲存 product_id 的陣列
        setCartPId(itemData)
        setCarTotalRows(cartPId.length)
      })
      .catch((e) => console.log(e))
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
        toggleCartButton,
        setToggleCartButton,
        products,
        setProducts,
        addToCartTable,
        getProductData,
        cartItemPId,
        pageNow,
        setPageNow,
        perPage,
        setPerPage,
        pageTotal,
        setPageTotal,
        getCartData,
        cartData,
        setCartData,
        cartTotalRows,
        showRemove,
        setShowRemove,
        totalPrice,
        cartPId,
        getFavorites,
        handleAddOrDeleteFavorite,
        reGetFavorites,
        favoritePId,
        donepageData,
        setDonepageData,
      }}
    >
      {children}
    </ProductFunctionContext.Provider>
  )
}
