import React from 'react'

function CartItem() {
  const imgPath = 'iphone-14promax-256G-deeppurple.png'
  const imagesPath = '/public/images/'
  return (
    <>
      <div className="container">
        <section className="cart-items">
          <div className="cart-item">
            <div className="wrap">
              <div
                className="img"
                style={{
                  backgroundImage: `url(${imagesPath}${imgPath})`,
                }}
              ></div>
              <span className="cart-name">iphone14 128GB 紅色</span>
            </div>
            <span className="cart-price">39000</span>
            <div className="cart-control">
              <a href="#">
                <i className="fa-solid fa-minus"></i>
              </a>
              <span>1</span>
              <a href="#">
                <i className="fa-solid fa-plus"></i>
              </a>
              <a href="#">
                <i className="fa-solid fa-trash-can"></i>
              </a>
            </div>
            <span className="cart-total">39000</span>
          </div>
        </section>
      </div>
    </>
  )
}

export default CartItem
