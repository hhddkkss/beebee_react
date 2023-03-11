import React from 'react'

function ProductAndBrand({ setProductType, setBrand }) {
  //品牌分類
  const brandOption = [
    '全部品牌',
    'Apple',
    'Samsung',
    'Asus',
    'Oppo',
    '小米',
    'Sony',
    'Realme',
    '其他品牌',
  ]

  //產品分類
  const productTypeOption = [
    {
      imgSrc: './images/class-all.jpg',
      imgAlt: 'all',
      title: 'All',
      product_category_id: 4,
    },
    {
      imgSrc: './images/class-phone.jpg',
      imgAlt: 'Cellphone',
      title: 'Cellphone',
      product_category_id: 1,
    },
    {
      imgSrc: './images/image 6.png',
      imgAlt: 'Tablet',
      title: 'Tablet',
      product_category_id: 2,
    },
    {
      imgSrc: './images/image7.png',
      imgAlt: 'Earphone',
      title: 'Earphone',
      product_category_id: 3,
    },
  ]

  return (
    <>
      {/* <!-- 商品類別 --> */}
      <section className="product-class">
        <div className="box-wrap">
          {productTypeOption.map((v) => {
            return (
              <div className="box" key={v.title}>
                <img src={v.imgSrc} alt={v.imgAlt} />

                <div
                  className="mask"
                  onClick={() => {
                    setProductType(v.product_category_id)
                  }}
                >
                  {v.title}
                  <img src="./images/Frame 372.png" alt="focus-img" />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* <!-- 品牌類別 --> */}
      <section className="brand-class">
        <ul className="brand-area">
          {brandOption.map((v, i) => {
            return (
              <li className="brand-item" key={i}>
                <p
                  onClick={() => {
                    setBrand(v)
                  }}
                >
                  {v}
                </p>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default ProductAndBrand
