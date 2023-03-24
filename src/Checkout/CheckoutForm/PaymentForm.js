import { compose } from '@mui/system'
import React, { useState, useRef } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/es/styles-compiled.css'

const PaymentForm = (setValidation, validation) => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  })

  const handleInputChange = (evt) => {
    const { name, value } = evt.target

    //input 持卡人姓名時 套用maxLength
    if (name === 'number') {
      if (value.length > 16) return
    }
    //input 限用卡期限 套用maxLength
    if (name === 'expiry') {
      if (value.length > 4) return
    }
    //input 安全碼 判斷長度 套用maxLength
    if (name === 'cvc') {
      if (value.length > 3) return
    }

    setState((prev) => ({ ...prev, [name]: value }))
  }

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }))
  }

  return (
    <div className="form-border ">
      <div id="PaymentForm" className="payment-form">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}

          // callback={(...a) => console.log(a)}
        />

        <div className="field-wrap">
          <input
            type="text"
            name="number"
            placeholder=" "
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="form-input"
            autoComplete="off"
          />

          <label className="form-label">*信用卡號</label>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            name="name"
            placeholder=" "
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="form-input"
            autoComplete="off"
          />
          <label className="form-label">*持有者姓名</label>
        </div>
        <div className="field-wrap">
          <input
            type="text"
            name="expiry"
            placeholder="month/year"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="form-input"
            autoComplete="off"
          />
          <label className="form-label">*到期年</label>
        </div>
        <div className="field-wrap">
          <input
            type="text"
            name="cvc"
            placeholder=" "
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="form-input"
            autoComplete="off"
          />
          <label className="form-label">*安全碼</label>
        </div>
        <a
          href="#/"
          className="btn-credit-info"
          onClick={() => {
            setState({
              ...state,
              number: '4111111112341234',
              expiry: '1225',
              cvc: '366',
              name: '王小湖',
            })
          }}
        >
          自動填入信用卡資訊
        </a>
      </div>
    </div>
  )
}

export default PaymentForm
