import React from 'react'

function Payment({
  inputs,
  setInputs,
  handleChange,
  handleSubmit,
  paymentMethod,
  setPaymentMethod,
  validation,
}) {
  return (
    <>
      <div className="form-border payment">
        <h3 className="form-title">付款方式</h3>
        <div className="field-wrap">
          <select
            name="payment"
            className={validation.payment ? 'form-input error' : 'form-input'}
            value={inputs.payment}
            // value={0}
            onChange={(e) => {
              handleChange(e)
            }}
          >
            <option value="0">請選擇</option>
            <option value="1">金融卡 / 信用卡</option>
            <option value="2">貨到付款</option>
            <option value="3">LinePay</option>
          </select>
          <label className="form-label">*付款方式</label>
          {validation.payment ? (
            <span className="checkout-error">{validation.payment}</span>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default Payment
