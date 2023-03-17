import React from 'react'

function RecipientAddress({ inputs, setInputs, handleChange, handleSubmit }) {
  //城市
  const cities = async () => {}
  //區
  const disc = async () => {}

  return (
    <>
      <div className="form-border recipient-address">
        <h3 className="form-title">收件地址</h3>

        <div className="field-wrap">
          <input
            type="text"
            autoComplete="off"
            name="country"
            className="form-input"
            placeholder=" "
            value={inputs.country || '台灣'}
            onChange={(e) => {
              handleChange(e)
            }}
            readOnly
          />
          <label className="form-label">國家</label>
        </div>
        <div className="select-field">
          <div className="field-wrap">
            <select
              name="city"
              className="form-input"
              defaultValue={0}
              onChange={(e) => {
                handleChange(e)
              }}
            >
              <option value="0">請選擇</option>
              {/* <!-- <option value="1"></option> --> */}
            </select>
            <label className="form-label">縣市</label>
          </div>
          <div className="field-wrap">
            <select
              name="disc"
              className="form-input"
              defaultValue={0}
              onChange={(e) => {
                handleChange(e)
              }}
            >
              <option value="0">請選擇</option>
              {/* <!-- <option value="1"></option> --> */}
            </select>
            <label className="form-label">區</label>
          </div>
          <span className="checkout-error">456</span>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            autoComplete="off"
            name="address"
            className="form-input"
            placeholder=" "
            value={inputs.address}
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <label className="form-label">詳細地址</label>
          <span className="checkout-error">456</span>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            name="postalCode"
            autoComplete="off"
            className="form-input"
            placeholder=" "
            value={inputs.postalCode}
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <label className="form-label">郵遞區號</label>
          <span className="checkout-error">456</span>
        </div>
      </div>
    </>
  )
}

export default RecipientAddress
