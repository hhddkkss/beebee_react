import React, { useEffect, useState, useContext } from 'react'
import ProductFunctionContext from '../Contexts/ProductFunctionContext'
import Rating from '@mui/material/Rating'

function ProductDetailsBasic({ p_detailData }) {
  //   const { p_detailData } = props

  const [detailMainPic, setDetailMainPic] = useState('')
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

  // 點擊圖片更換大圖url
  const changeMainPic = (e) => {
    // console.log(e.target.src)
    setDetailMainPic(e.target.src)
  }

  useEffect(() => {
    if (p_detailData.length > 0) {
      setDetailMainPic('/images/' + p_detailData[0].product_pic.split(',')[0])
    }
  }, [p_detailData])

  return (
    <>
      {p_detailData
        .filter((v, i) => {
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
                      {localStorage.getItem('favorites') && JSON.parse(localStorage.getItem('favorites')).includes(v.product_id) ? (
                      <i
                        className="fa-solid fa-heart fa-xl"
                        onClick={() => {
                          handleAddOrDeleteFavorite(v.product_id)
                        }}
                      ></i>
                    ) : (
                      <i
                        className="fa-regular fa-heart fa-xl"
                        onClick={() => {
                          handleAddOrDeleteFavorite(v.product_id)
                        }}
                      ></i>
                    )}
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
                          src={'/images/' + v.product_pic.split(',')[1]}
                          alt="product_picture2 product_picture_little1"
                          onClick={(e) => {
                            changeMainPic(e)
                          }}
                        />
                      </div>
                      <div className="col-2 p-0">
                        <img
                          className="product_small_pic"
                          src={'/images/' + v.product_pic.split(',')[2]}
                          alt="product_picture3"
                          onClick={(e) => {
                            changeMainPic(e)
                          }}
                        />
                      </div>
                      <div className="col-2 p-0">
                        <img
                          className="product_small_pic"
                          src={'/images/' + v.product_pic.split(',')[3]}
                          alt="product_picture4"
                          onClick={(e) => {
                            changeMainPic(e)
                          }}
                        />
                      </div>
                      <div className="col-2 p-0">
                        <img
                          className="product_small_pic"
                          src={'/images/' + v.product_pic.split(',')[4]}
                          alt="product_picture5"
                          onClick={(e) => {
                            changeMainPic(e)
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
                {/* <div className="product_bar">商品評論區</div>
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
                </div> */}
              </div>
            </div>
          )
        })}
    </>
  )
}

export default ProductDetailsBasic
