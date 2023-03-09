import { React, useEffect, useState, useRef } from 'react'
import _ from 'lodash'
import axios from 'axios'
import Navbar from './Navbar'
import '../styles/m-navbar.css'
import '../styles/products.css'
import ProductDetail from './ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductCardForMobile from './ProductCardForMobile'

function Products() {
  //輪播牆
  const carouselRef = useRef(null)
  const [movement, setMoveMent] = useState(0)
  //開關
  const [toggleSortList, setToggleSortList] = useState(false)
  const [toggleCartButton, setToggleCartButton] = useState(false)

  //收藏
  const [favorites, setFavorite] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  )
  //加入購物車
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem('cartItem')) || []
  )
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
  const [comparedList, setComparedList] = useState(
    JSON.parse(localStorage.getItem('comparedList')) || []
  )
  //分頁用
  const [pageNow, setPageNow] = useState(1) //預設第一頁
  const [perPage, setPerPage] = useState(25) // 一頁25個
  const [pageTotal, setPageTotal] = useState(0) // 預設總筆數是0

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
    }, 5000)

    carouselRef.current.style.transform = `translateX(${-movement * 100}vw)`
  }

  const sortOption = ['上架時間:最新(預設)', '價格:由高到低', '價格:由低至高']

  //產品分類
  const productTypeOption = [
    {
      imgSrc: './images/class-all.jpg',
      imgAlt: 'all',
      title: 'All',
      product_category_id: 4,
    },
    {
      imgSrc: './images/class-phone.jpg',
      imgAlt: 'Cellphone',
      title: 'Cellphone',
      product_category_id: 1,
    },
    {
      imgSrc: './images/image 6.png',
      imgAlt: 'Tablet',
      title: 'Tablet',
      product_category_id: 2,
    },
    {
      imgSrc: './images/image7.png',
      imgAlt: 'Earphone',
      title: 'Earphone',
      product_category_id: 3,
    },
  ]

  const productNumToText = () => {
    if (productType === 1) return '手機'
    if (productType === 2) return '平板'
    if (productType === 3) return '耳機'
    if (productType === 4) return '全部商品'
  }

  //品牌分類
  const brandOption = [
    '全部品牌',
    'Apple',
    'Samsung',
    'Asus',
    'Oppo',
    '小米',
    'Sony',
    'Realme',
    '其他品牌',
  ]

  const getProductData = async () => {
    const res = await axios.get('http://localhost:3030/products/pd_api')
    const initialData = res.data.map((v, i) => {
      return { ...v, isLiked: false, isCompared: false }
    })
    console.log(initialData)
    setProducts(initialData)
  }
  //加入收藏
  const toggleLiked = (arr, product_id) => {
    return arr.map((v, i) => {
      if (product_id === v.product_id) return { ...v, isLiked: !v.isLiked }
      else {
        return { ...v }
      }
    })
  }

  //加入比較清單
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

  const otherBrand = [5, 8, 1, 9, 2, 10]
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
      case '其他品牌':
        return arr.filter((v) => !otherBrand.includes(v.brand_category_id))

      default:
        return arr.map((v) => v)
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
      if (comparedList.length < 3) {
        const newComparedList = [...comparedList, product_id]
        setComparedList(newComparedList)
        localStorage.setItem('comparedList', JSON.stringify(newComparedList))
      } else {
        comparedList.length = 4
      }
    }
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

    if (pageArray.length > 0) {
      setProductsDisplay(pageArray) // 把分好的商品資料放進來要呈現的狀態中
      setPageTotal(pageArray.length) //把總頁數設定進來
      setPageNow(1) //設定回第一頁
    } else {
      setProductsDisplay([])
      setPageTotal(0)
    }

    setProductsDisplay(newProducts)
  }, [products, keyword, sortList, productType, brand])

  return (
    <>
      <Navbar
        setToggleCartButton={setToggleCartButton}
        toggleCartButton={toggleCartButton}
        cartItem={JSON.parse(localStorage.getItem('cartItem'))}
        products={products}
      />

      {/* <!-- 輪播牆 --> */}

      <section className="my-carousel">
        <ul className="wall" ref={carouselRef}>
          <li className="my-carousel-item">
            <img src="./images/product-carousel.png" alt="" />
            <div className="advertise">
              <img src="./images/tape.png" className="tape" alt="" />
              <div className="advertise-text">
                <h2>本週主打商品</h2>
                <p>
                  擁有優秀的攝影系統、高效能的處理器、長效的電池續航力以及快速的
                  5G 上網速度。選擇 iPhone 13，讓您的生活更輕鬆、更便捷！
                </p>
              </div>
            </div>
          </li>
          <li className="my-carousel-item">
            <img src="./images/product-carousel2.png" alt="" />
            <div className="advertise">
              <img src="./images/tape.png" className="tape" alt="" />
              <div className="advertise-text">
                <h2>本週主打商品</h2>
                <p>
                  您是否在尋找一款功能強大、操作簡單且攜帶方便的平板電腦呢？我們的平板電腦擁有先進的處理器、高清的顯示屏幕、長效的電池續航力以及輕便的設計，讓您隨時隨地輕鬆應對工作、娛樂等多種場合。選擇我們的平板電腦，讓您輕鬆享受多重便利！
                </p>
              </div>
            </div>
          </li>
          <li className="my-carousel-item">
            <img src="./images/product-carousel3.png" alt="" />
            <div className="advertise">
              <div className="advertise-text">
                <h2>本週主打商品</h2>
                <p>
                  擁有更快速的處理器、更優秀的攝影技術、更長效的電池續航力以及更出色的顯示屏幕。選擇
                  iPhone 14，體驗科技的極致力量！
                </p>
              </div>
            </div>
          </li>
          <li className="my-carousel-item">
            <img src="./images/product-carousel.png" alt="" />
            <div className="advertise">
              <img src="./images/tape.png" className="tape" alt="" />
              <div className="advertise-text">
                <h2>本週主打商品</h2>
                <p>
                  擁有優秀的攝影系統、高效能的處理器、長效的電池續航力以及快速的
                  5G 上網速度。選擇 iPhone 13，讓您的生活更輕鬆、更便捷！
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* <!-- 手機版商品類別 --> */}
      <div className="container-fluid">
        <ul className="p-0 m-product-class">
          <li className="product-active">
            <a href="#">全部商品</a>
          </li>
          <li>
            <a href="#">手機</a>
          </li>
          <li>
            <a href="#">平板</a>
          </li>
          <li>
            <a href="#">耳機</a>
          </li>
        </ul>
      </div>
      {/* <!-- 手機版品牌類別 --> */}
      <div className="container-fluid">
        <ul className="p-0 m-brand-class">
          <li className="brand-active">
            <a href="#">
              <img src="./images/svg/Apple_logo_black.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/svg/Samsung_Logo.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/svg/Xiaomi_logo.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/svg/Frame 365.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>

      <div className="container">
        {/* <!-- 商品類別 --> */}
        <section className="product-class">
          <div className="box-wrap">
            {productTypeOption.map((v) => {
              return (
                <div className="box" key={v.title}>
                  <img src={v.imgSrc} alt={v.imgAlt} />

                  <div
                    className="mask"
                    onClick={() => {
                      setProductType(v.product_category_id)
                    }}
                  >
                    {v.title}
                    <img src="./images/Frame 372.png" alt="focus-img" />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* <!-- 品牌類別 --> */}
        <section className="brand-class">
          <ul className="brand-area">
            {brandOption.map((v, i) => {
              return (
                <li className="brand-item" key={i}>
                  <p
                    onClick={() => {
                      setBrand(v)
                    }}
                  >
                    {v}
                  </p>
                </li>
              )
            })}
          </ul>
        </section>

        {/* <!-- 商品區 --> */}
        <section className="products">
          <h2 className="title text-center">比比精選</h2>
          <p className="slogan text-center">
            We always <span>beE.</span> side you.
          </p>

          {/* <!-- 商品功能列 --> */}
          <div className="functional-bar">
            {/* <!-- 搜尋 --> */}
            <div className="search-form">
              <input
                type="text"
                id="search"
                className="search-input"
                placeholder="輸入要尋找的商品"
                autoComplete="off"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value)
                }}
              />
              <button
                className="btn btn-search"
                onClick={() => {
                  setKeyword(inputText)
                }}
              >
                開始搜尋
              </button>
            </div>
            {/* <!-- 收藏 --> */}
            <div className="wrap">
              <div className="like-list-wrap">
                <a href="#" className="like-list">
                  收藏清單
                </a>
              </div>

              {/* <!-- 商品篩選 --> */}
              <div className="product-sort">
                <a className="sort-to-list">
                  <i className="fa-solid fa-list"></i>
                </a>
                <span
                  className="sort-selection"
                  onClick={() => {
                    setToggleSortList(!toggleSortList)
                  }}
                >
                  {sortList}
                  <i className="fa-solid fa-caret-down"></i>
                </span>
              </div>
            </div>
          </div>

          <ul
            className={
              toggleSortList
                ? 'sort-list sort-list-on'
                : 'sort-list sort-list-off'
            }
          >
            {sortOption.map((v, i) => {
              return (
                <li
                  key={i}
                  className="sort-item"
                  onClick={() => {
                    setSortList(v)
                    setToggleSortList(!toggleSortList)
                  }}
                >
                  {v}
                </li>
              )
            })}
          </ul>

          <p className="user-guide">
            {'產品分類'}
            {'  '}
            <i className="fa-solid fa-chevron-right"></i> {productNumToText()}{' '}
            <i className="fa-solid fa-chevron-right"></i>
            {'  '}
            {brand}
          </p>

          <div className="product-area">
            {/* <div className="row row-cols-lg-5">
              {filterBrandType(
                filterProductType(
                  filterByPrice(filterByKeyword(products, keyword), sortList),
                  productType
                ),
                brand
              ).map((v, i) => { */}
            <div className="row row-cols-lg-5">
              {productsDisplay.map((v, i) => {
                return (
                  <div className="col-6" key={v.product_id}>
                    <div className="my-card">
                      <div className="card-top">
                        <div className="img-wrap">
                          <img
                            src={'/images/' + v.product_pic.split(',')[0]}
                            alt=""
                          />
                        </div>

                        {localStorage
                          .getItem('favorites')
                          .includes(v.product_id) ? (
                          <i
                            className="fa-solid fa-heart"
                            onClick={() => {
                              setProducts(toggleLiked(products, v.product_id))
                              handleAddOrDeleteFavorite(v.product_id)
                            }}
                          ></i>
                        ) : (
                          <i
                            className="fa-regular fa-heart"
                            onClick={() => {
                              setProducts(toggleLiked(products, v.product_id))
                              handleAddOrDeleteFavorite(v.product_id)
                            }}
                          ></i>
                        )}
                      </div>
                      <div className="card-bottom">
                        <h3>{v.product_name}</h3>
                        <div className="card-text">
                          <p className="original">{v.product_price}</p>
                          <p className="discount">{v.product_price}</p>
                          <div className="compare-and-cart">
                            {localStorage
                              .getItem('comparedList')
                              .includes(v.product_id) ? (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                  setProducts(
                                    toggleCompared(products, v.product_id)
                                  )

                                  handleAddOrDeleteCompared(v.product_id)
                                }}
                              >
                                <circle cx="10" cy="10" r="10" fill="#F3D775" />
                                <path
                                  d="M6.234 7.272V8.924H9.762V7.272H6.234ZM5.226 3.268V15.042L6.962 14.636V3.268H5.226ZM3.448 14.23L3.924 15.966C5.66 15.574 7.956 15.084 10.084 14.594L9.916 12.942C7.62 13.446 5.114 13.95 3.448 14.23ZM15.208 6.18C14.144 6.894 12.548 7.762 11.078 8.322C11.288 8.686 11.554 9.274 11.652 9.666C13.192 9.106 14.956 8.392 16.384 7.636L15.208 6.18ZM10.574 3.268V13.488C10.574 15.476 11.022 16.05 12.66 16.05C12.982 16.05 14.256 16.05 14.592 16.05C16.104 16.05 16.538 15.14 16.72 12.746C16.244 12.634 15.544 12.326 15.138 12.018C15.054 13.936 14.97 14.426 14.438 14.426C14.172 14.426 13.15 14.426 12.912 14.426C12.38 14.426 12.31 14.314 12.31 13.502V3.268H10.574Z"
                                  fill="#233A66"
                                />
                              </svg>
                            ) : (
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                onClick={() => {
                                  setProducts(
                                    toggleCompared(products, v.product_id)
                                  )
                                  handleAddOrDeleteCompared(v.product_id)
                                }}
                              >
                                <circle
                                  cx="10"
                                  cy="10"
                                  r="9.5"
                                  fill="#1D2D64"
                                  stroke="#233A66"
                                />
                                <path
                                  d="M6.234 7.272V8.924H9.762V7.272H6.234ZM5.226 3.268V15.042L6.962 14.636V3.268H5.226ZM3.448 14.23L3.924 15.966C5.66 15.574 7.956 15.084 10.084 14.594L9.916 12.942C7.62 13.446 5.114 13.95 3.448 14.23ZM15.208 6.18C14.144 6.894 12.548 7.762 11.078 8.322C11.288 8.686 11.554 9.274 11.652 9.666C13.192 9.106 14.956 8.392 16.384 7.636L15.208 6.18ZM10.574 3.268V13.488C10.574 15.476 11.022 16.05 12.66 16.05C12.982 16.05 14.256 16.05 14.592 16.05C16.104 16.05 16.538 15.14 16.72 12.746C16.244 12.634 15.544 12.326 15.138 12.018C15.054 13.936 14.97 14.426 14.438 14.426C14.172 14.426 13.15 14.426 12.912 14.426C12.38 14.426 12.31 14.314 12.31 13.502V3.268H10.574Z"
                                  fill="#F4F4F4"
                                />
                              </svg>
                            )}
                            <i
                              className="fa-solid fa-cart-shopping"
                              onClick={() => {
                                handleAddOrDeleteCart(v.product_id, 1)
                              }}
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* <!-- 手機版的橫向卡片--> */}
            {/* <div className="row row-for-m-card">
            <div className="col-12">
              <div className="m-my-card">
                <div className="img-wrap">
                  <img src="./images/57.jpg" alt="" />
                </div>

                <div className="m-card-right">
                  <div className="m-card-top">
                    <h3>iphone14 pro</h3>
                    <i className="fa-regular fa-heart"></i>
                  </div>

                  <div className="m-card-middle">
                    <p className="m-original">25900</p>
                    <p className="m-discount">24900</p>
                  </div>
                  <div className="m-card-bottom">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10"
                        cy="10"
                        r="9.5"
                        fill="#1D2D64"
                        stroke="#233A66"
                      />
                      <path
                        d="M6.234 7.272V8.924H9.762V7.272H6.234ZM5.226 3.268V15.042L6.962 14.636V3.268H5.226ZM3.448 14.23L3.924 15.966C5.66 15.574 7.956 15.084 10.084 14.594L9.916 12.942C7.62 13.446 5.114 13.95 3.448 14.23ZM15.208 6.18C14.144 6.894 12.548 7.762 11.078 8.322C11.288 8.686 11.554 9.274 11.652 9.666C13.192 9.106 14.956 8.392 16.384 7.636L15.208 6.18ZM10.574 3.268V13.488C10.574 15.476 11.022 16.05 12.66 16.05C12.982 16.05 14.256 16.05 14.592 16.05C16.104 16.05 16.538 15.14 16.72 12.746C16.244 12.634 15.544 12.326 15.138 12.018C15.054 13.936 14.97 14.426 14.438 14.426C14.172 14.426 13.15 14.426 12.912 14.426C12.38 14.426 12.31 14.314 12.31 13.502V3.268H10.574Z"
                        fill="#F4F4F4"
                      />
                    </svg>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>  */}
          </div>
        </section>
      </div>

      <div className="compare-list">
        <p>比較列表</p>
        <div className="img-wrap">
          <img src="./images/14-128G-red.png" alt="" />
        </div>
        <div className="count-wrap">
          <span>{comparedList.length}</span>
        </div>
        <p className="start-compare">開始比較</p>
      </div>

      <div className="btn-to-top">
        <i className="fa-solid fa-chevron-up"></i>
      </div>
      {/*  */}
      {comparedList.length > 3 ? (
        <div className="compared-warning-info" ref={warningRef}>
          <p>溫馨提示：比較清單最多只能加入三個商品</p>
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              comparedList.length = 3
            }}
          ></i>
        </div>
      ) : (
        ''
      )}

      {/* <Router>
        <Routes>
          <Route path="/product_detail" element={<ProductDetail />} />
        </Routes>
      </Router> */}
    </>
  )
}

export default Products
