import React from 'react'

function CompareListButton({
  comparedList,
  setCompareListClass,
  compareListClass,
  setCompareIngClass,
  compareIngClass,
  popCompareBtn,
}) {
  return (
    <>
      <div
        className="compare-list"
        ref={popCompareBtn}
        onClick={(e) => {
          if (
            compareListClass === 'compare_list_box d-none' &&
            compareIngClass === 'compareIng_box d-none'
          ) {
            setCompareListClass('compare_list_box')
          } else {
            setCompareListClass('compare_list_box d-none')
            setCompareIngClass('compareIng_box d-none')
          }
        }}
      >
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
