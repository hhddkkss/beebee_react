import React from 'react'

function CreditCard() {
  return (
    <>
      <div className="form-border credit-card">
        {/* <!-- 信用卡本人 --> */}

        <div className="credit-card-front">
          <span>xxxx/xxxx/xxxx/xxxx</span>
          <span className="month">12</span>
          <span className="year">25</span>
          <span className="visa">VISA</span>
          <span className="lastname">Chang</span>
          <span className="firstname">XiaoMing</span>
          <i className="fa-solid fa-wifi"></i>
          <div className="credit-card-back">
            <div></div>
            <span>123</span>
          </div>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            id="mobile"
            autoComplete="off"
            name="mobile"
            className="form-input"
            maxLength="16"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            value=""
          />
          <label htmlFor="mobile" className="form-label">
            信用卡卡號
          </label>
        </div>
        <div className="select-field">
          <div className="field-wrap">
            <select name="month" id="month" className="form-input">
              <option value="0">請選擇</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <label htmlFor="month" className="form-label">
              到期月
            </label>
          </div>
          <div className="field-wrap">
            <select name="year" id="year" className="form-input">
              <option value="0">請選擇</option>
              <option value="1">22</option>
              <option value="2">23</option>
              <option value="3">24</option>
              <option value="4">25</option>
            </select>
            <label htmlFor="year" className="form-label">
              到期年
            </label>
          </div>
        </div>

        <div className="name-field">
          <div className="field-wrap">
            <input
              type="text"
              id="credit-last-name"
              autoComplete="off"
              name="credit-last-name"
              placeholder=" "
              className="form-input"
            />
            <label htmlFor="credit-last-name" className="form-label">
              持卡人姓
            </label>
          </div>
          <div className="field-wrap">
            <input
              type="text"
              id="credit-first-name"
              name="credit-first-name"
              autoComplete="off"
              className="form-input"
              placeholder=" "
            />
            <label htmlFor="credit-first-name" className="form-label">
              持卡人名
            </label>
          </div>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            id="credit-card-type"
            autoComplete="off"
            name="credit-card-type"
            className="form-input"
            placeholder=" "
            value="VISA"
            readOnly
          />
          <label htmlFor="credit-card-type" className="form-label">
            信用卡類別
          </label>
        </div>

        <div className="field-wrap">
          <input
            type="text"
            id="cvc"
            name="cvc"
            autoComplete="off"
            className="form-input"
            placeholder=" "
            maxLength="3"
          />
          <label htmlFor="cvc" className="form-label">
            安全碼
          </label>
        </div>
      </div>
    </>
  )
}

export default CreditCard
