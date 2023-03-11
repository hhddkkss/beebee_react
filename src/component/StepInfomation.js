import React from 'react'
import styles from '../styles/step.module.css'

function StepInfomation() {
  return (
    <>
      <div className="container">
        <section className={styles['step']}>
          <div className={styles['ball-wrap']}>
            <div className={styles.ball}>
              <span>1</span>
            </div>

            <div className={styles['line']}></div>

            <div className={styles['ball']}>
              <span>2</span>
            </div>

            <div className={styles['line']}></div>

            <div className={styles['ball']}>
              <span>3</span>
            </div>
          </div>

          <div className={styles.text}>
            <p>購物車</p>
            <p>填寫資料</p>
            <p>完成訂單</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default StepInfomation
