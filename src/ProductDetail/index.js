import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function ProductDetail(props) {
  const {
    cartItem,
    setCartItem,
    comparedList,
    setComparedList,
    favorites,
    setFavorite,
    toggleLiked,
    toggleCompared,
    handleAddOrDeleteCart,
    handleAddOrDeleteCompared,
    handleAddOrDeleteFavorite,
  } = useContext(ProductFunctionContext)

  const { product_id } = useParams()

  useEffect(() => {
    console.log('product_id:', product_id)
  }, [])
  return (
    <>
      <p>123</p>
    </>
  )
}

export default ProductDetail
