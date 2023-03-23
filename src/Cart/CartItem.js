import React, { useContext, useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'
import {
  ADD_CART_QUANTITY,
  MINUS_CART_QUANTITY,
  DELETE_CART_ITEM,
} from '../component/LoginApi'
import Remove_info from '../component/Remove_info'
import axios from 'axios'
import { useRef } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function CartItem() {
  const { cartData, getCartData, setShowRemove, showRemove, CartItem } =
    useContext(ProductFunctionContext)
  const navigation = useNavigate()

  //重新渲染 使用布林值
  const [render, setRender] = useState(false)

  //每次點到購物車內商品 更換商品的sid把他傳進去remove_info裡
  const [productsSid, setProductsSid] = useState(0)

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
      setRender(!render)
    } catch (e) {
      console.log('新增失敗')
    }
  }
  //minusQuantity 到資料庫

  const minusQuantity = async (sid, quantity) => {
    const myQuantity = parseInt(quantity)

    console.log(quantity, 'minus')

    if (quantity === 1) {
      setShowRemove(true)
      setProductsSid(sid)
      return
    }

    try {
      const res = await axios.put(`${MINUS_CART_QUANTITY}/${sid}`, {
        sid: sid,
        quantity: myQuantity,
      })
      setRender(!render)
      console.log(res)
    } catch (e) {
      console.log('減少失敗')
    }
  }

  // deleteCartItem 到資料庫

  const deleteCartItem = async (sid) => {
    try {
      const res = await axios.delete(`${DELETE_CART_ITEM}/${sid}`, {
        sid: parseInt(sid),
      })
      setRender(!render)
      console.log(res)
    } catch (e) {
      console.log('刪除失敗')
    }
  }

  // RemoveWholeCartItem By member_Id 到資料庫

  //算出總價
  const totalPrice = cartData
    .map((v) => (v.product_price - 1000) * v.quantity)
    .reduce((a, c) => a + c)

  //新增或減少重新render 相依性陣列放render
  useEffect(() => {
    getCartData()
  }, [render, CartItem])

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
                <span className="cart-price">
                  {(v.product_price - 1000).toLocaleString()}
                </span>
                <div className="cart-count">
                  <a href="#">
                    <i
                      className="fa-solid fa-minus"
                      onClick={(e) => {
                        e.preventDefault()
                        minusQuantity(v.sid, v.quantity)
                      }}
                    ></i>
                  </a>
                  <span>{v.quantity}</span>
                  <a href="#">
                    <i
                      className="fa-solid fa-plus"
                      onClick={(e) => {
                        e.preventDefault()
                        addQuantity(v.sid, v.quantity)
                      }}
                    ></i>
                  </a>
                </div>

                <div className="cart-control">
                  <a href="#">
                    <i
                      className="fa-solid fa-trash-can"
                      onClick={(e) => {
                        e.preventDefault()
                        setShowRemove(true)
                        setProductsSid(v.sid)
                      }}
                    ></i>
                  </a>
                </div>
                <span className="cart-total">
                  {(v.quantity * (v.product_price - 1000)).toLocaleString()}
                </span>
              </div>
            )
          })}
        </section>
      </div>

      <div className="container">
        <div className="cart-bottom">
          <p>
            購物車內總共有<span>{cartData.length}</span>樣商品
          </p>
          <p>
            合計：
            <span className="total-price">{totalPrice.toLocaleString()}</span>
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
      {showRemove ? (
        <Remove_info
          deleteCartItem={deleteCartItem}
          productsSid={productsSid}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default CartItem
