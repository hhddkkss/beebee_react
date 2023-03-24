import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Home.css'
import axios from 'axios'

function Home4ads() {
  const navigation = useNavigate()
  const [data, setDate] = useState([])
  const geHometData = async () => {
    const r = await axios
      .get('http://localhost:3003/home_page/home_product')
      .then((r) => {
        // console.log('a01', r.data, 'response', r)
        setDate(r.data)
      })
  }
  useEffect(() => {
    ;(async () => {
      const r = await axios.get('http://localhost:3003/home_page/home_product')
      console.log(r.data)
      setDate(r.data)
    })()
  }, [])
  useEffect(() => {}, [data])

  return (
    <>
      {data.length > 0 ? (
        <Fragment key={data.product_total}>
          <div className="container p-0">
            <div className="row g-0 my-2">
              <div className="col-4">
                <div className="home_ad1 d-flex">
                  <div className="home_ad_1">
                    <p className="home_ad_1-issue">{data[0].product_name}</p>
                    <p className="home_ad_1-price">{data[0].product_price}</p>
                    <button
                      className="home_ad_1_check"
                      type="submit"
                      onClick={() => {
                        navigation('/product_detail/1/1')
                      }}
                    >
                      check →
                    </button>
                  </div>
                  <div className="home_ad1_right_picture">
                    <img
                      className="home_ad1_img"
                      src={`images/${data[0].product_pic[0]}`}
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
                      src={`images/${data[1].product_pic[0]}`}
                      alt="ad2"
                    />
                  </div>
                  <div className="home_ad_2">
                    <p className="home_ad_2_issue">{data[1].product_name}</p>
                    <p className="home_ad_2_price">{data[1].product_price}</p>
                    <button
                      className="home_ad_2-check"
                      type="submit"
                      onClick={() => {
                        navigation('/product_detail/2/1')
                      }}
                    >
                      check →
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-4 col-sm-5 p-0">
                <div className="d-flex home_ad3">
                  <div className="home_ad_3">
                    <p className="home_ad_3_issue">{data[2].product_name}</p>
                    {/* <p className="home_ad_3_word">New generation</p> */}
                    <p className="home_ad_3_price">{data[2].product_price}</p>
                    <button
                      className="home_ad_3-check"
                      type="submit"
                      onClick={() => {
                        navigation('/product_detail/3/1')
                      }}
                    >
                      check →
                    </button>
                  </div>
                  <div className="home_ad3_picture">
                    <img
                      className="home_ad3_img"
                      src={`images/${data[2].product_pic[1]}`}
                      alt="ad3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-0">
            <div className="row g-0">
              <div className="col-4 col-sm-6 p-0">
                <div className="flex-column d-sm-flex home_ad4">
                  <div className="home_ad_4">
                    <p className="home_ad_4_issue">{data[3].product_name}</p>
                    <p className="home_ad_4_price">{data[3].product_price}</p>
                    <button
                      className="home_ad_4_check"
                      type="submit"
                      onClick={() => {
                        navigation('product_detail/4/1')
                      }}
                    >
                      check →
                    </button>
                  </div>
                  <div className="home_ad4_picture">
                    <img
                      className="home_ad4_img"
                      src={`images/${data[3].product_pic[1]}`}
                      alt="ad4"
                    />
                  </div>
                </div>
              </div>
              <div className="col-4 col-sm-3 px-2">
                <div className="flex-column d-sm-flex home_ad5">
                  <div className="home_ad_5">
                    <p className="home_ad_5_issue">{data[4].product_name}</p>
                    <p className="home_ad_5_price">{data[4].product_price}</p>
                    <button
                      className="home_ad_5_check"
                      type="submit"
                      onClick={() => {
                        navigation('/product_detail/5/1')
                      }}
                    >
                      check →
                    </button>
                  </div>
                  <div className="home_ad5_picture">
                    <img
                      className="home_ad5_img"
                      src={`images/${data[4].product_pic[1]}`}
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
                      src={`images/${data[5].product_pic[1]}`}
                      alt="ad6"
                    />
                  </div>
                  <div className="home_word_div">
                    <p className="home_ad_6_issue">{data[5].product_name}</p>
                    <p className="home_ad_6_price">{data[5].product_price}</p>
                    <button
                      className="home_ad_6-check"
                      type="submit"
                      onClick={() => {
                        navigation('/product_detail/6/1')
                      }}
                    >
                      check →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        ''
      )}
    </>
  )
}

export default Home4ads
