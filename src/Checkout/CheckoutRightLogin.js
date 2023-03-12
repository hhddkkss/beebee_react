import React from 'react'

function CheckoutRightLogin() {
  return (
    <>
      <div className="checkout-items">
        <div className="checkout-item-card">
          <div className="checkout-item">
            <div className="img-wrap">
              <div className="amount">1</div>
            </div>
            <div className="checkout-item-info">
              <p>Iphone14 Pro</p>
              <p>34900</p>
            </div>
          </div>
        </div>
      </div>
      <div className="coupon" id="coupon">
        <input type="text" className="coupon-code" placeholder="請輸入折扣碼" />
        <button type="submit" className="btn-coupon">
          使用
        </button>
      </div>
      <p className="w-25 d-none err-msg">折扣碼錯誤請重新輸入</p>
      {/* <!-- detail --> */}
      <p className="checkout-detail">付款明細</p>
      <div className="checkout-cal">
        <p>合計</p>
        <p>169799</p>
      </div>
      <div className="checkout-fee">
        <p>運費</p>
        <p>120</p>
      </div>
      <div className="checkout-total">
        <p>總金額</p>
        <p>169919</p>
      </div>
      <button className="btn-to-checkout" form="form1">
        立即下單
      </button>
    </>
  )
}

export default CheckoutRightLogin
