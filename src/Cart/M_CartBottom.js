import React from 'react'

function M_CartBottom() {
  return (
    <>
      {/* <!-- 手機版 --> */}
      <div className="container-fluid g-0">
        <div className="m-cart-bottom-area">
          <span className="me-1">合計：</span>
          <span className="bottom-total-price">39000</span>
          <button className="btn-want-to-check-out">我要結帳</button>
        </div>
      </div>
    </>
  )
}

export default M_CartBottom
