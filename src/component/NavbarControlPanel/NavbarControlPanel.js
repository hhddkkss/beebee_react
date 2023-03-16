import React from 'react'
import '../../../src/styles/NavbarControlPanel.css'

function NavbarControlPanel() {
  return (
    <div className="mobile_nav d-sm-none">
      <div className="row g-0">
        <div className="col-3">
          <div className="mobile_navcol">
            <p className="m-0">
              <i className="fa-solid fa-house-chimney"></i>
            </p>
            <p className="mobile_word">首頁</p>
          </div>
        </div>
        <div className="col-3">
          <div className="mobile_navcol">
            <p className="m-0 NavbarControlPanel_i">
              <i className="fa-solid fa-heart"></i>
            </p>
            <p className="mobile_word">收藏清單</p>
          </div>
        </div>
        <div className="col-3">
          <div className="mobile_navcol">
            <p className="m-0 NavbarControlPanel_i">
              <i className="fa-solid fa-cart-shopping"></i>
            </p>
            <p className="mobile_word">購物車</p>
          </div>
        </div>

        <div className="col-3">
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
