import React from 'react'
import styles from '../styles/noCartItem.module.css'
import { useNavigate } from 'react-router-dom'

function NoCartItem() {
  const navigation = useNavigate()

  return (
    <>
      <div className="container">
        <div className={styles['add-product']}>
          <p>購物車內還沒有商品！趕快把喜歡的雙品加入購物車內吧～</p>
          <a
            href="#"
            className={styles['btn-to-product']}
            onClick={(e) => {
              e.preventDefault()
              navigation('/products')
            }}
          >
            至商品頁
          </a>
        </div>
      </div>
    </>
  )
}

export default NoCartItem
