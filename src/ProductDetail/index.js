import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'
import './../styles/Product_detail.css'
import AuthContext from '../Contexts/AuthContext'
import Navbar from '../component/Navbar'
import { PRODUCT_DETAIL_API } from '../component/LoginApi'
import axios from 'axios'
import Dayjs from 'dayjs'
import ProductDetailsBasic from './ProductDetailsBasic'
import Rating from '@mui/material/Rating'
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
        // console.log(res.data)
        setP_detailData(res.data)
      })
  }

  useEffect(() => {
    console.log(
      'product_id:',
      product_id,
      'product_category:',
      product_category
    )
    getProductDetails()
    setNavbarType('dark')
  }, [])

  return (
    <>
      <Navbar />
      <CompareListButton />
      <ProductCompare productType={product_category} />
      <ProductDetailsBasic p_detailData={p_detailData} />

      {/* 評論區bar */}
      <div className="container product_details_container comment">
        <div className="product_bar">商品評論區</div>
        <div className="product_commentarea">
          <div>
            <span className="product_commentarea_word">4.0 </span>
            <span className="product_commentarea_word2">/ 5</span>
            <Rating name="read-only" value={3} readOnly />
          </div>
          <div className="product_commentarea_position">
            <div className=" product_commentarea_selectors">
              <div className="">
                <button className="btn select product_commentarea_tatal">
                  全部
                </button>
              </div>
              <div className=" d-none d-sm-block">
                <button className="btn select product_commentarea_tatal">
                  1星
                </button>
              </div>
              <div className=" d-none d-sm-block">
                <button className="btn select product_commentarea_tatal">
                  2星
                </button>
              </div>
              <div className="d-none d-sm-block">
                <button className="btn select product_commentarea_tatal">
                  3星
                </button>
              </div>
              <div className=" d-none d-sm-block">
                <button className="btn select product_commentarea_tatal">
                  4星
                </button>
              </div>
              <div className=" d-none d-sm-block">
                <button className="btn select product_commentarea_tatal">
                  5星
                </button>
              </div>
              <div className="">
                <button className="btn select product_commentarea_tatal">
                  附上評論
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 評論卡片區 */}
      <div className="container product_comment_area">
        {p_detailData.length > 1
          ? p_detailData.map((v, i) => {
            {
                /* 評論卡片 */
              }

              return (
                <div key={v.p_comment_id} className="row product_memeber_row">
                  <div className="col-2 product_memeber">
                    <img
                      className="comment_card_avatar"
                      src="https://teameowdev.files.wordpress.com/2016/04/avatar24-01.png?w=640"
                      alt="member"
                    />
                  </div>
                  <div className="col-10 product_memeber_detail">
                    <div className="commemt_card_account">
                      {v.email.split('@')[0]}
                    </div>
                    {/* <!-- 星星的位置 --> */}
                    <div className="product_account_contant">
                      {Dayjs(v.comment_created_at).format('YYYY/MM/DD')}
                    </div>
                    <pre className="commemt_card_content">{v.content}</pre>
                  </div>
                </div>
              )
            })
          : ''}
      </div>
    </>
  )
}

export default ProductDetail
