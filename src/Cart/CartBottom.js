import React from 'react'

function CartBottom() {
  return (
    <>
      <div className="container">
        <div className="cart-bottom">
          <p>
            購物車內總共有<span>3</span>樣商品
          </p>
          <p>
            合計：<span className="total-price">104700</span>
          </p>
          <button className="btn btn-checkout">我要結帳</button>
        </div>
      </div>
    </>
  )
}

export default CartBottom
