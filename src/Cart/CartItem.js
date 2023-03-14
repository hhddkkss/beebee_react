import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ADD_CART_QUANTITY, MINUS_CART_QUANTITY } from '../component/LoginApi'
import axios from 'axios'
import { useRef } from 'react'

function CartItem({ cartData, setCartData, getCartData, cartTotalRows }) {
  const navigation = useNavigate()

  //前端算總價
  const [totalPrice, setTotalPrice] = useState(0)
  // addQuantity 到資料庫

  const addQuantity = async (sid, quantity) => {
    const myQuantity = parseInt(quantity)
    console.log(quantity, 'add')

    try {
      const res = await axios.put(`${ADD_CART_QUANTITY}/${sid}`, {
        sid: sid,
        quantity: myQuantity,
      })
      console.log(res)
    } catch (e) {
      console.log('新增失敗')
    }
  }
  //minusQuantity 到資料庫

  const minusQuantity = async (sid, quantity) => {
    const myQuantity = parseInt(quantity)

    console.log(quantity, 'minus')

    try {
      const res = await axios.put(`${MINUS_CART_QUANTITY}/${sid}`, {
        sid: sid,
        quantity: myQuantity,
      })

      console.log(res)
    } catch (e) {
      console.log('減少失敗')
    }
  }

  // deleteCartItem 到資料庫

  // RemoveWholeCartItem By member_Id 到資料庫

  //新增或減少重新render

  useEffect(() => {
    getCartData()
  }, [])

  return (
    <>
      <div className="container">
        <section className="cart-items">
          {cartData.map((v) => {
            return (
              <div className="cart-item" key={v.product_id}>
                <div className="wrap">
                  <div
                    className="img"
                    style={{
                      backgroundImage: `url('/images/${
                        v.product_pic.split(',')[0]
                      }')`,
                    }}
                  ></div>
                  <span className="cart-name">{v.product_name}</span>
                </div>
                <span className="cart-price">{v.product_price}</span>
                <div className="cart-control">
                  <a href="#">
                    <i
                      className="fa-solid fa-minus"
                      onClick={() => {
                        minusQuantity(v.sid, v.quantity)
                      }}
                    ></i>
                  </a>
                  <span>{v.quantity}</span>
                  <a href="#">
                    <i
                      className="fa-solid fa-plus"
                      onClick={() => {
                        addQuantity(v.sid, v.quantity)
                      }}
                    ></i>
                  </a>
                  <a href="#">
                    <i className="fa-solid fa-trash-can"></i>
                  </a>
                </div>
                <span className="cart-total">
                  {v.quantity * v.product_price}
                </span>
              </div>
            )
          })}
        </section>
      </div>

      <div className="container">
        <div className="cart-bottom">
          <p>
            購物車內總共有<span>{cartTotalRows}</span>樣商品
          </p>
          <p>
            合計：<span className="total-price">{}</span>
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
