import React,{useContext,useEffect,useState} from 'react'
import Navbar from '../component/Navbar'
import './../styles/Event.css'
import axios from 'axios'
import AuthContext from '../Contexts/AuthContext'

function EventPage() {
  const {memberAuth,setNavbarType} = useContext(AuthContext)
  const getCoupon= async (couponId)=>{
    if(memberAuth.token&&memberAuth.authorized){
      await axios.get(`http://localhost:3003/event_coupon/get_coupon/${couponId}/${memberAuth.memberId}`).then((res)=>{
        console.log(res);
      })

    }
      }

      const [alreadyHas,setAlreadyHas]=useState([])
  const getMemberAlreadyHas=async()=>{
    if(memberAuth.authorized && memberAuth.token){
      await axios.get(`http://localhost:3003/event_coupon/alreadyHas/${memberAuth.memberId}`).then((res)=>{
        console.log(res);
        setAlreadyHas(res.data)
      })
    }

  }



  useEffect(()=>{
    setNavbarType('dark')
    getMemberAlreadyHas()
  },[])
  return (
    <>
       <Navbar />
      <div className="event_head">
        <div className="evnet_word">
          你不能錯過的 BEEbeE 優惠
        </div>


        <div className="coupon_area">


          <div className="coupon_card" style={{background:'url(http://localhost:3003/event/coupon_orange.png)'}}>
            <div className="coupon_button_area">
              <div className="title">BEEbeE <br/>COUPON</div>
              {alreadyHas.includes('17')?<> <button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              e.preventDefault()
            }}>
               <i className='fa-solid fa-clipboard-check'></i>
                    已領取
                </button></>:<><button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              if(memberAuth.authorized){
                getCoupon(17)
                setTimeout(()=>{
                  getMemberAlreadyHas()
                },10)
              }
            }}>
               <i className="fa-solid fa-check"></i>
                    
                立即領取
                </button></>}
            </div>

            <div className="coupon_content_dis">
              限時免運
              <p>
                無論類型商品金額下單即免運!
              </p>
            </div>


          </div>

          <div className="coupon_card" style={{background:'url(http://localhost:3003/event/coupon_blue.png)'}}>
            <div className="coupon_button_area">
              <div className="title">BEEbeE <br/>COUPON</div>

              {alreadyHas.includes('85')?<> <button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              e.preventDefault()
            }}>
               <i className='fa-solid fa-clipboard-check'></i>
                    已領取
                </button></>:<><button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              if(memberAuth.authorized){
                getCoupon(85)
                setTimeout(()=>{
                  getMemberAlreadyHas()
                },10)
              }
            }}>
               <i className="fa-solid fa-check"></i>
                    
                立即領取
                </button></>}
             
            </div>

            <div className="coupon_content_dis">
              輕鬆購
              <p>
              會員即領500元折價券
              </p>
            </div>


          </div>


        </div>

        <div className="coupon_area">


          <div className="coupon_card" style={{background:'url(http://localhost:3003/event/coupon_blue.png)'}}>
            <div className="coupon_button_area">
              <div className="title">BEEbeE <br/>COUPON</div>
              {alreadyHas.includes('72')?<> <button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              e.preventDefault()
            }}>
               <i className='fa-solid fa-clipboard-check'></i>
                    已領取
                </button></>:<><button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              if(memberAuth.authorized){
                getCoupon(72)
                setTimeout(()=>{
                  getMemberAlreadyHas()
                },10)
              }
            }}>
               <i className="fa-solid fa-check"></i>
                    
                立即領取
                </button></>}
            </div>

            <div className="coupon_content_dis">
              期間限定專屬折扣
              <p>
                4/5日前下單滿額優惠1000元
              </p>
            </div>


          </div>

          <div className="coupon_card" style={{background:'url(http://localhost:3003/event/coupon_orange.png)'}}>
            <div className="coupon_button_area">
              <div className="title">BEEbeE <br/>COUPON</div>

              {alreadyHas.includes('30')?<> <button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              e.preventDefault()
            }}>
               <i className='fa-solid fa-clipboard-check'></i>
                    已領取
                </button></>:<><button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              if(memberAuth.authorized){
                getCoupon(30)
                setTimeout(()=>{
                  getMemberAlreadyHas()
                },10)
              }
            }}>
               <i className="fa-solid fa-check"></i>
                    
                立即領取
                </button></>}
             
            </div>

            <div className="coupon_content_dis">
              四月免運券
              <p>
              耳機單筆滿1000即免運
              </p>
            </div>


          </div>


        </div>
      </div>


      <div className="event_foot">
        
      </div>
    </>
  )
}

export default EventPage