//README!!!!
//每一頁都要加上的!
//1: import AuthContext from '...你的路徑'
//2: const { setNavbarType } = useContext(AuthContext)
//3: useEffect(()=<{setNavbarType('白的話是light；深藍的話是dark')},[])

import AuthContext from '../../Contexts/AuthContext'
import React, { useContext, useEffect, useRef } from 'react'
import './../../styles/Navbar.css'
import './../../styles/m-navbar.css'
import ProductFunctionContext from '../../Contexts/ProductFunctionContext'
import { useLocation, useNavigate } from 'react-router-dom'
import NavbarMemberBox from './NavbarMemberBox'

function Navbar() {
  const navigation = useNavigate()
  const {
    setToggleCartButton,
    toggleCartButton,
    products,
    cartItem,
    getProductData,
    addToCartTable,
    cartItemPId,
    getCartData,
    cartData,
  } = useContext(ProductFunctionContext)

  const {
    navbarType,
    memberAuth,
    memberBoxToggle,
    setMemberBoxToggle,
    Logout,
  } = useContext(AuthContext)
  const memberBoxRef = useRef(null)
  const memberIconRef = useRef(null)

  const cartBoxRef = useRef(null)
  const cartIconRef = useRef(null)

  // const myCartItem = cartItem || []
  // const cartItemPId = myCartItem.map((v) => v.product_id)

  //點畫面其他區域會使會員區消失
  function handleOutMemberBox(event) {
    if (
      memberBoxRef.current &&
      !memberBoxRef.current.contains(event.target) &&
      !memberIconRef.current.contains(event.target)
    ) {
      setMemberBoxToggle(false)
    } else {
      setMemberBoxToggle(true)
    }
  }

  function handleOutCartBox(event) {
    if (
      cartBoxRef.current &&
      !cartBoxRef.current.contains(event.target) &&
      !cartIconRef.current.contains(event.target)
    ) {
      setToggleCartButton(false)
    } else {
      setToggleCartButton(true)
    }
  }

  useEffect(() => {
    getProductData()
    document.addEventListener('click', handleOutMemberBox)
    document.addEventListener('click', handleOutCartBox)
  }, [])
  return (
    <>
      <header>
        <nav
          className={
            navbarType == 'light'
              ? 'beebee_navbar'
              : 'beebee_navbar navbar_dark'
          }
        >
          <div
            className="beebee_logo"
            onClick={() => {
              navigation('/')
            }}
          >
            <svg
              width="129"
              height="25"
              viewBox="0 0 331 63"
              fill="#1D2D64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.66 60.3993C5.19 60.3993 3.1 60.4693 0 60.6193C0.43 57.5193 0.58 55.0793 0.58 50.0393V10.6493C0.58 6.8293 0.44 3.7393 0 0.279297C3.67 0.499297 4.68 0.499297 10.58 0.499297H29.45C41.12 0.499297 47.96 6.1193 47.96 15.6193C47.96 20.0093 46.52 23.4693 43.78 25.9193C42.2 27.2893 40.9 28.0093 37.95 29.0893C41.48 29.8793 43.35 30.7493 45.44 32.5493C48.54 35.2893 50.12 39.1693 50.12 43.9293C50.12 54.2993 42.78 60.4193 30.25 60.4193H10.66V60.3993ZM27.36 23.6093C31.18 23.6093 33.55 21.3793 33.55 17.8493C33.55 14.3193 31.32 12.3093 27.21 12.3093H14.68V23.6193H27.35L27.36 23.6093ZM14.69 48.5193H27.94C32.48 48.5193 35.21 45.9993 35.21 41.7493C35.21 37.4993 32.47 35.1293 27.87 35.1293H14.69V48.5193Z" />
              <path d="M102.53 60.91C99.4301 60.55 96.8401 60.41 90.6501 60.41H67.9701C62.5001 60.41 60.4801 60.48 57.3901 60.63C57.8201 57.75 57.9701 55.09 57.9701 50.12V10.79C57.9701 6.33 57.8301 3.81 57.3901 0.28C60.3401 0.42 62.3601 0.5 67.9701 0.5H90.9401C95.8401 0.5 98.2801 0.36 101.67 0V13.47C98.3601 13.11 95.7701 12.97 90.9401 12.97H72.2201V23.55H87.7701C92.5201 23.55 94.2501 23.48 98.5701 23.05V36.37C95.1901 36.01 92.7401 35.87 87.7701 35.87H72.2201V47.97H90.8001C96.2701 47.97 99.4401 47.83 102.54 47.47V60.94L102.53 60.91Z" />
              <path d="M155.02 60.91C151.92 60.55 149.33 60.41 143.14 60.41H120.46C114.99 60.41 112.97 60.48 109.88 60.63C110.31 57.75 110.46 55.09 110.46 50.12V10.79C110.46 6.33 110.32 3.81 109.88 0.28C112.83 0.42 114.85 0.5 120.46 0.5H143.43C148.33 0.5 150.77 0.36 154.16 0V13.47C150.85 13.11 148.26 12.97 143.43 12.97H124.71V23.55H140.26C145.01 23.55 146.74 23.48 151.06 23.05V36.37C147.68 36.01 145.23 35.87 140.26 35.87H124.71V47.97H143.29C148.76 47.97 151.93 47.83 155.03 47.47V60.94L155.02 60.91Z" />
              <path d="M161.71 60.4C162.14 56.94 162.29 53.92 162.29 49.09V11.8C162.29 6.54 162.15 3.95 161.71 0.5H176.33C175.97 3.96 175.83 6.55 175.83 11.8V17.85C175.83 18.93 175.83 19.58 175.76 20.59C180.01 16.85 184.62 15.19 190.59 15.19C203.7 15.19 211.33 23.54 211.33 37.8C211.33 45.51 209.1 51.7 204.92 56.09C201.17 59.83 196.28 61.71 189.94 61.71C183.96 61.71 180.44 60.49 175.75 56.6C175.75 56.82 175.82 57.75 175.82 58.11V60.41H161.71V60.4ZM187.2 26.12C180.65 26.12 175.97 31.16 175.97 38.15C175.97 45.14 180.72 50.68 186.92 50.68C193.12 50.68 197.36 45.57 197.36 37.93C197.36 30.29 193.54 26.12 187.21 26.12H187.2Z" />
              <path d="M228.46 42.4698C229.18 48.2998 232.56 51.3998 238.25 51.3998C241.13 51.3998 243.65 50.4598 245.52 48.7398C246.6 47.7298 247.1 46.9398 247.68 45.0698L260.21 48.5998C258.55 52.3398 257.47 53.9998 255.46 56.0198C251.36 60.0498 245.6 62.1398 238.47 62.1398C231.34 62.1398 225.87 60.1198 221.76 56.0198C217.51 51.6998 215.21 45.5798 215.21 38.4498C215.21 24.1898 224.35 14.7598 238.11 14.7598C249.34 14.7598 257.19 20.8798 259.71 31.6098C260.29 33.9098 260.57 36.9398 260.79 41.0398C260.79 41.3298 260.79 41.7598 260.86 42.4798H228.46V42.4698ZM247.18 32.5298C246.17 27.9198 243.08 25.4698 238.11 25.4698C233.14 25.4698 229.9 27.7698 228.68 32.5298H247.19H247.18Z" />
              <path d="M312.41 60.91C309.31 60.55 306.72 60.41 300.53 60.41H277.85C272.38 60.41 270.36 60.48 267.27 60.63C267.7 57.75 267.85 55.09 267.85 50.12V10.79C267.85 6.33 267.71 3.81 267.27 0.28C270.22 0.42 272.24 0.5 277.85 0.5H300.82C305.72 0.5 308.16 0.36 311.55 0V13.47C308.24 13.11 305.65 12.97 300.82 12.97H282.1V23.55H297.65C302.4 23.55 304.13 23.48 308.45 23.05V36.37C305.07 36.01 302.62 35.87 297.65 35.87H282.1V47.97H300.68C306.15 47.97 309.32 47.83 312.42 47.47V60.94L312.41 60.91Z" />
              <path
                d="M329.98 60.2004C329.38 62.0004 328.25 62.9704 326.6 62.9704C325.48 62.9704 324.43 62.2204 323.45 60.8704C322.48 59.5204 322.03 58.4004 322.03 57.5704C322.03 56.3704 322.56 55.0204 323.68 53.6704C324.73 52.3204 325.85 51.6504 327.2 51.6504C329.68 51.6504 330.95 53.3004 330.95 56.4504C330.95 56.8304 330.57 58.1004 329.98 60.2004Z"
                fill="#231815"
              />
            </svg>
          </div>
          <div className="nav_btn_list">
            <div className="nav_btn_group">
              <button
                className="btn"
                onClick={() => {
                  navigation('/products')
                }}
              >
                比比精選
              </button>
              <button
                className="btn"
                onClick={() => {
                  navigation('/articles/front')
                }}
              >
                比比論壇
              </button>
            </div>
            <div className="nav_btn_group">
              <button className="btn"
              onClick={() => {
                  navigation('/member_page/edit')
                }}
              >比比會員</button>
              <button className="btn">關於比比</button>
            </div>
          </div>
          <div className="nav_top">
            <button
              ref={memberIconRef}
              className="btn member"
              onClick={(e) => {
                e.preventDefault()
                // setMemberBoxToggle(!memberBoxToggle)
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              ref={cartIconRef}
              className="btn cart"
              // onClick={() => {
              //   setToggleCartButton(!toggleCartButton)
              // }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </nav>

        <nav className="m-nav nav-dark">
          <i className="fa-solid fa-chevron-left btn-back nav-dark"></i>
          <svg
            width="67"
            height="13"
            viewBox="0 0 67 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.15809 12.4692C1.0507 12.4692 0.627587 12.4837 0 12.5147C0.0870524 11.8747 0.11742 11.3709 0.11742 10.3304V2.19848C0.11742 1.40985 0.0890769 0.771926 0 0.0576172C0.742982 0.103036 0.947454 0.103036 2.14189 0.103036H5.96208C8.32464 0.103036 9.70938 1.26327 9.70938 3.22452C9.70938 4.13083 9.41786 4.84513 8.86315 5.35093C8.54328 5.63376 8.2801 5.78241 7.68288 6.00537C8.39752 6.16846 8.7761 6.34807 9.19921 6.71968C9.8268 7.28534 10.1467 8.08636 10.1467 9.06905C10.1467 11.2099 8.6607 12.4734 6.12404 12.4734H2.15809V12.4692ZM5.53896 4.87404C6.31231 4.87404 6.79211 4.41366 6.79211 3.6849C6.79211 2.95614 6.34066 2.54118 5.5086 2.54118H2.97193V4.8761H5.53694L5.53896 4.87404ZM2.97395 10.0166H5.65638C6.5755 10.0166 7.12818 9.4964 7.12818 8.61899C7.12818 7.74159 6.57347 7.25231 5.64221 7.25231H2.97395V10.0166Z"
              fill="#F4F4F4"
            />
            <path
              d="M20.7569 12.5747C20.1293 12.5004 19.605 12.4715 18.3518 12.4715H13.7603C12.6529 12.4715 12.244 12.4859 11.6184 12.5169C11.7055 11.9223 11.7358 11.3732 11.7358 10.3471V2.22757C11.7358 1.30681 11.7075 0.786565 11.6184 0.0578053C12.2156 0.086708 12.6246 0.103224 13.7603 0.103224H18.4105C19.4025 0.103224 19.8965 0.0743211 20.5828 0V2.78085C19.9127 2.70653 19.3883 2.67762 18.4105 2.67762H14.6207V4.86184H17.7688C18.7304 4.86184 19.0806 4.84739 19.9552 4.75861V7.5085C19.2709 7.43418 18.7749 7.40527 17.7688 7.40527H14.6207V9.90329H18.3822C19.4896 9.90329 20.1313 9.87438 20.7589 9.80006V12.5809L20.7569 12.5747Z"
              fill="#F4F4F4"
            />
            <path
              d="M31.3834 12.5747C30.7558 12.5004 30.2314 12.4715 28.9783 12.4715H24.3868C23.2794 12.4715 22.8704 12.4859 22.2449 12.5169C22.3319 11.9223 22.3623 11.3732 22.3623 10.3471V2.22757C22.3623 1.30681 22.3339 0.786565 22.2449 0.0578053C22.8421 0.086708 23.251 0.103224 24.3868 0.103224H29.037C30.029 0.103224 30.523 0.0743211 31.2092 0V2.78085C30.5391 2.70653 30.0148 2.67762 29.037 2.67762H25.2472V4.86184H28.3952C29.3569 4.86184 29.7071 4.84739 30.5817 4.75861V7.5085C29.8974 7.43418 29.4014 7.40527 28.3952 7.40527H25.2472V9.90329H29.0086C30.116 9.90329 30.7578 9.87438 31.3854 9.80006V12.5809L31.3834 12.5747Z"
              fill="#F4F4F4"
            />
            <path
              d="M32.7378 12.4697C32.8248 11.7554 32.8552 11.1319 32.8552 10.1348V2.43637C32.8552 1.35046 32.8269 0.81576 32.7378 0.103516H35.6976C35.6247 0.817824 35.5964 1.35252 35.5964 2.43637V3.68538C35.5964 3.90834 35.5964 4.04253 35.5822 4.25105C36.4426 3.47893 37.3759 3.13623 38.5845 3.13623C41.2386 3.13623 42.7832 4.86007 42.7832 7.80401C42.7832 9.39572 42.3318 10.6736 41.4856 11.5799C40.7264 12.352 39.7364 12.7402 38.4529 12.7402C37.2423 12.7402 36.5296 12.4883 35.5802 11.6852C35.5802 11.7306 35.5943 11.9226 35.5943 11.997V12.4718H32.7378V12.4697ZM37.8982 5.3927C36.5722 5.3927 35.6247 6.4332 35.6247 7.87626C35.6247 9.31933 36.5863 10.4631 37.8415 10.4631C39.0967 10.4631 39.955 9.40811 39.955 7.83085C39.955 6.25359 39.1817 5.3927 37.9002 5.3927H37.8982Z"
              fill="#F4F4F4"
            />
            <path
              d="M46.251 8.76753C46.3968 9.97112 47.0811 10.6111 48.233 10.6111C48.816 10.6111 49.3262 10.4171 49.7048 10.062C49.9234 9.85345 50.0247 9.69036 50.1421 9.3043L52.6787 10.0331C52.3427 10.8052 52.124 11.1479 51.7171 11.5649C50.8871 12.3969 49.721 12.8284 48.2775 12.8284C46.8341 12.8284 45.7267 12.4113 44.8946 11.5649C44.0342 10.673 43.5686 9.40959 43.5686 7.93762C43.5686 4.99367 45.419 3.04688 48.2047 3.04688C50.4781 3.04688 52.0674 4.31033 52.5775 6.52552C52.6949 7.00034 52.7516 7.62588 52.7962 8.47231C52.7962 8.53218 52.7962 8.62096 52.8103 8.7696H46.251V8.76753ZM50.0409 6.71545C49.8364 5.76372 49.2108 5.25793 48.2047 5.25793C47.1985 5.25793 46.5426 5.73276 46.2956 6.71545H50.0429H50.0409Z"
              fill="#F4F4F4"
            />
            <path
              d="M63.2466 12.5747C62.6191 12.5004 62.0947 12.4715 60.8416 12.4715H56.2501C55.1427 12.4715 54.7337 12.4859 54.1082 12.5169C54.1952 11.9223 54.2256 11.3732 54.2256 10.3471V2.22757C54.2256 1.30681 54.1972 0.786565 54.1082 0.0578053C54.7054 0.086708 55.1143 0.103224 56.2501 0.103224H60.9003C61.8923 0.103224 62.3862 0.0743211 63.0725 0V2.78085C62.4024 2.70653 61.8781 2.67762 60.9003 2.67762H57.1105V4.86184H60.2585C61.2201 4.86184 61.5704 4.84739 62.4449 4.75861V7.5085C61.7607 7.43418 61.2647 7.40527 60.2585 7.40527H57.1105V9.90329H60.8719C61.9793 9.90329 62.6211 9.87438 63.2487 9.80006V12.5809L63.2466 12.5747Z"
              fill="#F4F4F4"
            />
            <path
              d="M66.8035 12.4282C66.6821 12.7998 66.4533 13.0001 66.1193 13.0001C65.8925 13.0001 65.68 12.8452 65.4816 12.5665C65.2852 12.2878 65.1941 12.0566 65.1941 11.8853C65.1941 11.6375 65.3014 11.3588 65.5281 11.0801C65.7407 10.8014 65.9674 10.6631 66.2407 10.6631C66.7428 10.6631 66.9999 11.0037 66.9999 11.654C66.9999 11.7325 66.923 11.9947 66.8035 12.4282Z"
              fill="#F4F4F4"
            />
          </svg>
        </nav>

        <div
          ref={cartBoxRef}
          className={
            toggleCartButton
              ? 'cart-hover-box cart-hover-box-on'
              : 'cart-hover-box cart-hover-box-off'
          }
        >
          <div className="triangle"></div>

          <div className="my-cards">
            {cartData.map((v) => {
              return (
                <div className="my-cart-card" key={v.product_id}>
                  <div className="my-cart-card-left">
                    <div className="img-wrap">
                      <img
                        src={'/images/' + v.product_pic.split(',')[0]}
                        alt=""
                      />
                    </div>
                    <p className="product-name">{v.product_name}</p>
                  </div>
                  <p className="product-price">
                    {(v.product_price - 1000).toLocaleString()}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="btn-check-cart">
            <a
              href="#/"
              className="check-cart"
              onClick={async (e) => {
                e.preventDefault()
                navigation('/cart')
              }}
            >
              查看購物車
            </a>
          </div>
        </div>

        <NavbarMemberBox memberBoxRef={memberBoxRef} />
      </header>
    </>
  )
}

export default Navbar
