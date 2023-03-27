import React,{useContext,useEffect,useState} from 'react'
import Navbar from '../component/Navbar'
import './../styles/Event.css'
import axios from 'axios'
import AuthContext from '../Contexts/AuthContext'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useNavigate } from 'react-router-dom'
import Animation from '../Animation/Animation'

function EventPage() {
  const navigation= useNavigate()
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
 //modal style
 const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#222222de',
  color: '#fff',
  // border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: '3px',
}

const [open, setOpen] = useState(false)
const handleOpen = () => {
  setOpen(true)
}
const handleClose = () => {
  setOpen(false)
}



  useEffect(()=>{
    setNavbarType('dark')
    getMemberAlreadyHas()
  },[])
  return (
    <>
    <Animation/>
       <Navbar />
      <div className="event_head">
        <div className="evnet_word">
          你不能錯過的 BEEbeE 優惠
        </div>


        <div className="coupon_area">


          <div className="coupon_card" style={{background:'url(http://localhost:3003/event/coupon_orange.png)'}}>
            <div className="coupon_button_area">
              <div className="title">BEEbeE <br/>COUPON</div>
              {alreadyHas.includes('1')?<> <button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              e.preventDefault()
            }}>
               <i className='fa-solid fa-clipboard-check'></i>
                    已領取
                </button></>:<><button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              if(memberAuth.authorized){
                getCoupon(1)
                setTimeout(()=>{
                  getMemberAlreadyHas()
                },10)
              }else{handleOpen()}
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

              {alreadyHas.includes('2')?<> <button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              e.preventDefault()
            }}>
               <i className='fa-solid fa-clipboard-check'></i>
                    已領取
                </button></>:<><button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              if(memberAuth.authorized){
                getCoupon(2)
                setTimeout(()=>{
                  getMemberAlreadyHas()
                },10)
              }else{handleOpen()}
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
              {alreadyHas.includes('3')?<> <button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              e.preventDefault()
            }}>
               <i className='fa-solid fa-clipboard-check'></i>
                    已領取
                </button></>:<><button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              if(memberAuth.authorized){
                getCoupon(3)
                setTimeout(()=>{
                  getMemberAlreadyHas()
                },10)
              }else{handleOpen()}
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

              {alreadyHas.includes('4')?<> <button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              e.preventDefault()
            }}>
               <i className='fa-solid fa-clipboard-check'></i>
                    已領取
                </button></>:<><button className="btn coupon_check_btn bg_pink"
            onClick={(e)=>{
              if(memberAuth.authorized){
                getCoupon(4)
                setTimeout(()=>{
                  getMemberAlreadyHas()
                },10)
              }else{handleOpen()}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <p id="child-modal-description">請登入再進行操作</p>
          <button
            className="btn btn-cancel"
            onClick={() => {
              navigation('/member_login')
            }}
            style={{ color: 'gray' }}
          >
            登入
          </button>
        </Box>
      </Modal>
    </>
  )
}

export default EventPage