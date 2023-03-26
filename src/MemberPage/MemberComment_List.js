import React,{useContext,useEffect,useState} from 'react'
import Navbar from '../component/Navbar/index'
import MeberPage_Sidebar from './MemberPageComponent/MeberPage_Sidebar'
import { GET_HISTORY_COMMEND } from '../component/LoginApi'
import AuthContext from '../Contexts/AuthContext'
import axios from 'axios'
import Rating from '@mui/material/Rating'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import MemberComment_Detail from './MemberComment_Detail'
import MemberNav2 from './MemberPageComponent/MemberNav2'
import MemberNavsec from './MemberPageComponent/MemberNavsec'

function MemberComment_List() {
  const navigation = useNavigate()
  const {memberAuth} = useContext(AuthContext)
  const [hisComment,setHsComment] = useState([])
  const {p_comment_id}=useParams()
  // 拿取歷史留言
  const getHistoryComment = async ()=>{

    const result = await axios.post(GET_HISTORY_COMMEND,{
      member_id:memberAuth.memberId
    })
    console.log(result);
    setHsComment(result.data)

  }

  useEffect(()=>{
    getHistoryComment()
  },[])
  return (
    <>
      <Navbar />
      <MemberNavsec/>
      <div className="member_body">
        <MeberPage_Sidebar />

        

        <div className="member_container ">
          <div className="now_memberPage">歷史評價</div>

          {p_comment_id=='li'?
          <>
          <table className="member_List member_mobile_hidden">
            <thead>
              <tr>  
                <th>訂單編號</th>
                <th>商品名稱</th>
                <th>評價星數</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
            {hisComment.length>0 ?
            hisComment.map((v,i)=>{
              return(
              <tr key={v.p_comment_id}>
                <td>{v.order_id}</td>
                <td>{v.product_name}</td>
                <td>
                  {/* 星星 */}
                  {v.star?<Rating name="read-only" value={v.star} readOnly />
                  :<div>尚未評價</div>}
                 
                </td>

                <td>
                  <button className="memberPage_button view_more_btn"
                  onClick={(e)=>{
                    e.preventDefault()
                    navigation(`/member_page/membercomment_list/${v.p_comment_id}`,{state:{p_comment_id:v.p_comment_id}})

                  }}>
                   {v.comment_done?'查看更多':<><i className="fa-regular fa-pen-to-square"></i> 編輯</>} 
                  </button>
                </td>
              </tr>)

              
            }) :<tr></tr>}
             

             
            </tbody>
          </table>
<table  className="member_mobile_show mobile_member_List">
          {hisComment.length>0 ?
            hisComment.map((v,i)=>{
              return(
          
            <tbody key={v.p_comment_id}>
              <tr>
                <td>訂單編號:</td>
                <td>{v.order_id}5</td>
              </tr>
              <tr>
 
                <td>{v.product_name}</td>
              </tr>
              <tr>
                <td>評價星數:</td>
                <td>
                {v.star?<Rating name="read-only" value={v.star} readOnly />
                  :<div>尚未評價</div>}
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                <button className="memberPage_button view_more_btn"
                  onClick={(e)=>{
                    e.preventDefault()
                    navigation(`/member_page/membercomment_list/${v.p_comment_id}`,{state:{p_comment_id:v.p_comment_id}})

                  }}>
                   {v.comment_done?'VEIW MORE':<><i className="fa-regular fa-pen-to-square"></i> EDIT</>} 
                  </button>
                </td>
              </tr>
            </tbody>

          )}):<tbody><tr></tr></tbody>}</table></>:<MemberComment_Detail/>}
          
       
        </div>
      </div>
      <MemberNav2 />
    </>
  )
}

export default MemberComment_List
