import React, { useContext } from 'react'
import '../../../src/styles/memberNav.css'
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
          className="col-6 navsec"
          onClick={() => {
            navigation('/')
          }}
        >
          <div className="mobile_navcol">
            {/* <p className="m-0">
            <i class="fa-solid fa-clipboard-list fa-lg"></i>
            </p> */}
            <p className="mobile_word">回首頁</p>
          </div>
        </div>

        <div
          className="col-6 navsec"
          onClick={() => {
            setDisplayFavorites(!displayFavorites)
            setTimeout(() => {
              navigation('/member_page/edit')
            })
          }}
        >
          <div className="mobile_navcol">
            {/* <p className="m-0 NavbarControlPanel_i">
              <i className="fa-solid fa-heart"></i>
            </p> */}
            <p className="mobile_word">會員頁</p>
          </div>
        </div>
        {/* <div
          className="col-6"
          onClick={() => {
            navigation('/products')
          }}
        >
          <div className="mobile_navcol">
            <p className="m-0 NavbarControlPanel_ii">
            <i class="fa-solid fa-star fa-lg"></i>
            </p>
            <p className="mobile_word">收藏清單</p>
          </div>
        </div> */}

        {/* <div
          className="col-3"
          onClick={() => {
            navigation('/member_page/membercomment_list/li')
          }}
        >
          <div className="mobile_navcol">
            <p className="m-0 NavbarControlPanel_ii">
              <i className="fa-solid fa-user"></i>
            </p>
            <p className="mobile_word">歷史評價</p>
          </div>
        </div>*/}

      </div>
    </div>
  )
}

export default NavbarControlPanel
