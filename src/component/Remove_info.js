import React from 'react'
import styles from '../styles/removeInfo.module.css'

function Remove_info({ setShowRemove, showRemove }) {
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
            onClick={() => {
              setShowRemove(false)
            }}
          >
            確定
          </a>
          <a
            href="#"
            className={styles['btn-cancel']}
            onClick={() => {
              setShowRemove(false)
            }}
          >
            取消
          </a>
        </div>
        <a href="#">
          <i
            className={`${'fa-solid fa-xmark'} ${styles.closeButton}`}
            onClick={() => {
              setShowRemove(false)
            }}
          ></i>
        </a>
      </div>
    </>
  )
}

export default Remove_info
