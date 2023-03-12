import React from 'react'

function M_orderDetailBottom() {
  return (
    <>
      <div className="coupon">
        <input type="text" className="coupon-code" placeholder="請輸入折扣碼" />
        <a href="#" className="btn-coupon">
          使用
        </a>
        <p className="d-none err-msg">折扣碼錯誤請重新輸入</p>
      </div>

      <div className="checkout-cal">
        <p>合計</p>
        <p>169799</p>
      </div>

      <div className="checkout-fee">
        <p>運費</p>
        <p>120</p>
      </div>

      <div className="checkout-discount">
        <p>折扣</p>
        <p>120</p>
      </div>

      <div className="checkout-total">
        <p>總金額</p>
        <p>169919</p>
      </div>
    </>
  )
}

export default M_orderDetailBottom
