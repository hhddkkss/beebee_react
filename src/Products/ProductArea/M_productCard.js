import React, { useContext } from 'react'
import ProductFunctionContext from '../../Contexts/ProductFunctionContext'
import '../../styles/products.css'

function M_productCard({ productsDisplay }) {
  const { products, pageNow } = useContext(ProductFunctionContext)
  return (
    <>
      <div className="row row-for-m-card">
        {productsDisplay[pageNow - 1] &&
          productsDisplay[pageNow - 1].map((v, i) => {
            return (
              <div className="col-12" key={v.product_id}>
                <div className="m-my-card">
                  <div className="img-wrap">
                    <img
                      src={`/images/${v.product_pic.split(',')[0]}`}
                      alt=""
                    />
                  </div>

                  <div className="m-card-right">
                    <div className="m-card-top">
                      <h3>{v.product_name}</h3>
                      <i className="fa-regular fa-heart"></i>
                    </div>

                    <div className="m-card-middle">
                      <p className="m-original">
                        {v.product_price.toLocaleString()}
                      </p>
                      <p className="m-discount">
                        {(v.product_price - 1000).toLocaleString()}
                      </p>
                    </div>
                    <div className="m-card-bottom">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="9.5"
                          fill="#1D2D64"
                          stroke="#233A66"
                        />
                        <path
                          d="M6.234 7.272V8.924H9.762V7.272H6.234ZM5.226 3.268V15.042L6.962 14.636V3.268H5.226ZM3.448 14.23L3.924 15.966C5.66 15.574 7.956 15.084 10.084 14.594L9.916 12.942C7.62 13.446 5.114 13.95 3.448 14.23ZM15.208 6.18C14.144 6.894 12.548 7.762 11.078 8.322C11.288 8.686 11.554 9.274 11.652 9.666C13.192 9.106 14.956 8.392 16.384 7.636L15.208 6.18ZM10.574 3.268V13.488C10.574 15.476 11.022 16.05 12.66 16.05C12.982 16.05 14.256 16.05 14.592 16.05C16.104 16.05 16.538 15.14 16.72 12.746C16.244 12.634 15.544 12.326 15.138 12.018C15.054 13.936 14.97 14.426 14.438 14.426C14.172 14.426 13.15 14.426 12.912 14.426C12.38 14.426 12.31 14.314 12.31 13.502V3.268H10.574Z"
                          fill="#F4F4F4"
                        />
                      </svg>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default M_productCard
