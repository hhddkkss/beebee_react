import React from 'react'

function Payment() {
  return (
    <>
      <div className="form-border payment">
        <h3 className="form-title">付款方式</h3>
        <div className="field-wrap">
          <select name="payment" id="payment" className="form-input">
            <option value="0">請選擇</option>
            <option value="1">金融卡 / 信用卡</option>
            <option value="2">貨到付款</option>
            <option value="3">LinePay</option>
          </select>
          <label htmlFor="payment" className="form-label">
            付款方式
          </label>
        </div>
      </div>
    </>
  )
}

export default Payment
