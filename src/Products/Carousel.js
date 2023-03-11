import React from 'react'

function Carousel({carouselRef}) {
  return (
    <>
      <section className="my-carousel">
        <ul className="wall" ref={carouselRef}>
          <li className="my-carousel-item">
            <img src="./images/product-carousel.png" alt="" />
            <div className="advertise">
              <img src="./images/tape.png" className="tape" alt="" />
              <div className="advertise-text">
                <h2>本週主打商品</h2>
                <p>
                  擁有優秀的攝影系統、高效能的處理器、長效的電池續航力以及快速的
                  5G 上網速度。選擇 iPhone 13，讓您的生活更輕鬆、更便捷！
                </p>
              </div>
            </div>
          </li>
          <li className="my-carousel-item">
            <img src="./images/product-carousel2.png" alt="" />
            <div className="advertise">
              <img src="./images/tape.png" className="tape" alt="" />
              <div className="advertise-text">
                <h2>本週主打商品</h2>
                <p>
                  您是否在尋找一款功能強大、操作簡單且攜帶方便的平板電腦呢？我們的平板電腦擁有先進的處理器、高清的顯示屏幕、長效的電池續航力以及輕便的設計，讓您隨時隨地輕鬆應對工作、娛樂等多種場合。選擇我們的平板電腦，讓您輕鬆享受多重便利！
                </p>
              </div>
            </div>
          </li>
          <li className="my-carousel-item">
            <img src="./images/product-carousel3.png" alt="" />
            <div className="advertise">
              <div className="advertise-text">
                <h2>本週主打商品</h2>
                <p>
                  擁有更快速的處理器、更優秀的攝影技術、更長效的電池續航力以及更出色的顯示屏幕。選擇
                  iPhone 14，體驗科技的極致力量！
                </p>
              </div>
            </div>
          </li>
          <li className="my-carousel-item">
            <img src="./images/product-carousel.png" alt="" />
            <div className="advertise">
              <img src="./images/tape.png" className="tape" alt="" />
              <div className="advertise-text">
                <h2>本週主打商品</h2>
                <p>
                  擁有優秀的攝影系統、高效能的處理器、長效的電池續航力以及快速的
                  5G 上網速度。選擇 iPhone 13，讓您的生活更輕鬆、更便捷！
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Carousel
