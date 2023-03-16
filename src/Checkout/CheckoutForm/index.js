import React from 'react'
import RecipientInfo from './RecipientInfo'
import RecipientAddress from './RecipientAddress'
import Payment from './Payment'
import CreditCard from './CreditCard'
import Note from './Note'
import PaymentForm from './PaymentForm'

function CheckoutForm() {
  return (
    <>
      <form>
        <RecipientInfo />
        <RecipientAddress />
        <Payment />
        {/* <CreditCard /> */}
        <PaymentForm />
        <Note />
      </form>
    </>
  )
}

export default CheckoutForm
