import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function M_CartBottom() {
  const navigation = useNavigate()

  const { cartData } = useContext(ProductFunctionContext)

  const totalPrice = cartData
    .map((v) => (v.product_price - 1000) * v.quantity)
    .reduce((a, c) => a + c)
  return (
    <>
      {/* <!-- 手機版 --> */}
      <div className="container-fluid g-0">
        <div className="m-cart-bottom-area">
          <span className="me-1">合計：</span>
          <span className="bottom-total-price">
            {totalPrice.toLocaleString()}
          </span>
          <button
            className="btn-want-to-check-out"
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

export default M_CartBottom
