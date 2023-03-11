import React from 'react'

function CompareListButton({ comparedList }) {
  return (
    <>
      <div className="compare-list">
        <p>比較列表</p>
        <div className="img-wrap">
          <img src="./images/14-128G-red.png" alt="" />
        </div>
        <div className="count-wrap">
          <span>{comparedList.length}</span>
        </div>
        <p className="start-compare">開始比較</p>
      </div>

      <div className="btn-to-top">
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    </>
  )
}

export default CompareListButton
