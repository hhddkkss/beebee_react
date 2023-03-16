import React, { useContext, useState, useEffect } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function CheckoutRightLogin() {
  const { getCartData, cartData, totalPrice } = useContext(
    ProductFunctionContext
  )
  //固定運費
  const fee = 120
  //折扣
  const [discount, setDiscount] = useState(0)
  const [hasDiscount, setHasDiscount] = useState(false)
  //有沒有優惠券 
  //{output:有優惠券 沒有優惠券 還沒檢查 }控制要不要顯示錯誤訊息
  const [hasCoupon, setHasCoupon] = useState()
  //拿優惠券
  const getCoupon = async () => {}

  useEffect(() => {
    getCartData()
  }, [])
  return (
    <>
      <div className="checkout-items">
        {cartData.map((v) => {
          return (
            <div className="checkout-item-card">
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
                  <p>{v.product_price - 1000}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="coupon" id="coupon">
        <input type="text" className="coupon-code" placeholder="請輸入折扣碼" />
        <button className="btn-coupon">使用</button>
      </div>
      <p className="err-msg">折扣碼錯誤請重新輸入</p>
      {/* <!-- detail --> */}
      <p className="checkout-detail">付款明細</p>
      <div className="checkout-cal">
        <p>合計</p>
        <p>{totalPrice}</p>
      </div>
      <div className="checkout-fee">
        <p>運費</p>
        <p>{fee}</p>
      </div>
      {hasDiscount ? (
        <div class="checkout-discount">
          <p>折扣</p>
          <p>120</p>
        </div>
      ) : (
        ''
      )}
      <div className="checkout-total">
        <p>總金額</p>
        <p>{totalPrice + fee}</p>
      </div>
      <button className="btn-to-checkout" form="form1">
        立即下單
      </button>
    </>
  )
}

export default CheckoutRightLogin
