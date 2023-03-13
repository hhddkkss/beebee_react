import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'
import './../styles/Product_detail.css'
import AuthContext from '../Contexts/AuthContext'
import Navbar from '../component/Navbar'
import { PRODUCT_DETAIL_API } from '../component/LoginApi'
import axios from 'axios'

function ProductDetail(props) {
  const { setNavbarType } = useContext(AuthContext)
  // 將該商品所有資料存進陣列
  const [p_detailData, setP_detailData] = useState([])
  const [p_detailDataF, setP_detailDataF] = useState([])
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
        setP_detailDataF([res.data[0]])
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
      {p_detailDataF.map((v, i) => {
        return (
          <div key={v.product_id} className="product_details_container">
            {/* 商品開頭 */}
            <div className="container">
              <div className="row d-block d-sm-flex">
                <div className="product_left p-0">
                  <div className="product_picture">
                    <img
                      className="product_main_pic"
                      src={'/images/' + v.product_pic.split(',')[0]}
                      alt="product_picture"
                    />
                  </div>
                  <div className="row g-0 product_picture_little">
                    <div className="col-2 p-0">
                      <img
                        className="product_small_pic"
                        src={'/images/' + v.product_pic.split(',')[1]}
                        alt="product_picture1"
                      />
                    </div>
                    <div className="col-2 p-0">
                      <img
                        className="product_small_pic"
                        src={'/images/' + v.product_pic.split(',')[2]}
                        alt="product_picture2 product_picture_little1"
                      />
                    </div>
                    <div className="col-2 p-0">
                      <img
                        className="product_small_pic"
                        src={'/images/' + v.product_pic.split(',')[3]}
                        alt="product_picture3"
                      />
                    </div>
                    <div className="col-2 p-0">
                      <img
                        className="product_small_pic"
                        src={'/images/' + v.product_pic.split(',')[4]}
                        alt="4"
                      />
                    </div>
                  </div>
                </div>
                <div className="product_right">
                  <div className="product_issue">{v.product_name}</div>
                  <div className="product_right_content ">
                    <div>
                      {/* <span className="product_word1">4.0</span>
                    <span className="product_evaluate">158</span>
                    <span className="product_evaluate2">評價</span>*/}
                      <span className="product_word1">熱銷中</span>
                      {/* <span className="product_evaluate2">已售出</span> */}
                    </div>
                    <div className="product_price">
                      <span>{v.product_price}</span>
                    </div>
                    <div className="product_transport">
                      {/* <span className="product_transport1">運送: 宅配</span> */}
                    </div>
                    <div className="product_count">
                      <span className="">數量</span>
                      <span className="product_count1">
                        <button className="product_count_button">
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <span>1</span>
                        <button className="product_count_button">
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
                      <button className="compare_type_btn start">
                        開始比價!
                      </button>
                      <button
                        className="add_To_Cart"
                        onClick={() => {
                          handleAddOrDeleteCart(v.product_id, 1)
                        }}
                      >
                        <i className="fa-solid fa-cart-shopping d-inline"></i>
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
                  <a className="product_a" href="#">
                    比比精選
                  </a>
                  <a className="product_a" href="#">
                    apple
                  </a>
                  <a className="product_a" href="#">
                    Iphone
                  </a>
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
              <div className="product_introduce">介紹商品</div>
              <div className="product_bar">商品評論區</div>
              <div className="product_commentarea">
                <div>
                  <span className="product_commentarea_word">4.0 </span>
                  <span className="product_commentarea_word2">/ 5</span>
                  {/* <!--星星的位置  --> */}
                </div>
                <div className="product_commentarea_position">
                  <div className="row g-0 product_commentarea_">
                    <div className="col">
                      <label className="select">
                        <input
                          type="radio"
                          name="choose"
                          value="1"
                          className="input_0"
                        />
                        <span className="product_commentarea_tatal">全部</span>
                      </label>
                    </div>
                    <div className="col d-none d-sm-block">
                      <label className="select">
                        <input
                          type="radio"
                          name="choose"
                          value="2"
                          className="input_0"
                        />
                        <span className="product_commentarea_tatal">1星</span>
                      </label>
                    </div>
                    <div className="col d-none d-sm-block">
                      <label className="select">
                        <input
                          type="radio"
                          name="choose"
                          value="3"
                          className="input_0"
                        />
                        <span className="product_commentarea_tatal">2星</span>
                      </label>
                    </div>
                    <div className="col d-none d-sm-block">
                      <label className="select">
                        <input
                          type="radio"
                          name="choose"
                          value="4"
                          className="input_0"
                        />
                        <span className="product_commentarea_tatal">3星</span>
                      </label>
                    </div>
                    <div className="col d-none d-sm-block">
                      <label className="select">
                        <input
                          type="radio"
                          name="choose"
                          value="5"
                          className="input_0"
                        />
                        <span className="product_commentarea_tatal">4星</span>
                      </label>
                    </div>
                    <div className="col d-none d-sm-block">
                      <label className="select">
                        <input
                          type="radio"
                          name="choose"
                          value="6"
                          className="input_0"
                        />
                        <span className="product_commentarea_tatal">5星</span>
                      </label>
                    </div>
                    <div className="col">
                      <label className="select">
                        <input
                          type="radio"
                          name="choose"
                          value="1"
                          className="input_0"
                        />
                        <span className="product_commentarea_tatal">
                          附上照片
                        </span>
                      </label>
                    </div>
                    <div className="col">
                      <label className="select">
                        <input
                          type="radio"
                          name="choose"
                          value="1"
                          className="input_0"
                        />
                        <span className="product_commentarea_tatal">
                          附上評論
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      {/* 評論卡片區 */}
      <div className="container product_comment_area">
        {p_detailData.map((v, i) => {
          {
            /* 評論卡片 */
          }
          return (
            <div kay={v.id} className="row product_memeber_row">
              <div className="col-2 product_memeber">
                <img
                  className="comment_card_avatar"
                  src="https://teameowdev.files.wordpress.com/2016/04/avatar24-01.png?w=640"
                  alt="member"
                />
              </div>
              <div className="col-10 product_memeber_detail">
                <div className="commemt_card_account">account</div>
                {/* <!-- 星星的位置 --> */}
                <div className="product_account_contant">
                  2022-11-22 23:32 {/* v.comment_created_date */}
                </div>
                <div className="commemt_card_content">{v.content}</div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ProductDetail
