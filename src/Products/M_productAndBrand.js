import React from 'react'

function M_productAndBrand({ productType, setProductType, brand, setBrand }) {
  // const brandOption = ['全部商品', '手機', '平板', '耳機']
  const productOption = [
    { product_category_id: 4, title: '全部商品' },
    { product_category_id: 1, title: '手機' },
    { product_category_id: 2, title: '平板' },
    { product_category_id: 3, title: '耳機' },
  ]

  const brandOption = [
    { brand: '全部品牌', imgSrc: './images/svg/all_button.svg' },
    { brand: 'Apple', imgSrc: './images/svg/Apple_logo_black.svg' },
    { brand: 'Samsung', imgSrc: './images/svg/Samsung_Logo.svg' },
    { brand: 'other', imgSrc: './images/svg/Frame 365.svg' },
  ]

  return (
    <>
      {/* <!-- 手機版商品類別 --> */}
      <div className="container-fluid">
        <ul className="p-0 m-product-class">
          {productOption.map((v, i) => {
            return (
              <li
                className={
                  productType === v.product_category_id ? 'product-active' : ''
                }
                key={i}
              >
                <a
                  href="#/"
                  onClick={() => {
                    setProductType(v.product_category_id)
                  }}
                >
                  {v.title}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      {/* <!-- 手機版品牌類別 --> */}
      <div className="container-fluid">
        <ul className="p-0 m-brand-class">
          {brandOption.map((v, i) => {
            return (
              <li
                key={i}
                className={brand === v.brand ? 'brand-active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  setBrand(v.brand)
                  console.log(v.brand)
                }}
              >
                <a href="#">
                  <img src={v.imgSrc} alt="img" />
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default M_productAndBrand
