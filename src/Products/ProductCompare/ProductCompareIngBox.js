import { useState } from 'react'
function ProductCompareIngBox(props) {
  const {
    compareIngData,
    compareType,
    compareIngClass,
    addCompareIngList,
    setCompareListClass,
    setCompareIngClass,
  } = props
  const compareHeadTiile = [
    ['作業系統', '處理器', '記憶體', '電池', '螢幕尺寸'],
    [
      '作業系統',
      '處理器',
      '記憶體',
      '電池',
      '螢幕尺寸',
      '前置鏡頭畫素',
      '後置鏡頭畫素',
      '螢幕解析度',
    ],
    [
      '通透模式',
      '主動降噪',
      '通話智能降噪',
      '電持續航力',
      '遊戲低延遲',
      '無線充電',
      '防水係數',
    ],
  ]
  // 手機
  if (compareType === 1) {
    return (
      <>
        <div className={compareIngClass}>
          <div className="compareIng_head">
            <div className="item_content">
              <button
                className="btn"
                onClick={() => {
                  setCompareIngClass('compareIng_box d-none')
                  setCompareListClass('compare_list_box')
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="17.5"
                    transform="rotate(-180 18 18)"
                    stroke="#F4F4F4"
                  />
                  <path
                    d="M21 12L15 18L21 24"
                    stroke="#F4F4F4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="head_title">
              {compareHeadTiile[0].map((v, i) => {
                return <p key={i}>{v}</p>
              })}
            </div>
          </div>

          {compareIngData.map((v, i) => {
            {
              /* console.log(compareType) */
            }
            return (
              <div key={v.product_id} className="compareIng_item_card">
                <button
                  className="compareIng_item_remove"
                  onClick={(e) => {
                    e.preventDefault()
                    addCompareIngList(v.product_id)
                    //當比較區商品少於2項返回列表
                    if (
                      JSON.parse(localStorage.getItem('compareIngList'))
                        .length < 3
                    ) {
                      setCompareIngClass('compareIng_box d-none')
                      setCompareListClass('compare_list_box')
                    }
                  }}
                >
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66666 12H9.74999H17.6667"
                      stroke="#4F4F4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="item_content">
                  <img src={'/images/' + v.product_pic.split(',')[0]} alt="" />
                  <div className="item_name">{v.product_name}</div>
                  <div className="item_price">$ {v.product_price}</div>
                  <button className="add_To_Cart">
                    <i className="fa-solid fa-cart-shopping d-inline"></i>
                    加入購物車
                  </button>
                </div>
                <div className="compare_item_property">
                  <p>{v.operation_system}</p>
                  <p>{v.prcessor}</p>
                  <p>{v.ROM}</p>
                  <p>{v.battery}</p>
                  <p>{v.screen_size}</p>
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
  // 平板
  if (compareType === 2) {
    return (
      <>
        <div className={compareIngClass}>
          <div className="compareIng_head">
            <div className="item_content">
              <button
                className="btn"
                onClick={() => {
                  setCompareIngClass('compareIng_box d-none')
                  setCompareListClass('compare_list_box')
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="17.5"
                    transform="rotate(-180 18 18)"
                    stroke="#F4F4F4"
                  />
                  <path
                    d="M21 12L15 18L21 24"
                    stroke="#F4F4F4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="head_title">
              {compareHeadTiile[1].map((v, i) => {
                return <p key={i}>{v}</p>
              })}
            </div>
          </div>

          {compareIngData.map((v, i) => {
            {
              /* console.log(compareType) */
            }
            return (
              <div key={v.product_id} className="compareIng_item_card">
                <button
                  className="compareIng_item_remove"
                  onClick={(e) => {
                    e.preventDefault()
                    addCompareIngList(v.product_id)
                    //當比較區商品少於2項返回列表
                    if (
                      JSON.parse(localStorage.getItem('compareIngList'))
                        .length < 3
                    ) {
                      setCompareIngClass('compareIng_box d-none')
                      setCompareListClass('compare_list_box')
                    }
                  }}
                >
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66666 12H9.74999H17.6667"
                      stroke="#4F4F4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="item_content">
                  <img src={'/images/' + v.product_pic.split(',')[0]} alt="" />
                  <div className="item_name">{v.product_name}</div>
                  <div className="item_price">$ {v.product_price}</div>
                  <button className="add_To_Cart">
                    <i className="fa-solid fa-cart-shopping d-inline"></i>
                    加入購物車
                  </button>
                </div>
                <div className="compare_item_property">
                  <p>{v.operation_system}</p>
                  <p>{v.prcessor}</p>
                  <p>{v.RAM_ROM}</p>
                  <p>{v.battery}</p>
                  <p>{v.screen_size}</p>
                  <p>{v.cam_front}</p>
                  <p>{v.cam_back}</p>
                  <p>{v.resolution}</p>
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
  // 耳機
  if (compareType === 3) {
    return (
      <>
        <div className={compareIngClass}>
          <div className="compareIng_head">
            <div className="item_content">
              <button
                className="btn"
                onClick={() => {
                  setCompareIngClass('compareIng_box d-none')
                  setCompareListClass('compare_list_box')
                }}
              >
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="17.5"
                    transform="rotate(-180 18 18)"
                    stroke="#F4F4F4"
                  />
                  <path
                    d="M21 12L15 18L21 24"
                    stroke="#F4F4F4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="head_title">
              {compareHeadTiile[2].map((v, i) => {
                return <p key={i}>{v}</p>
              })}
            </div>
          </div>

          {compareIngData.map((v, i) => {
            {
              /* console.log(compareType) */
            }
            return (
              <div key={v.product_id} className="compareIng_item_card">
                <button
                  className="compareIng_item_remove"
                  onClick={(e) => {
                    e.preventDefault()
                    addCompareIngList(v.product_id)
                    //當比較區商品少於2項返回列表
                    if (
                      JSON.parse(localStorage.getItem('compareIngList'))
                        .length < 3
                    ) {
                      setCompareIngClass('compareIng_box d-none')
                      setCompareListClass('compare_list_box')
                    }
                  }}
                >
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66666 12H9.74999H17.6667"
                      stroke="#4F4F4F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div className="item_content">
                  <img src={'/images/' + v.product_pic.split(',')[0]} alt="" />
                  <div className="item_name">{v.product_name}</div>
                  <div className="item_price">$ {v.product_price}</div>
                  <button className="add_To_Cart">
                    <i className="fa-solid fa-cart-shopping d-inline"></i>
                    加入購物車
                  </button>
                </div>
                <div className="compare_item_property">
                  <p>{v.transparen_mode}</p>
                  <p>{v.ANC}</p>
                  <p>{v.CVC}</p>
                  <p>{v.power_usage_time}</p>
                  <p>{v.low_latency}</p>
                  <p>{v.Qi}</p>
                  <p>{v.IP_ratings}</p>
                </div>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default ProductCompareIngBox
