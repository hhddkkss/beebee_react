import React,{useState,useEffect, useContext,Fragment} from 'react'
import {GET_ARTICLE_COMMENT,POST_ARTICLE_COMMENT } from '../component/LoginApi'
import { useLocation, useParams,useNavigate } from 'react-router-dom'
import HashTagColor from './HashTagColor'
import axios from 'axios'
import Dayjs from 'dayjs'
import AuthContext from '../Contexts/AuthContext'
import ArticleSideBar from './ArticleSideBar'

function ArticleMember({addDelLikeArt,likeIdList,artLikeList}) {
    const navigation = useNavigate()
    const {article_id}=useParams
    const {memberAuth}=useContext(AuthContext)
    // 篩選器
    const [showMemData,setShowMemData]= useState(artLikeList)
    function getShowMemData (x){
         setShowMemData(artLikeList.filter((v,i)=>{
            return v.article_category_id==x
        }))
    }

    // 篩選按鈕className
    const [memNowCate,setMemNowCate]=useState(4)
    const changeMemArtCateBtn=(x)=>{
       if(x == memNowCate) {return 'btn category_radio active article_mb_hidden'}
       else{return 'btn category_radio article_mb_hidden'}
    }
    
  return (
    <>
        <div className="article_page">
            

            <div className="articles_container">
                <div className="article_member_page_title like_posts article_mb_hidden"><span>收藏</span></div>
                
               
           
                  <div className="artcles_area">
                    <div className="article_control_btn">
                        <div className="">
                            <select name="article_order" id="article_order">
                                <option value="" disabled>文章排序</option>
                                <option value="oldToNew">由舊至新</option>
                                <option value="newToOld">由新至舊</option>
                            </select>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                            <label htmlFor="article_order">文章分類 
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-3.67644e-08 9.15893L-4.00349e-07 0.841071C-4.33042e-07 0.0931635 0.93026 -0.28079 1.47261 0.246939L5.74678 4.40587C6.08441 4.73439 6.08441 5.26561 5.74678 5.59064L1.47261 9.75306C0.93026 10.2808 -4.0723e-09 9.90684 -3.67644e-08 9.15893Z" fill="black"/>
                                </svg></label>
                            <button onClick={()=>{
                                setShowMemData(artLikeList)
                                setMemNowCate(4)
                            }} className={changeMemArtCateBtn(4)}>
                               全部
                            </button>
                            <button onClick={()=>{
                                getShowMemData(1)
                                setMemNowCate(1)
                            }} className={changeMemArtCateBtn(1)}>
                               BEE新聞
                            </button>
                            <button onClick={()=>{
                                getShowMemData(2)
                                setMemNowCate(2)
                            }} className={changeMemArtCateBtn(2)}>
                               推薦
                            </button>
                            <button onClick={()=>{
                                getShowMemData(3)
                                setMemNowCate(3)
                            }} className={changeMemArtCateBtn(3)}>
                                分享
                            </button>
                            
                        </div>
                       
                    </div>

                    {showMemData[0]?
                        <div className="article_list">

                        
                            {showMemData.map((v,i)=>{return(
                                <div key={v.article_id}  className="article_card col-4">
                                    <img                                     
                                    src={'/images/article/'+v.article_pic_main}alt=""/>
                                    <div className="article">
                                        <div className="title">
                                            <span onClick={()=>{
                                    navigation('/articles/beebeePostNO/'+v.article_id)
                                        }} >{v.title}</span>
                                        <button className=" article_like_button" 
                                                    onClick={()=>{
                                                        addDelLikeArt(v.article_id)
                                                    }}>
                                                {likeIdList.includes(v.article_id)?
                                                    <i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>
                                                    }
                                                    
                                                </button>
                                                
                                        </div>
                                
                                        <div className="foot">
                                            <div className="article_writer">
                                                <img src={'/images/'+v.member_pic} alt=""/>
                                                <div className="writer_name">{v.email}</div>
                                                <div className="post_time">{Dayjs(v.created_at).format('YYYY/MM/DD')}</div>
                                            </div>

                                             <div className="hashtag_group">
                                            { v.article_hashtag[0]?  v.article_hashtag.map((w,i)=>{
                                              
                                              return(
                                                  <div key={i} className="hashtags"
                                                  style={{backgroundColor:HashTagColor(v.article_id,i)}}>{w}</div>
                                              )
                                          }):''}
                                            
                                            </div> 
                                        </div>
                                    </div>

                                </div>
                            )



                            })}


                            {/* 最候補一筆換行 */}
                            <div className="article_card col-4"></div>



                    

                        


                        </div>

                    :'' }


                </div>
              
                

            </div>
        </div>
    </>
  )
}

export default ArticleMember