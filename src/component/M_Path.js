import React from 'react'
import styles from '../styles/m-path.module.css'

function M_Path() {
  return (
    <>
      <div className={styles.path}>
        <span className={styles['path-active']}>購物車</span>
        <i className="fa-solid fa-chevron-right"></i>
        <span>填寫資料</span>
        <i className="fa-solid fa-chevron-right"></i>
        <span>完成訂單</span>
      </div>
    </>
  )
}

export default M_Path
