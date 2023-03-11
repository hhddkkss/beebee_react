import React from 'react'

function M_productAndBrand() {
  return (
    <>
      {/* <!-- 手機版商品類別 --> */}
      <div className="container-fluid">
        <ul className="p-0 m-product-class">
          <li className="product-active">
            <a href="#">全部商品</a>
          </li>
          <li>
            <a href="#">手機</a>
          </li>
          <li>
            <a href="#">平板</a>
          </li>
          <li>
            <a href="#">耳機</a>
          </li>
        </ul>
      </div>
      {/* <!-- 手機版品牌類別 --> */}
      <div className="container-fluid">
        <ul className="p-0 m-brand-class">
          <li className="brand-active">
            <a href="#">
              <img src="./images/svg/Apple_logo_black.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/svg/Samsung_Logo.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/svg/Xiaomi_logo.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/svg/Frame 365.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default M_productAndBrand
