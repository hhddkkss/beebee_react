import React, { useContext, useState } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function M_orderDetailBottom({
  hasDiscount,
  couponCode,
  setCouponCode,
  getCoupon,
  discount,
  couponError,
  handleSubmit,
}) {
  const { totalPrice } = useContext(ProductFunctionContext)

  const fee = 120

  //折扣
  // const [discount, setDiscount] = useState(0)
  // const [hasDiscount, setHasDiscount] = useState(false)
  // const [couponCode, setCouponCode] = useState('')
  // const [couponError, setCouponError] = useState(false)
  // const [couponId, setCouponId] = useState('')
  // const getCoupon = async (couponCode) => {
  //   const res = await axios.get(GET_COUPON + couponCode)

  //   if (res.data && +res.data.discount > 0) {
  //     setHasDiscount(true)
  //     setDiscount(res.data.discount)
  //     setCouponId(res.data.id)
  //     setCouponError(false)
  //   } else {
  //     setHasDiscount(false)
  //     setCouponError(true)
  //   }
  // }
  return (
    <>
      <div className="coupon">
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
      <div className="checkout-cal">
        <p>合計</p>
        <p>{totalPrice}</p>
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
        <p>{totalPrice + fee}</p>
      </div>
    </>
  )
}

export default M_orderDetailBottom
