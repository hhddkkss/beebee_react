import React from 'react'
import RecipientInfo from './RecipientInfo'
import RecipientAddress from './RecipientAddress'
import Payment from './Payment'
import CreditCard from './CreditCard'
import Note from './Note'

function CheckoutForm() {
  return (
    <>
      <form>
        <RecipientInfo />
        <RecipientAddress />
        <Payment />
        <CreditCard />
        <Note />
      </form>
    </>
  )
}

export default CheckoutForm
