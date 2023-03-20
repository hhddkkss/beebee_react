import React, { useEffect, useState, useContext } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'
import AuthContext from '../Contexts/AuthContext'
import Rating from '@mui/material/Rating'
import { PRODUCT_DETAIL_ADD_CART_API,ADD_CART_ITEM } from '../component/LoginApi'
import axios from 'axios'

function ProductDetailsBasic({ p_detailData }) {
  //   const { p_detailData } = props

  const [detailMainPic, setDetailMainPic] = useState('')
  const {
    cartPId,
    getFavorites,
    favoritePId,
    handleAddOrDeleteCompared,
    handleAddOrDeleteFavorite,
    reGetFavorites
  } = useContext(ProductFunctionContext)
  const { memberAuth } = useContext(AuthContext)

  // 點擊圖片更換大圖url
  const changeMainPic = (e) => {
    // console.log(e.target.src)
    setDetailMainPic(e.target.src)
  }

  // 商品數量state
  const [productCount, setProductCount] = useState(1)
  //加按鈕
  function addCount() {
    setProductCount(productCount + 1)
  }
  //減按鈕
  function minusCount() {
    setProductCount(productCount - 1)
  }

  useEffect(() => {
    if (p_detailData.length > 0) {
      setDetailMainPic('/images/' + p_detailData[0].product_pic.split(',')[0])
    }
  }, [p_detailData])

  // 購物車
  const [render, setRender] = useState(false)
  //  寫進購物車資料庫
 


  const addToCart = async (product_id) => {
    const member_id = memberAuth.memberId
    if(member_id!==0){
      await axios.post(PRODUCT_DETAIL_ADD_CART_API,{
          memberId:member_id,
          productId:product_id,
          count:productCount
          })
      await setRender(!render)
    }else{console.log('用戶未登入')}

    
  }

  useEffect(() => {
    getFavorites(memberAuth.memberId)
  }, [render,reGetFavorites])

  return (
    <>
      {p_detailData
        .filter((v1, i) => {
          return i === 0
        })
        .map((v, y) => {
          return (
            <div key={y} className="product_details_container">
              {/* 商品開頭 */}
              <div className="container">
                <div className="row d-block d-sm-flex">
                  <div className="product_left p-0">
                    <div className="product_picture">
                      <img
                        className="product_main_pic"
                        src={detailMainPic}
                        alt="product_picture"
                      />
                      
                        <i
                          className={
                        favoritePId.includes(v.product_id)
                          ? 'fa-solid fa-heart active'
                          : 'fa-regular fa-heart'
                      }
                      onClick={() => {
                        // getFavorites(memberAuth.memberId)
                        handleAddOrDeleteFavorite(
                          memberAuth.memberId,
                          v.product_id
                        )
                      }}
                        ></i>
                      
                    </div>
                    <div className="row g-0 product_picture_little">
                      <div className="col-2 p-0">
                        <img
                          className="product_small_pic"
                          src={'/images/' + v.product_pic.split(',')[0]}
                          alt="product_picture1"
                          onClick={(e) => {
                            changeMainPic(e)
                          }}
                        />
                      </div>
                      <div className="col-2 p-0">
                        <img
                          className="product_small_pic"
                          src={
                            v.product_pic.split(',')[1]
                              ? '/images/' + v.product_pic.split(',')[1]
                              : '/images/detailNoPic.png'
                          }
                          alt="product_picture2 product_picture_little1"
                          onClick={(e) => {
                            if(v.product_pic.split(',')[1]){
                            changeMainPic(e)}
                          }}
                        />
                      </div>
                      <div className="col-2 p-0">
                        <img
                          className="product_small_pic"
                          src={
                            v.product_pic.split(',')[2]
                              ? '/images/' + v.product_pic.split(',')[2]
                              : '/images/detailNoPic.png'
                          }
                          alt="product_picture3"
                          onClick={(e) => {
                            if(v.product_pic.split(',')[2]){
                            changeMainPic(e)}
                          }}
                        />
                      </div>
                      <div className="col-2 p-0">
                        <img
                          className="product_small_pic"
                          src={
                            v.product_pic.split(',')[3]
                              ? '/images/' + v.product_pic.split(',')[3]
                              : '/images/detailNoPic.png'
                          }
                          alt="product_picture4"
                          onClick={(e) => {
                            if(v.product_pic.split(',')[3]){
                            changeMainPic(e)}
                          }}
                        />
                      </div>
                      <div className="col-2 p-0">
                        <img
                          className="product_small_pic"
                          src={
                            v.product_pic.split(',')[4]
                              ? '/images/' + v.product_pic.split(',')[4]
                              : '/images/detailNoPic.png'
                          }
                          alt="product_picture5"
                          onClick={(e) => {
                            if(v.product_pic.split(',')[4]){
                            changeMainPic(e)}
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="product_right">
                    <div className="product_issue">{v.product_name}</div>
                    <div className="product_right_content ">
                      <div>
                        <span className="product_word1">熱銷中</span>
                      </div>
                      <div className="product_price">
                        <span>{v.product_price}</span>
                      </div>
                      <div className="product_transport"></div>
                      <div className="product_count">
                        <span className="">數量</span>
                        <span className="product_count1">
                          <button
                            className="product_count_button"
                            onClick={(e) => {
                              e.preventDefault()
                              minusCount()
                            }}
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <span>{productCount}</span>
                          <button
                            className="product_count_button"
                            onClick={(e) => {
                              e.preventDefault()
                              addCount()
                            }}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </span>
                      </div>
                      <div className="product_count_share">
                        <button className="product_count_line">
                          <i className="fa-brands fa-line"></i>
                        </button>
                        <button className="product_count_facebook">
                          <i className="fa-brands fa-square-facebook"></i>
                        </button>
                      </div>
                      <div className="product_add">
                        <button
                          className="compare_type_btn start"
                          onClick={() => {
                            handleAddOrDeleteCompared(v.product_id)
                          }}
                        >
                          開始比價
                        </button>
                        <button
                          className="add_To_Cart"
                          onClick={() => {
                            addToCart(v.product_id)
                          }}
                        >
                          <i className={
                            cartPId.includes(v.product_id)
                              ? 'fa-solid fa-clipboard-check'
                              : 'fa-solid fa-cart-shopping'
                          }></i>
                          加入購物車
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 商品規格 */}
              <div className="container p-0">
                <div className="product_bar">商品規格</div>
                <div className="product_specification">
                  <div>
                    <span className="product_detail_word">商品分類</span>
                    <span className="product_a">比比精選</span>
                    <span className="product_a">{v.brand_category}</span>
                  </div>
                  <div>
                    <span className="product_detail_word">商品品牌</span>
                    <span className="product_detail_word">apple</span>
                  </div>
                  <div>
                    <span className="product_detail_word">商品狀態</span>
                    <span className="product_detail_word">全新</span>
                  </div>
                </div>
                <div className="product_bar">商品介紹</div>
                <div className="product_introduce">
                  {v.product_detail_content
                    ? v.product_detail_content
                        .split('\r\n\r\n')
                        .map((line, ind) => (
                          <React.Fragment key={ind}>
                            {line}
                            {ind !== v.product_detail_content.length - 1 && (
                              <br />
                            )}
                          </React.Fragment>
                        ))
                    : '暫無產品介紹'}
                </div>
              
              </div>
            </div>
          )
        })}
    </>
  )
}

export default ProductDetailsBasic
