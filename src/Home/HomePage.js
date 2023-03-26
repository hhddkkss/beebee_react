import AuthContext from '../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { React, useEffect, useState, useRef, useContext } from 'react'
import '../styles/Home.css'
import '../styles/home_ver3.css'
import '../styles/mobile_navbar.css'
import axios from 'axios'
import Home4ads from './Home_4ads'
import Navbar from '../component/Navbar/index'
import HomeNews from './HomeNews'
import HomeMap from './HomeMap'
import NavbarControlPanel from '../../src/component/NavbarControlPanel/NavbarControlPanel'

function HomePage() {
  const navigation = useNavigate()
  const { setNavbarType } = useContext(AuthContext)
  useEffect(() => {
    setNavbarType('light')
  }, [])

  return (
    <>
      <Navbar />
      <div className="home">
        <div className="Home_Word">
          我的選擇，
          <br />
          自己選。
        </div>
        <button
          className="home_search"
          type="submit"
          onClick={() => {
            navigation('/products')
          }}
        >
          開始比價
        </button>
      </div>
      <div className="row home_beebeechoose g-0">
        <div className="col-8 p-0">
          <p className="home_beebeechoose_word">BEEBEE CHOOSE!</p>
          <p className="home_beebeechoose_word_issue">
            選物質感，
            <br />
            質感選物。
          </p>
          <p className="home_beebeechoose_word_inline">
            我們是一個希望讓所有人更方便找到自己心中
            <br />
            最喜愛的商品的團隊
            <br />
            而我們的用心希望能傳達給大家
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row g-0">
          <div className="col-3 home_four_picture">
            <i className="fa-solid fa-check"></i>
            <p className="home_four_word">方便</p>
            <p className="home_four_word2">convenient</p>
          </div>
          <div className="col-3 home_four_picture">
            <i className="fa-solid fa-bolt"></i>
            <p className="home_four_word">快速</p>
            <p className="home_four_word2">fast</p>
          </div>
          <div className="col-3 home_four_picture">
            <i className="fa-solid fa-tag"></i>
            <p className="home_four_word">低價</p>
            <p className="home_four_word2">low price</p>
          </div>
          <div className="col-3 home_four_picture2">
            <i className="fa-regular fa-star"></i>
            <p className="home_four_word">質感</p>
            <p className="home_four_word2">texture</p>
          </div>
        </div>
      </div>
      <Home4ads />
      <div className="home_show_ad">
        <div className="home_show_issue">
          輕薄隨行
          <br />
          妝點生活
        </div>
        <div className="home_show_word">
          The questions you ask determine the quality of your life.
          <br />
          -Mr. Self Development
        </div>
        <button
          className="home_show_check"
          type="submit"
          onClick={() => {
            navigation('/product_detail/213/2')
          }}
        >
          check →
        </button>
      </div>
      <HomeNews />
      <div className="row home_wecare g-0">
        <div className="col-6 p-0">
          <div className="home_wecare_left_picture">
            <div className="home_wecare_left_word">WE CARE !</div>
            <div className="home_wecare_left_word2">
              我們在乎每一位客人，
              <br />
              在乎每一個想法，
              <br />
              我們只想給您最好的，
              <br />
              相信您的選擇，
              <br />
              最好的都在BEEbeE。
            </div>
          </div>
        </div>
        <div className="col-6 p-0 d-none d-sm-block">
          <div className="home_wecare_right"></div>
        </div>
      </div>
      <HomeMap />
      <div className="home_end">
        <div className="home_end_word">
          星期一至星期五(正常上班日) :AM 8:30 至 PM 20:00
          <br />
          非服務時間請在語音留言或官網登記，我們將於服務時間盡速與您聯繫其它服務時間如有異動請詳見官網公告,
          謝謝。
          <br />
          售後服務專線 : 0800-777-666
          <br />
          (行動電話請改撥 (02) 2567-3456)
        </div>
        <br />
        <div className="row home_end_button g-0 w-100">
          <div className="col-1">
            <button className="home_end_button1">常見問題</button>
          </div>
          <div className="col-2">
            <button className="home_end_button2">聯絡我們</button>
          </div>
          <div className="home_end_button3 col-8">
            <p>版權所有©2009-2023 BEEbeE。</p>
          </div>
        </div>
      </div>
      <NavbarControlPanel />
      {/* <nav className="mobile_nav navbar-fixed-bottom d-sm-none">
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
              <p className="m-0">
                <i className="fa-solid fa-heart"></i>
              </p>
              <p className="mobile_word">收藏清單</p>
            </div>
          </div>
          <div className="col-3">
            <div className="mobile_navcol">
              <p className="m-0">
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
      </nav> */}
    </>
  )
}

export default HomePage
