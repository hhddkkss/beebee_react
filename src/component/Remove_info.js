import React, { useContext } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'
import styles from '../styles/removeInfo.module.css'

function Remove_info({ deleteCartItem, productsSid }) {
  const { setShowRemove, showRemove } = useContext(ProductFunctionContext)
  return (
    <>
      {/* <!-- 刪除視窗 --> */}

      <div
        className={
          showRemove
            ? `${styles['remove-info']} ${styles['remove-info-on']} `
            : `${styles['remove-info']} ${styles['remove-info-off']} `
        }
      >
        <p>確定要移除購物車內的商品嗎？</p>
        <div className={styles['btn-mygroup']}>
          <a
            href="#"
            className={styles['btn-confirm']}
            onClick={(e) => {
              e.preventDefault()
              console.log('yes')
              setShowRemove(false)
              deleteCartItem(productsSid)
            }}
          >
            確定
          </a>
          <a
            href="#"
            className={styles['btn-cancel']}
            onClick={(e) => {
              e.preventDefault()
              console.log('no')
              setShowRemove(false)
            }}
          >
            取消
          </a>
        </div>
        <a href="#">
          <i
            className={`${'fa-solid fa-xmark'} ${styles.closeButton}`}
            onClick={(e) => {
              e.preventDefault()
              console.log('x')
              setShowRemove(false)
            }}
          ></i>
        </a>
      </div>
    </>
  )
}

export default Remove_info
