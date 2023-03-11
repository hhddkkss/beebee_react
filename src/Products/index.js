import { React, useEffect, useState, useRef } from 'react'
import _ from 'lodash'
import axios from 'axios'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination'
import Carousel from './Carousel'
import ProductAndBrand from './ProductAndBrand'
import TitleAndPath from './TitleAndPath'
import FunctionalBar from './FunctionalBar'
import ProductArea from './ProductArea'
import CompareListButton from './CompareListButton'
import M_productAndBrand from './M_productAndBrand'
import '../styles/m-navbar.css'
import '../styles/products.css'
function Products() {
  
  //輪播牆
  const carouselRef = useRef(null)
  const [movement, setMoveMent] = useState(0)
  //開關
  const [toggleSortList, setToggleSortList] = useState(false)
  const [toggleCartButton, setToggleCartButton] = useState(false)

  //收藏
  let initFavorites = []

  try {
    initFavorites = JSON.parse(localStorage.getItem('favorites')) || []
  } catch (ex) {}
  const [favorites, setFavorite] = useState(initFavorites)
  //加入購物車
  let initCart = []
  try {
    initCart = JSON.parse(localStorage.getItem('cartItem')) || []
  } catch (ex) {}

  const [cartItem, setCartItem] = useState(initCart)

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
  //產品
  const [products, setProducts] = useState([])
  //品牌
  const [brand, setBrand] = useState('')
  //排序
  const [sortList, setSortList] = useState('上架時間:最新(預設)')
  //搜尋
  const [keyword, setKeyword] = useState('')
  const [inputText, setInputText] = useState('')
  //產品分類
  const [productType, setProductType] = useState(4)
  //比較列表
  let initComparedList = []

  try {
    initComparedList = JSON.parse(localStorage.getItem('comparedList')) || []
  } catch (ex) {}
  const [comparedList, setComparedList] = useState(initComparedList)
  //分頁用
  const [pageNow, setPageNow] = useState(1) //預設第一頁
  const [perPage, setPerPage] = useState(25) // 一頁25個
  const [pageTotal, setPageTotal] = useState(0) // 預設總筆數是0

  //卡片樣式切換
  const [cardType, setCardType] = useState(1)

  //呈現用的資料

  const [productsDisplay, setProductsDisplay] = useState([])

  //警告視窗
  const warningRef = useRef()

  const carouselMove = () => {
    setTimeout(() => {
      setMoveMent(movement + 1)

      if (movement === 3) {
        setMoveMent(1)
      }
    }, 3500)

    carouselRef.current.style.transform = `translateX(${-movement * 100}vw)`
  }

  const sortOption = ['上架時間:最新(預設)', '價格:由高到低', '價格:由低至高']

  const productNumToText = () => {
    if (productType === 1) return '手機'
    if (productType === 2) return '平板'
    if (productType === 3) return '耳機'
    if (productType === 4) return '全部商品'
  }

  const getProductData = async () => {
    const dev = 'http://localhost:3003'
    const aaron = 'http://localhost:3030'
    const res = await axios.get(aaron + '/products/pd_api')
    const initialData = res.data.map((v, i) => {
      return { ...v, isLiked: false, isCompared: false }
    })
    console.log(initialData)
    setProducts(initialData)
  }
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

  //搜尋
  const filterByKeyword = (arr, keyword) => {
    return arr.filter((v, i) =>
      v.product_name
        .split('')
        .filter((v) => !v.includes(' '))
        .join('')
        .toLowerCase()
        .includes(keyword.toLowerCase().trim())
    )
  }

  //篩選

  const filterByPrice = (arr, sortList) => {
    switch (sortList) {
      case '價格:由高到低':
        return [...arr].sort((a, b) => b.product_price - a.product_price)
      case '價格:由低至高':
        return [...arr].sort((a, b) => a.product_price - b.product_price)
      default:
        return [...arr].sort((a, b) => a.product_id - b.product_id)
    }
  }

  //商品分類
  const filterProductType = (arr, productType) => {
    switch (productType) {
      case 1:
        return arr.filter((v) => v.product_category_id === productType)
      case 2:
        return arr.filter((v) => v.product_category_id === productType)
      case 3:
        return arr.filter((v) => v.product_category_id === productType)
      default:
        return arr.map((v) => v)
    }
  }
  //品牌分類

  const otherBrand = [5, 8, 1, 9, 2, 10, 7]
  const filterBrandType = (arr, brand) => {
    switch (brand) {
      case '全部品牌':
        return arr.map((v) => v)
      case 'Apple':
        return arr.filter((v) => v.brand_category_id === 5)
      case 'Samsung':
        return arr.filter((v) => v.brand_category_id === 8)
      case 'Asus':
        return arr.filter((v) => v.brand_category_id === 1)
      case 'Oppo':
        return arr.filter((v) => v.brand_category_id === 9)
      case '小米':
        return arr.filter((v) => v.brand_category_id === 2)
      case 'Sony':
        return arr.filter((v) => v.brand_category_id === 10)
      case 'Realme':
        return arr.filter((v) => v.brand_category_id === 7)
      case '其他品牌':
        return arr.filter((v) => !otherBrand.includes(v.brand_category_id))

      default:
        return arr.map((v) => v)
    }
  }

  //收藏商品
  const handleAddOrDeleteFavorite = (product_id) => {
    const hasFavorite = favorites && favorites.includes(product_id)

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

  //加入購物車
  const handleAddOrDeleteCart = (product_id, count) => {
    //判斷購物車內有沒有這個商品
    console.log('1', cartItem)
    const inCart = cartItem && cartItem.find((v) => v.product_id === product_id)

    //有的話
    if (inCart) {
      /*
      const newCart = cartItem.filter((v) => v.product_id !== product_id)

      setCartItem(newCart)
      //轉成字串寫進localStorage
      localStorage.setItem('cartItem', JSON.stringify(newCart))
      */
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
    const isOnComparedList = comparedList && comparedList.includes(product_id)

    if (isOnComparedList) {
      const newComparedList = [...comparedList].filter((v) => {
        return v !== product_id
      })
      setComparedList(newComparedList)
      localStorage.setItem('comparedList', JSON.stringify(newComparedList))
    } else {
      const newComparedList = [...comparedList, product_id]
      setComparedList(newComparedList)
      localStorage.setItem('comparedList', JSON.stringify(newComparedList))
    }
  }

  //分頁用
  const handleChangePageNow = (e, p) => {
    setPageNow(p)
  }

  useEffect(() => {
    getProductData()
  }, [])

  useEffect(() => {
    setBrand('全部品牌')
  }, [productType])

  useEffect(() => {
    carouselMove()
  }, [movement])

  useEffect(() => {
    //* 如果要根據篩選的東西重新搜尋 就把註解的打開 或是搜尋選取到的
    // setProductType(4)
    // setBrand('全部品牌')
    getProductData()
    setPageNow(1)
  }, [keyword])

  useEffect(() => {
    setKeyword('')
  }, [brand])

  useEffect(() => {
    //搜尋
    let newProducts = filterByKeyword(products, keyword)
    // 價格篩選
    newProducts = filterByPrice(newProducts, sortList)
    //商品類別
    newProducts = filterProductType(newProducts, productType)

    //商品品牌
    newProducts = filterBrandType(newProducts, brand)

    //拆分頁
    const pageArray = _.chunk(newProducts, perPage)
    //如果有拿到資料 分頁資料就會大於0

    if (pageArray && pageArray.length > 0) {
      setProductsDisplay(pageArray) // 把分好的商品資料放進來要呈現的狀態中
      setPageTotal(pageArray.length) //把總頁數設定進來
      setPageNow(1) //設定回第一頁
    } else {
      setProductsDisplay([])
      setPageTotal(0)
    }

    // setProductsDisplay(newProducts)
  }, [products, keyword, sortList, productType, brand])

  return (
    <>
      <Navbar
        setToggleCartButton={setToggleCartButton}
        toggleCartButton={toggleCartButton}
        cartItem={cartItem}
        products={products}
        addToCartTable={addToCartTable}
      />

      {/* <!-- 輪播牆 --> */}

      <Carousel carouselRef={carouselRef} />

      {/* <!-- 手機版商品類別 --> */}

      {/* <!-- 手機版品牌類別 --> */}

      <M_productAndBrand />

      <div className="container">
        {/* <!-- 商品類別 --> */}

        {/* <!-- 品牌類別 --> */}

        <ProductAndBrand setProductType={setProductType} setBrand={setBrand} />

        {/* <!-- 商品區 --> */}
        <section className="products">
          {/* title path */}

          <TitleAndPath productNumToText={productNumToText} brand={brand} />
          {/* 功能列 */}
          <FunctionalBar
            inputText={inputText}
            setInputText={setInputText}
            setKeyword={setKeyword}
            setToggleSortList={setToggleSortList}
            toggleSortList={toggleSortList}
            sortList={sortList}
            setSortList={setSortList}
            sortOption={sortOption}
          />
          {/* 產品 */}
          <ProductArea
            productsDisplay={productsDisplay}
            pageNow={pageNow}
            favorites={favorites}
            setProducts={setProducts}
            toggleLiked={toggleLiked}
            products={products}
            handleAddOrDeleteFavorite={handleAddOrDeleteFavorite}
            comparedList={comparedList}
            toggleCompared={toggleCompared}
            handleAddOrDeleteCompared={handleAddOrDeleteCompared}
            cartItem={cartItem}
            handleAddOrDeleteCart={handleAddOrDeleteCart}
          />
        </section>
      </div>

      <CompareListButton comparedList={comparedList} />

      <Pagination
        count={pageTotal}
        page={pageNow}
        sx={{ mx: '0 auto' }}
        onChange={handleChangePageNow}
        size={'large'}
        showFirstButton={true}
        showLastButton={true}
      />
    </>
  )
}

export default Products
