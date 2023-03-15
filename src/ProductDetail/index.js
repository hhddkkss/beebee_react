import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'
import './../styles/Product_detail.css'
import AuthContext from '../Contexts/AuthContext'
import Navbar from '../component/Navbar'
import { PRODUCT_DETAIL_API } from '../component/LoginApi'
import axios from 'axios'
import ProductDetailsBasic from './ProductDetailsBasic'
import PriductDetailComments from './PriductDetailComments'
import ProductCompare from '../component/ProductCompare'
import CompareListButton from '../Products/CompareListButton'

function ProductDetail(props) {
  const { setNavbarType } = useContext(AuthContext)
  // 將該商品所有資料存進陣列
  const [p_detailData, setP_detailData] = useState([])
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
  // 拿到url上的商品ID
  const { product_id, product_category } = useParams()
  //向資料庫拿取資料
  const getProductDetails = async () => {
    axios
      .post(PRODUCT_DETAIL_API, { product_id, product_category })
      .then((res) => {
         console.log('detailData',res.data)
        setP_detailData(res.data)
      })
  }

  useEffect(() => {
    // console.log('V00:',product_category)
    getProductDetails()
    setNavbarType('dark')
  }, [])
  // console.log('V00:',product_category)


  return (
    <>
      <Navbar />
      <CompareListButton />
      <ProductCompare
        productType={product_category}
      />
      <ProductDetailsBasic p_detailData={p_detailData} />

      <PriductDetailComments p_detailData={p_detailData}/>

 
    </>
  )
}

export default ProductDetail
