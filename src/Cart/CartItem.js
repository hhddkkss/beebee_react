import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function CartItem() {
  const navigation = useNavigate()

  const { cartItemPId, products } = useContext(ProductFunctionContext)

  return (
    <>
      <div className="container">
        <section className="cart-items">
          {console.log(cartItemPId)}
          {products
            .filter((v) => cartItemPId.includes(v.product_id))
            .map((v) => (
              <div className="cart-item" key={v.product_id}>
                <div className="wrap">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url('/images/${v.product_pic}')`,
                    }}
                  ></div>
                  <span className="cart-name">{v.product_name}</span>
                </div>
                <span className="cart-price">{v.product_price}</span>
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
            ))}
        </section>
      </div>

      <div className="container">
        <div className="cart-bottom">
          <p>
            購物車內總共有<span>{cartItemPId.length}</span>樣商品
          </p>
          <p>
            合計：<span className="total-price">104700</span>
          </p>
          <button
            className="btn btn-checkout"
            onClick={() => {
              navigation('/checkout')
            }}
          >
            我要結帳
          </button>
        </div>
      </div>
    </>
  )
}

export default CartItem
