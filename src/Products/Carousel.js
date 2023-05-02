import React, { useRef, useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import '../styles/component/carousel.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper'

function Carousel() {
  const imgData = [
    {
      id: 1,
      src: './images/product-carousel.png',
      content:
        '擁有優秀的攝影系統、高效能的處理器、長效的電池續航力以及快速的5G 上網速度。選擇 iPhone 13，讓您的生活更輕鬆、更便捷！',
      type: '本週主打商品',
    },
    {
      id: 2,
      src: './images/product-carousel2.png',
      content:
        ' 您是否在尋找一款功能強大、操作簡單且攜帶方便的平板電腦呢？我們的平板電腦擁有先進的處理器、高清的顯示屏幕、長效的電池續航力以及輕便的設計，讓您隨時隨地輕鬆應對工作、娛樂等多種場合。選擇我們的平板電腦，讓您輕鬆享受多重便利！',
      type: '本週主打商品',
    },
    {
      id: 3,
      src: './images/product-carousel3.png',
      content:
        ' 擁有更快速的處理器、更優秀的攝影技術、更長效的電池續航力以及更出色的顯示屏幕。選擇iPhone 14，體驗科技的極致力量！',
      type: '本週主打商品',
    },
  ]

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true, // 動態的pagination
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false, //設置為false 並且在用戶後不會自動播放
        }}
        loop={true} //是否可以循環 最後一張 => 第一張
        navigation={true} // navigation bar
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {imgData.map((img, i) => {
          return (
            <SwiperSlide key={img.id}>
              <img src={img.src} alt="dog" />
              <div className="advertise">
                <div className="advertise-text">
                  <h2>{img.type}</h2>
                  <p>{img.content}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Carousel
