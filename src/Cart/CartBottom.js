import React from 'react'
import { useNavigate } from 'react-router-dom'

function CartBottom() {
  const navigation = useNavigate()
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
          <button
            className="btn btn-checkout"
            onClick={() => {
              navigation('/checkout')
            }}
          >
            我要結帳
          </button>
        </div>
      </div>
    </>
  )
}

export default CartBottom
