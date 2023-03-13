import React, { useContext } from 'react'
import '../styles/cart.css'
import Navbar_light from '../component/Navbar-light'
import StepInfomation from '../component/StepInfomation'
import M_Path from '../component/M_Path'
import CartInformation from './CartInformation'
import CartItem from './CartItem'
import CartBottom from './CartBottom'
import CartRecommend from './CartRecommend'
import M_CartBottom from './M_CartBottom'
import Remove_info from '../component/Remove_info'
import NoCartItem from './NoCartItem'

function Cart() {
  
  return (
    <>
      {/* <!-- navbar --> */}
      <Navbar_light />

      {/* <!-- step information --> */}
      {/* <div className="container">
        <section className={styles['step']}>
          <div className={styles['ball-wrap']}>
            <div className={styles.ball}>
              <span>1</span>
            </div>

            <div className={styles['line']}></div>

            <div className={styles['ball']}>
              <span>2</span>
            </div>

            <div className={styles['line']}></div>

            <div className={styles['ball']}>
              <span>3</span>
            </div>
          </div>

          <div className="text">
            <p>購物車</p>
            <p>填寫資料</p>
            <p>完成訂單</p>
          </div>
        </section>
      </div> */}

      <StepInfomation />

      {/* <!-- 手機版麵包屑 --> */}
      {/* <div className="path">
        <span>
          <a href="#" className="path-active">
            購物車
          </a>
        </span>
        <i className="fa-solid fa-chevron-right"></i>
        <span>
          <a href="#">填寫資料</a>
        </span>
        <i className="fa-solid fa-chevron-right"></i>
        <span>
          <a href="#">完成訂單</a>
        </span>
      </div> */}

      <M_Path />

      {/* <!-- cart information --> */}
      {/* <div className="container">
        <section className="cart-info-area">
          <div className="cart-info">
            <div className="pd-info">
              <p>商品</p>
              <p>單價</p>
              <p>數量</p>
              <p>總計</p>
            </div>
          </div>
        </section>
      </div> */}

      {/* <!-- 手機版 cart information --> */}
      {/* <div className="container-fluid g-0">
        <div className="m-cart-info-area">
          <div className="m-cart-info">購物車內的商品</div>
        </div>
      </div> */}
      <CartInformation />

      {/* <!--  購物車商品 --> */}

      {/* <div className="container">
        <section className="cart-items">
          <div className="cart-item">
            <div className="wrap">
              <div
                className="img"
                style={{
                  backgroundImage:
                    "url('/public/images/iphone-14promax-256G-deeppurple.png')",
                }}
              ></div>
              <span className="cart-name">iphone14 128GB 紅色</span>
            </div>
            <span className="cart-price">39000</span>
            <div className="cart-control">
              <a href="#">
                <i className="fa-solid fa-minus"></i>
              </a>
              <span>1</span>
              <a href="#">
                <i className="fa-solid fa-plus"></i>
              </a>
              <a href="#">
                <i className="fa-solid fa-trash-can"></i>
              </a>
            </div>
            <span className="cart-total">39000</span>
          </div>
        </section>
      </div> */}
      {/* <CartItem /> */}
      <NoCartItem />

      {/* <!-- 結帳按鈕 商品總價計算 幾樣商品 --> */}
      {/* <div className="container">
        <div className="cart-bottom">
          <p>
            購物車內總共有<span>3</span>樣商品
          </p>
          <p>
            合計：<span className="total-price">104700</span>
          </p>
          <button className="btn btn-checkout">我要結帳</button>
        </div>
      </div> */}
      <CartBottom />
      {/* 
      <div className="container-lg container-fluid recommend-fixed">
        <div className="recommend">BeE.推薦專區</div>
      </div> */}

      {/* <!-- product --> */}
      {/* <div className="container">
        <div className="product-area">
          <div className="row row-cols-lg-5">
            <div className="col-6">
              <div className="my-card">
                <div className="card-top">
                  <div className="img-wrap">
                    <img src="./images/57.jpg" alt="" />
                  </div>

                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="card-bottom">
                  <h3>iphone14 pro</h3>
                  <div className="card-text">
                    <p className="original">25900</p>
                    <p className="discount">24900</p>
                    <div className="compare-and-cart">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="10" cy="10" r="10" fill="#F3D775" />
                        <path
                          d="M6.234 7.272V8.924H9.762V7.272H6.234ZM5.226 3.268V15.042L6.962 14.636V3.268H5.226ZM3.448 14.23L3.924 15.966C5.66 15.574 7.956 15.084 10.084 14.594L9.916 12.942C7.62 13.446 5.114 13.95 3.448 14.23ZM15.208 6.18C14.144 6.894 12.548 7.762 11.078 8.322C11.288 8.686 11.554 9.274 11.652 9.666C13.192 9.106 14.956 8.392 16.384 7.636L15.208 6.18ZM10.574 3.268V13.488C10.574 15.476 11.022 16.05 12.66 16.05C12.982 16.05 14.256 16.05 14.592 16.05C16.104 16.05 16.538 15.14 16.72 12.746C16.244 12.634 15.544 12.326 15.138 12.018C15.054 13.936 14.97 14.426 14.438 14.426C14.172 14.426 13.15 14.426 12.912 14.426C12.38 14.426 12.31 14.314 12.31 13.502V3.268H10.574Z"
                          fill="#233A66"
                        />
                      </svg>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="my-card">
                <div className="card-top">
                  <div className="img-wrap">
                    <img src="./images/57.jpg" alt="" />
                  </div>

                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="card-bottom">
                  <h3>iphone14 pro</h3>
                  <div className="card-text">
                    <p className="original">25900</p>
                    <p className="discount">24900</p>
                    <div className="compare-and-cart">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="10" cy="10" r="10" fill="#F3D775" />
                        <path
                          d="M6.234 7.272V8.924H9.762V7.272H6.234ZM5.226 3.268V15.042L6.962 14.636V3.268H5.226ZM3.448 14.23L3.924 15.966C5.66 15.574 7.956 15.084 10.084 14.594L9.916 12.942C7.62 13.446 5.114 13.95 3.448 14.23ZM15.208 6.18C14.144 6.894 12.548 7.762 11.078 8.322C11.288 8.686 11.554 9.274 11.652 9.666C13.192 9.106 14.956 8.392 16.384 7.636L15.208 6.18ZM10.574 3.268V13.488C10.574 15.476 11.022 16.05 12.66 16.05C12.982 16.05 14.256 16.05 14.592 16.05C16.104 16.05 16.538 15.14 16.72 12.746C16.244 12.634 15.544 12.326 15.138 12.018C15.054 13.936 14.97 14.426 14.438 14.426C14.172 14.426 13.15 14.426 12.912 14.426C12.38 14.426 12.31 14.314 12.31 13.502V3.268H10.574Z"
                          fill="#233A66"
                        />
                      </svg>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="my-card">
                <div className="card-top">
                  <div className="img-wrap">
                    <img src="./images/57.jpg" alt="" />
                  </div>

                  <i className="fa-regular fa-heart"></i>
                </div>
                <div className="card-bottom">
                  <h3>iphone14 pro</h3>
                  <div className="card-text">
                    <p className="original">25900</p>
                    <p className="discount">24900</p>
                    <div className="compare-and-cart">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="10" cy="10" r="10" fill="#F3D775" />
                        <path
                          d="M6.234 7.272V8.924H9.762V7.272H6.234ZM5.226 3.268V15.042L6.962 14.636V3.268H5.226ZM3.448 14.23L3.924 15.966C5.66 15.574 7.956 15.084 10.084 14.594L9.916 12.942C7.62 13.446 5.114 13.95 3.448 14.23ZM15.208 6.18C14.144 6.894 12.548 7.762 11.078 8.322C11.288 8.686 11.554 9.274 11.652 9.666C13.192 9.106 14.956 8.392 16.384 7.636L15.208 6.18ZM10.574 3.268V13.488C10.574 15.476 11.022 16.05 12.66 16.05C12.982 16.05 14.256 16.05 14.592 16.05C16.104 16.05 16.538 15.14 16.72 12.746C16.244 12.634 15.544 12.326 15.138 12.018C15.054 13.936 14.97 14.426 14.438 14.426C14.172 14.426 13.15 14.426 12.912 14.426C12.38 14.426 12.31 14.314 12.31 13.502V3.268H10.574Z"
                          fill="#233A66"
                        />
                      </svg>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <CartRecommend />

      {/* <!-- 手機版 --> */}
      {/* <div className="container-fluid g-0">
        <div className="bottom-area">
          <span className="me-1">合計：</span>
          <span className="bottom-total-price">39000</span>
          <button className="btn-want-to-check-out">我要結帳</button>
        </div>
      </div> */}
      <M_CartBottom />
      {/* <!-- 刪除視窗 --> */}
      {/* <div className="remove-info">
        <p>確定要移除購物車內的商品嗎？</p>
        <div className="btn-mygroup">
          <a href="#" className="btn-confirm">
            確定
          </a>
          <a href="#" className="btn-cancel">
            取消
          </a>
        </div>
        <a href="#">
          <i className="fa-solid fa-xmark"></i>
        </a>
      </div> */}
      <Remove_info />
    </>
  )
}

export default Cart
