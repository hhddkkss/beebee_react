import React from 'react'

function OrderDetail(donepageData) {
  return (
    <>
      {console.log(donepageData.orderDetail.product_info, 888)}
      <div className="checkout-items">
        {donepageData.orderDetail.product_info.map((v) => (
          <div className="checkout-item-card" key={v.product_id}>
            <div className="checkout-item">
              <div
                className="img-wrap"
                style={{ backgroundImage: v.product_pic }}
              >
                <div className="amount">1</div>
              </div>
              <div className="checkout-item-info">
                <p>{v.product_name}</p>
                <p>{v.product_price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <!-- detail --> */}
      <p className="checkout-detail">付款明細</p>
      <div className="checkout-cal">
        <p>合計</p>
        <p>{donepageData.orderAll.totalPrice}</p>
      </div>
      <div className="checkout-fee">
        <p>運費</p>
        <p>120</p>
      </div>
      <div className="checkout-total">
        <p>總金額</p>
        <p>{donepageData.orderAll.finalPrice}</p>
      </div>
    </>
  )
}

export default OrderDetail
