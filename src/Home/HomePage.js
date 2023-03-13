import React from 'react'
import Navbar from '../component/Navbar'
import '../styles/Home.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <div ClassName="home_word">
        我的選擇，
        <br />
        自己選。
      </div>
      <input ClassName="home_search" type="text" placeholder="開始比價" />
      <div ClassName="row home_beebeechoose g-0">
        <div ClassName="col-8 p-0">
          <p ClassName="home_beebeechoose_word">BEEBEE CHOOSE!</p>
          <p ClassName="home_beebeechoose_word_issue">
            選物質感，
            <br />
            質感選物。
          </p>
          <p ClassName="home_beebeechoose_word_inline">
            我們是一個希望讓所有人更方便找到自己心中
            <br />
            最喜愛的商品的團隊
            <br />
            而我們的用心希望能傳達給大家
          </p>
        </div>
        <div ClassName="col-4">
          <img
            ClassName="Home"
            src="../../public/images/Home/home2.png"
            alt="beebeechouse"
          />
        </div>
      </div>
      <div ClassName="container">
        <div ClassName="row g-0">
          <div ClassName="col-3 home_four_picture">
            <i ClassName="fa-solid fa-check"></i>
            <p ClassName="home_four_word">方便</p>
            <p ClassName="home_four_word2">convenient</p>
          </div>
          <div ClassName="col-3 home_four_picture">
            <i ClassName="fa-solid fa-bolt"></i>
            <p ClassName="home_four_word">快速</p>
            <p ClassName="home_four_word2">fast</p>
          </div>
          <div ClassName="col-3 home_four_picture">
            <i ClassName="fa-solid fa-tag"></i>
            <p ClassName="home_four_word">低價</p>
            <p ClassName="home_four_word2">low price</p>
          </div>
          <div ClassName="col-3 home_four_picture2">
            <i ClassName="fa-regular fa-star"></i>
            <p ClassName="home_four_word">質感</p>
            <p ClassName="home_four_word2">texture</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
