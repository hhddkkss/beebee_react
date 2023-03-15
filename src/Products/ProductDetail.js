import React from 'react'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
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
  return (
    <>
      {console.log({
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
      })}
      <p>123</p>
    </>
  )
}

export default ProductDetail