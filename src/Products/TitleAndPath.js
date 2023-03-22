import React, { useContext } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'

function TitleAndPath({ productNumToText, brand }) {
  const { displayFavorites } = useContext(ProductFunctionContext)
  return (
    <>
      <h2 className="title text-center">
        {displayFavorites ? '收藏清單' : '比比精選'}
      </h2>
      <p className="slogan text-center">
        We always <span>beE.</span> side you.
      </p>
      <p className="user-guide">
        {'產品分類'}
        {'  '}
        <i className="fa-solid fa-chevron-right"></i> {productNumToText()}{' '}
        <i className="fa-solid fa-chevron-right"></i>
        {'  '}
        {brand}
      </p>
    </>
  )
}

export default TitleAndPath
