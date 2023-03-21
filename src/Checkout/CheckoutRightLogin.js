import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function CheckoutRightLogin({
  hasDiscount,
  couponCode,
  setCouponCode,
  getCoupon,
  discount,
  couponError,
  handleSubmit,
  addOrderAll,
  addOrderDetail,
}) {
  const { getCartData, cartData, totalPrice } = useContext(
    ProductFunctionContext
  )
  //固定運費
  const fee = 120

  //進來就要先拿購物車列表資料

  useEffect(() => {
    getCartData()
  }, [])
  return (
    <>
      <div className="checkout-items">
        {cartData.map((v) => {
          return (
            <div className="checkout-item-card" key={v.sid}>
              <div className="checkout-item">
                <div
                  className="img-wrap"
                  style={{
                    backgroundImage: `url('/images/${
                      v.product_pic.split(',')[0]
                    }')`,
                  }}
                >
                  <div className="amount">{v.quantity}</div>
                </div>
                <div className="checkout-item-info">
                  <p>{v.product_name}</p>
                  <p>{(v.product_price - 1000).toLocaleString()}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="coupon" id="coupon">
        <input
          type="text"
          className={couponError ? 'coupon-code error' : 'coupon-code'}
          placeholder="請輸入折扣碼"
          value={couponCode}
          onChange={(e) => {
            e.preventDefault()
            setCouponCode(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              getCoupon(couponCode)
            }
          }}
        />
        <button
          className="btn-coupon"
          onClick={() => {
            getCoupon(couponCode)
          }}
        >
          使用
        </button>
      </div>
      {couponError ? <p className="err-msg">折扣碼錯誤請重新輸入</p> : ''}
      {/* <!-- detail --> */}
      <p className="checkout-detail">付款明細</p>
      <div className="checkout-cal">
        <p>合計</p>
        <p>{totalPrice.toLocaleString()}</p>
      </div>
      <div className="checkout-fee">
        <p>運費</p>
        <p>{fee}</p>
      </div>
      {hasDiscount ? (
        <div className="checkout-discount">
          <p>折扣</p>
          <p>{discount}</p>
        </div>
      ) : (
        ''
      )}
      <div className="checkout-total">
        <p>總金額</p>
        <p>{(totalPrice + fee - discount).toLocaleString()}</p>
      </div>
      <button
        className="btn-to-checkout"
        form="form1"
        onClick={ (event) => {
          handleSubmit(event)
        }}
      >
        立即下單
      </button>
    </>
  )
}

export default CheckoutRightLogin
