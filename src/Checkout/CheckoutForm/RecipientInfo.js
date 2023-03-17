import React from 'react'

function RecipientInfo({ inputs, setInputs, handleChange, handleSubmit }) {
  return (
    <>
      <div className="form-border recipient-info">
        <h3 className="form-title">收件人資料</h3>

        <div className="name-field">
          <div className="field-wrap">
            <input
              type="text"
              autoComplete="off"
              name="lastName"
              placeholder=" "
              className="form-input"
              value={inputs.lastName || ''}
              onChange={(e) => {
                handleChange(e)
              }}
            />
            <label className="form-label">姓</label>
          </div>

          <div className="field-wrap">
            <input
              type="text"
              name="firstName"
              autoComplete="off"
              className="form-input"
              placeholder=" "
              value={inputs.firstName || ''}
              onChange={(e) => {
                handleChange(e)
              }}
            />

            <label className="form-label">名</label>
          </div>
          <span className="checkout-error">456</span>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            autoComplete="off"
            name="mobile"
            className="form-input"
            placeholder=" "
            maxLength={10}
            value={inputs.mobile || ''}
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <label htmlFor="mobile" className="form-label">
            手機號碼
          </label>
          <span className="checkout-error">456</span>
        </div>

        <div className="field-wrap">
          <input
            type="email"
            name="email"
            autoComplete="off"
            className="form-input"
            placeholder=" "
            value={inputs.email || ''}
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <label className="form-label">Email</label>
          <span className="checkout-error">456</span>
        </div>
      </div>
    </>
  )
}

export default RecipientInfo
