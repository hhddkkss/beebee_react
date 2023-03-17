import React, { useState, useEffect } from 'react'
import RecipientInfo from './RecipientInfo'
import RecipientAddress from './RecipientAddress'
import Payment from './Payment'
import CreditCard from './CreditCard'
import Note from './Note'
import PaymentForm from './PaymentForm'

function CheckoutForm({ inputs, setInputs, handleChange, handleSubmit }) {
  //確認付款方式狀態
  const [paymentMethod, setPaymentMethod] = useState(0)

  //checkout error msg

  const [errorMsg, setErrorMsg] = useState({})

  //檢查輸入的欄位是否有錯誤？

  // method改變的時候要呼叫什麼來重新render出信用卡表格？
  useEffect(() => {}, [paymentMethod])

  return (
    <>
      <form>
        <RecipientInfo
          inputs={inputs}
          setInputs={setInputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <RecipientAddress
          inputs={inputs}
          setInputs={setInputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Payment
          inputs={inputs}
          setInputs={setInputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
        {/* <CreditCard /> */}
        {paymentMethod === 1 ? (
          <PaymentForm
            inputs={inputs}
            setInputs={setInputs}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          ''
        )}
        <Note
          inputs={inputs}
          setInputs={setInputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </form>
    </>
  )
}

export default CheckoutForm
