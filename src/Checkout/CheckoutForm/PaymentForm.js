import React, { useState } from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/es/styles-compiled.css'

const PaymentForm = () => {
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
          callback={(...a) => console.log(a)}
        />
        <div className="field-wrap">
          <input
            type="number"
            name="number"
            placeholder=" "
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="form-input"
            autoComplete="off"
          />
          <label className="form-label">信用卡號</label>
        </div>

        <div className="field-wrap">
          <input
            type="name"
            name="name"
            placeholder=" "
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="form-input"
            autoComplete="off"
          />
          <label className="form-label">持有者姓名</label>
        </div>
        <div className="field-wrap">
          <input
            type="expiry"
            name="expiry"
            placeholder="ex: 03/25"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="form-input"
            autoComplete="off"
          />
          <label className="form-label">到期日</label>
        </div>
        <div className="field-wrap">
          <input
            type="cvc"
            name="cvc"
            placeholder=" "
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="form-input"
            autoComplete="off"
          />
          <label className="form-label">安全碼</label>
        </div>
      </div>
    </div>
  )
}

export default PaymentForm
