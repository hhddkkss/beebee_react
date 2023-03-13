import React from 'react'

function RecipientAddress() {
  return (
    <>
      <div className="form-border recipient-address">
        <h3 className="form-title">收件地址</h3>

        <div className="field-wrap">
          <input
            type="text"
            id="mobile"
            autoComplete="off"
            name="mobile"
            className="form-input"
            placeholder=" "
            value="台灣"
            readOnly
          />
          <label htmlFor="mobile" className="form-label">
            國家
          </label>
        </div>
        <div className="select-field">
          <div className="field-wrap">
            <select name="city" id="city" className="form-input">
              <option value="0">請選擇</option>
              {/* <!-- <option value="1"></option> --> */}
            </select>
            <label htmlFor="city" className="form-label">
              縣市
            </label>
          </div>
          <div className="field-wrap">
            <select name="disc" id="disc" className="form-input">
              <option value="0">請選擇</option>
              {/* <!-- <option value="1"></option> --> */}
            </select>
            <label htmlFor="disc" className="form-label">
              區
            </label>
          </div>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            id="address"
            autoComplete="off"
            name="address"
            className="form-input"
            placeholder=" "
          />
          <label htmlFor="address" className="form-label">
            詳細地址
          </label>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            id="postal-code"
            name="postal-code"
            autoComplete="off"
            className="form-input"
            placeholder=" "
          />
          <label htmlFor="postal-code" className="form-label">
            郵遞區號
          </label>
        </div>
      </div>
    </>
  )
}

export default RecipientAddress
