import React from 'react'

function CartInformation() {
  return (
    <>
      {/* <!-- cart information --> */}
      <div className="container">
        <section className="cart-info-area">
          <div className="cart-info">
            <div className="pd-info">
              <p>商品</p>
              <p>單價</p>
              <p>數量</p>
              <p>控制</p>
              <p>總計</p>
            </div>
          </div>
        </section>
      </div>

      {/* <!-- 手機版 cart information --> */}
      <div className="container-fluid g-0">
        <div className="m-cart-info-area">
          <div className="m-cart-info">購物車內的商品</div>
        </div>
      </div>
    </>
  )
}

export default CartInformation
