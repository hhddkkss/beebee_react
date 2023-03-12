import React from 'react'

function OrderDetail() {
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
    </>
  )
}

export default OrderDetail
