import React from 'react'

function RecipientInfo() {
  return (
    <>
      <div className="form-border recipient-info">
        <h3 className="form-title">收件人資料</h3>

        <div className="name-field">
          <div className="field-wrap">
            <input
              type="text"
              id="last-name"
              autoComplete="off"
              name="last-name"
              placeholder=" "
              className="form-input"
            />
            <label htmlFor="last-name" className="form-label">
              姓
            </label>
          </div>
          <div className="field-wrap">
            <input
              type="text"
              id="first-name"
              name="first-name"
              autoComplete="off"
              className="form-input"
              placeholder=" "
            />
            <label htmlFor="first-name" className="form-label">
              名
            </label>
          </div>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            id="mobile"
            autoComplete="off"
            name="mobile"
            className="form-input"
            placeholder=" "
          />
          <label htmlFor="mobile" className="form-label">
            手機號碼
          </label>
        </div>

        <div className="field-wrap">
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            className="form-input"
            placeholder=" "
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
        </div>
      </div>
    </>
  )
}

export default RecipientInfo
