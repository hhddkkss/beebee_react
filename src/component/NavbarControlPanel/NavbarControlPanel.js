import React, { useContext } from 'react'
import '../../../src/styles/NavbarControlPanel.css'
import { useNavigate } from 'react-router-dom'
import ProductFunctionContext from '../../Contexts/ProductFunctionContext'

function NavbarControlPanel() {
  const navigation = useNavigate()
  const { setDisplayFavorites, displayFavorites } = useContext(
    ProductFunctionContext
  )
  return (
    <div className="mobile_nav d-sm-none">
      <div className="row g-0">
        <div
          className="col-3"
          onClick={() => {
            navigation('/')
          }}
        >
          <div className="mobile_navcol">
            <p className="m-0">
              <i className="fa-solid fa-house-chimney"></i>
            </p>
            <p className="mobile_word">首頁</p>
          </div>
        </div>
        <div
          className="col-3"
          onClick={() => {
            setDisplayFavorites(!displayFavorites)
            setTimeout(() => {
              navigation('/products')
            }, 500)
          }}
        >
          <div className="mobile_navcol">
            <p className="m-0 NavbarControlPanel_i">
              <i className="fa-solid fa-heart"></i>
            </p>
            <p className="mobile_word">收藏清單</p>
          </div>
        </div>
        <div
          className="col-3"
          onClick={() => {
            navigation('/cart')
          }}
        >
          <div className="mobile_navcol">
            <p className="m-0 NavbarControlPanel_i">
              <i className="fa-solid fa-cart-shopping"></i>
            </p>
            <p className="mobile_word">購物車</p>
          </div>
        </div>

        <div
          className="col-3"
          onClick={() => {
            navigation('/member_page/edit')
          }}
        >
          <div className="mobile_navcol">
            <p className="m-0">
              <i className="fa-solid fa-user"></i>
            </p>
            <p className="mobile_word">會員</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarControlPanel
