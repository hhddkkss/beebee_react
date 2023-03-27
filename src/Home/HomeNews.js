import { useEffect, useState, Fragment } from 'react'
import '../styles/Home.css'
import axios from 'axios'
import { HOST } from '../component/LoginApi'
import { useNavigate } from 'react-router'

function HomeNews() {
  const navigation = useNavigate()
  const [data, setDate] = useState([])
  useEffect(() => {
    ;(async () => {
      const paper = await axios.get(
        'http://localhost:3003/home_page/home_articles'
      )
      console.log(paper.data)
      setDate(paper.data)
    })()
  }, [])

  return (
    <>
      <div className="container home_news">
        <div className="home_news_issue">NEWS</div>
        <div className="home_news_word">看看大家在討論什麼？</div>
      </div>
      <div className="container">
        <div className="row home_news2">
          {data.map((v, i) => {
            return (
              <Fragment key={v.article_id}>
                <div className="col-sm-4 p-2">
                  <div className="home_news_card">
                    <div className="column">
                      <div className="home_news_card1">
                        <img
                          className="home_news_img"
                          src={HOST + '/articlePic/' + v.article_pic_main}
                          alt="news1"
                          onClick={() => {
                            navigation('/articles/beebeePostNO/' + v.article_id)
                          }}
                        />
                      </div>
                      <div className="home_news_word">
                        <div className="home_news_word1">
                          {v.article_hashtag}
                        </div>
                        <div className="home_news_word2">{v.title}</div>
                        <div className="home_news_word3">{v.content_1}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>

      {/* <div className="home_news_button">
        <button className="home_news_button1"></button>
        <button className="home_news_button2"></button>
        <button className="home_news_button2"></button>
      </div> */}
      <div className="home_news_viewmore">
        <button
          className="home_news_viewmore_"
          type="submit"
          onClick={() => {
            navigation('/articles/front')
          }}
        >
          VIEW MORE
        </button>
      </div>
    </>
  )
}

export default HomeNews
