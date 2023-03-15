import { useEffect, useState, Fragment } from 'react'
import '../styles/Home.css'
import axios from 'axios'

function Home4ads() {
  const [data, setDate] = useState([])
  useEffect(() => {
    ;(async () => {
      const r = await axios.get('http://localhost:3009/home_page/home_product')
      console.log(r.data)
      setDate(r.data)
    })()
  }, [])
  return (
    <>
      {data.map((v, i) => {
        console.log(v[0].product_name)
        return (
          <Fragment key={v[0].product_id}>
            <div className="container p-0">
              <div className="row g-0 my-2">
                <div className="col-4">
                  <div className="home_ad1 d-flex">
                    <div className="home_ad_1">
                      <p className="home_ad_1-issue">{v[0].product_name}</p>
                      <p className="home_ad_1-price">{v[0].product_price}</p>
                      <button className="home_ad_1_check" type="submit">
                        check →
                      </button>
                    </div>
                    <div className="home_ad1_right_picture">
                      <img
                        className="home_ad1_img"
                        src={`images/${v[0].product_pic}`}
                        alt="ad1"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-4 col-sm-3 px-2">
                  <div className="home_ad_2">
                    <div className="home_ad2_picture">
                      <img
                        className="home_ad2_img"
                        src={`images/${v[1].product_pic}`}
                        alt="ad2"
                      />
                    </div>
                    <div className="home_ad_2">
                      <p className="home_ad_2_issue">{v[1].product_name}</p>
                      <p className="home_ad_2_price">{v[1].product_price}</p>
                      <button className="home_ad_2-check" type="submit">
                        check →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-4 col-sm-5 p-0">
                  <div className="d-flex home_ad3">
                    <div className="home_ad_3">
                      <p className="home_ad_3_issue">{v[2].product_name}</p>
                      {/* <p className="home_ad_3_word">New generation</p> */}
                      <p className="home_ad_3_price">{v[2].product_price}</p>
                      <button className="home_ad_3-check" type="submit">
                        check →
                      </button>
                    </div>
                    <div className="home_ad3_picture">
                      <img
                        className="home_ad3_img"
                        src={`images/${v[2].product_pic}`}
                        alt="ad3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )
      })}
      {data.map((v, i) => {
        return (
          <Fragment key={v[0].product_id}>
            <div className="container p-0">
              <div className="row g-0">
                <div className="col-4 col-sm-6 p-0">
                  <div className="flex-column d-sm-flex home_ad4">
                    <div className="home_ad_4">
                      <p className="home_ad_4_issue">{v[4].product_name}</p>
                      {/* <p className="home_ad_4_word">精緻又防水</p> */}
                      <p className="home_ad_4_price">{v[4].product_price}</p>
                      <button className="home_ad_4_check" type="submit">
                        check →
                      </button>
                    </div>
                    <div className="home_ad4_picture">
                      <img
                        className="home_ad4_img"
                        src={`images/${v[4].product_pic}`}
                        alt="ad4"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4 col-sm-3 px-2">
                  <div className="flex-column d-sm-flex home_ad5">
                    <div className="home_ad_5">
                      <p className="home_ad_5_issue">{v[5].product_name}</p>
                      <p className="home_ad_5_price">{v[5].product_price}</p>
                      <button className="home_ad_5_check" type="submit">
                        check →
                      </button>
                    </div>
                    <div className="home_ad5_picture">
                      <img
                        className="home_ad5_img"
                        src={`images/${v[5].product_pic}`}
                        alt="ad5"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-4 col-sm-3 p-0 home_ad_61">
                  <div className="flex-column">
                    <div className="home_ad6_div">
                      <img
                        className="home_ad6_img"
                        src={`images/${v[3].product_pic}`}
                        alt="ad6"
                      />
                    </div>
                    <div className="home_word_div">
                      <p className="home_ad_6_issue">{v[5].product_name}</p>
                      <p className="home_ad_6_price">{v[5].product_price}</p>
                      <button className="home_ad_6-check" type="submit">
                        check →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )
      })}
    </>
  )
}

export default Home4ads
