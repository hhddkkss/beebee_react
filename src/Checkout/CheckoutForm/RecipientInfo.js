import React from 'react'
import axios from 'axios'

function RecipientInfo({
  inputs,
  setInputs,
  handleChange,
  handleSubmit,
  validation,
}) {

  // note :有空來補做 自動填入會員資料ˋ
  const getMemberData = async () => {
    const res = await axios('')
  }

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
              className={
                validation.lastName ? 'form-input error' : 'form-input'
              }
              value={inputs.lastName || ''}
              onChange={(e) => {
                handleChange(e)
              }}
            />
            <label className="form-label">*姓</label>
          </div>

          <div className="field-wrap">
            <input
              type="text"
              name="firstName"
              autoComplete="off"
              className={
                validation.firstName ? 'form-input error' : 'form-input'
              }
              placeholder=" "
              value={inputs.firstName || ''}
              onChange={(e) => {
                handleChange(e)
              }}
            />

            <label className="form-label">*名</label>
          </div>
          {validation.firstName || validation.lastName ? (
            <span className="checkout-error">
              {validation.firstName || validation.lastName}
            </span>
          ) : (
            ''
          )}
        </div>

        <div className="field-wrap">
          <input
            type="text"
            autoComplete="off"
            name="mobile"
            className={validation.mobile ? 'form-input error' : 'form-input'}
            placeholder=" "
            maxLength={10}
            value={inputs.mobile || ''}
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <label htmlFor="mobile" className="form-label">
            *手機號碼
          </label>
          {validation.mobile ? (
            <span className="checkout-error">{validation.mobile}</span>
          ) : (
            ''
          )}
        </div>

        <div className="field-wrap">
          <input
            type="email"
            name="email"
            autoComplete="off"
            className={validation.email ? 'form-input error' : 'form-input'}
            placeholder=" "
            value={inputs.email || ''}
            onChange={(e) => {
              handleChange(e)
            }}
          />
          <label className="form-label">*Email</label>
          {validation.email ? (
            <span className="checkout-error">{validation.email}</span>
          ) : (
            ''
          )}
        </div>

        <a
          href="#/"
          className="btn-credit-info"
          onClick={() => {
            setInputs({})
          }}
        >
          自動填入會員資料
        </a>
      </div>
    </>
  )
}

export default RecipientInfo
