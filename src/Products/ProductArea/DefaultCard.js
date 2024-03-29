import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../Contexts/AuthContext'
import ProductFunctionContext from '../../Contexts/ProductFunctionContext'
import { ADD_CART_ITEM } from '../../component/LoginApi'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'

function DefaultCard({ productsDisplay }) {
  const navigation = useNavigate()

  const {
    pageNow,
    favorites,
    setProducts,
    toggleLiked,
    products,
    handleAddOrDeleteFavorite,
    comparedList,
    toggleCompared,
    handleAddOrDeleteCompared,
    getCartData,
    cartPId,
    getFavorites,
    reGetFavorites,
    favoritePId,
  } = useContext(ProductFunctionContext)

  //modal style
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#222222de',
    color: '#fff',
    // border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: '3px',
  }

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const { memberAuth } = useContext(AuthContext)

  //render

  const [render, setRender] = useState(false)
  //  寫進購物車資料庫
  const addToCart = async (product_id) => {
    if (memberAuth.authorized && memberAuth.memberId) {
      const member_id = memberAuth.memberId

      await axios.post(ADD_CART_ITEM, {
        member_id: member_id,
        product_id: product_id,
      })
      await setRender(!render)
    } else {
      handleOpen()
    }
  }

  useEffect(() => {
    getCartData()
    getFavorites(memberAuth.memberId)
  }, [render, reGetFavorites])

  return (
    <>
      <div className="row row-cols-lg-5">
        {productsDisplay[pageNow - 1] &&
          productsDisplay[pageNow - 1].map((v, i) => {
            return (
              <div className="col-6" key={v.product_id}>
                <div className="my-card">
                  <div className="card-top">
                    <div className="img-wrap">
                      <Link
                        to={
                          '/product_detail/' +
                          v.product_id +
                          '/' +
                          v.product_category_id
                        }
                      >
                        <img
                          src={'/images/' + v.product_pic.split(',')[0]}
                          alt=""
                        />
                      </Link>
                    </div>

                    <i
                      className={
                        favoritePId.includes(v.product_id)
                          ? 'fa-solid fa-heart active'
                          : 'fa-regular fa-heart'
                      }
                      onClick={() => {
                        if (memberAuth.memberId) {
                          handleAddOrDeleteFavorite(
                            memberAuth.memberId,
                            v.product_id
                          )
                        } else {
                          handleOpen()
                        }
                      }}
                    ></i>
                  </div>
                  <div className="card-bottom">
                    <h3>{v.product_name}</h3>
                    <div className="card-text">
                      <p
                        className="original"
                        onClick={() => {
                          //測試用
                          console.log(v.isCompared)
                        }}
                      >
                        {v.product_price.toLocaleString()}
                      </p>
                      <p className="discount">
                        {(v.product_price - 1000).toLocaleString()}
                      </p>
                      <div className="compare-and-cart">
                        {localStorage.getItem('comparedList') &&
                        JSON.parse(
                          localStorage.getItem('comparedList')
                        ).includes(v.product_id) ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setProducts(
                                toggleCompared(products, v.product_id)
                              )

                              handleAddOrDeleteCompared(v.product_id)
                            }}
                          >
                            <circle cx="10" cy="10" r="10" fill="#F3D775" />
                            <path
                              d="M6.234 7.272V8.924H9.762V7.272H6.234ZM5.226 3.268V15.042L6.962 14.636V3.268H5.226ZM3.448 14.23L3.924 15.966C5.66 15.574 7.956 15.084 10.084 14.594L9.916 12.942C7.62 13.446 5.114 13.95 3.448 14.23ZM15.208 6.18C14.144 6.894 12.548 7.762 11.078 8.322C11.288 8.686 11.554 9.274 11.652 9.666C13.192 9.106 14.956 8.392 16.384 7.636L15.208 6.18ZM10.574 3.268V13.488C10.574 15.476 11.022 16.05 12.66 16.05C12.982 16.05 14.256 16.05 14.592 16.05C16.104 16.05 16.538 15.14 16.72 12.746C16.244 12.634 15.544 12.326 15.138 12.018C15.054 13.936 14.97 14.426 14.438 14.426C14.172 14.426 13.15 14.426 12.912 14.426C12.38 14.426 12.31 14.314 12.31 13.502V3.268H10.574Z"
                              fill="#233A66"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={() => {
                              setProducts(
                                toggleCompared(products, v.product_id)
                              )
                              handleAddOrDeleteCompared(v.product_id)
                            }}
                          >
                            <circle
                              cx="10"
                              cy="10"
                              r="9.5"
                              fill="#1D2D64"
                              stroke="#233A66"
                            />
                            <path
                              d="M6.234 7.272V8.924H9.762V7.272H6.234ZM5.226 3.268V15.042L6.962 14.636V3.268H5.226ZM3.448 14.23L3.924 15.966C5.66 15.574 7.956 15.084 10.084 14.594L9.916 12.942C7.62 13.446 5.114 13.95 3.448 14.23ZM15.208 6.18C14.144 6.894 12.548 7.762 11.078 8.322C11.288 8.686 11.554 9.274 11.652 9.666C13.192 9.106 14.956 8.392 16.384 7.636L15.208 6.18ZM10.574 3.268V13.488C10.574 15.476 11.022 16.05 12.66 16.05C12.982 16.05 14.256 16.05 14.592 16.05C16.104 16.05 16.538 15.14 16.72 12.746C16.244 12.634 15.544 12.326 15.138 12.018C15.054 13.936 14.97 14.426 14.438 14.426C14.172 14.426 13.15 14.426 12.912 14.426C12.38 14.426 12.31 14.314 12.31 13.502V3.268H10.574Z"
                              fill="#F4F4F4"
                            />
                          </svg>
                        )}

                        <i
                          className={
                            cartPId.includes(v.product_id)
                              ? 'fa-solid fa-cart-shopping active'
                              : 'fa-solid fa-cart-shopping'
                          }
                          onClick={() => {
                            addToCart(v.product_id)
                          }}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <p id="child-modal-description">請登入再進行操作</p>
          <button
            className="btn btn-cancel"
            onClick={() => {
              navigation('/member_login')
            }}
            style={{ color: 'gray' }}
          >
            登入
          </button>
        </Box>
      </Modal>
    </>
  )
}

export default DefaultCard
