import React from 'react'
import styles from '../styles/noCartItem.module.css'

function NoCartItem() {
  return (
    <>
      <div className="container">
        <div className={styles['add-product']}>
          <p>購物車內還沒有商品！趕快把喜歡的雙品加入購物車內吧～</p>
          <a href="#" className={styles['btn-to-product']}>
            至商品頁
          </a>
        </div>
      </div>
    </>
  )
}

export default NoCartItem
