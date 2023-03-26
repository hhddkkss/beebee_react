import React, { useContext } from 'react'
import M_productCardfrom from './M_productCard'
import ProductFunctionContext from '../../Contexts/ProductFunctionContext'
import DefaultCard from './DefaultCard'

function ProductArea({ productsDisplay, cardType }) {
  const { cartItem } = useContext(ProductFunctionContext)

  return (
    <>
      <div className="product-area">
        {cardType ? (
          <DefaultCard productsDisplay={productsDisplay} cartItem={cartItem} />
        ) : (
          <M_productCardfrom productsDisplay={productsDisplay} />
        )}

      </div>
    </>
  )
}

export default ProductArea
