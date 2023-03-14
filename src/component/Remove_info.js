import React from 'react'
import styles from '../styles/removeInfo.module.css'

function Remove_info() {
  return (
    <>
      {/* <!-- 刪除視窗 --> */}
      <div className={styles['remove-info']}>
        <p>確定要移除購物車內的商品嗎？</p>
        <div className={styles['btn-mygroup']}>
          <a href="#" className={styles['btn-confirm']}>
            確定
          </a>
          <a href="#" className={styles['btn-cancel']}>
            取消
          </a>
        </div>
        <a href="#">
          <i className={`${'fa-solid fa-xmark'} ${styles.closeButton}`}></i>
        </a>
      </div>
    </>
  )
}

export default Remove_info
