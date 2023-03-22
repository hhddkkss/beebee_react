import React, { useContext } from 'react'
import AuthContext from '../Contexts/AuthContext'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function M_OrderDetailCard() {
  const { cartData } = useContext(ProductFunctionContext)

  return (
    <>
      <div className="checkout-items">
        {cartData.map((v, i) => {
          return (
            <div className="checkout-item-card" key={i}>
              <div className="checkout-item">
                <div
                  className="img-wrap"
                  style={{
                    backgroundImage: `url(/images/${
                      v.product_pic.split(',')[0]
                    })`,
                  }}
                >
                  <div className="amount">1</div>
                </div>
                <div className="checkout-item-info">
                  <p>{v.product_name}</p>
                  <p>{v.product_price.toLocaleString()}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default M_OrderDetailCard
