import React,{useState,useEffect, useContext,Fragment} from 'react'
import {useParams,useNavigate } from 'react-router-dom'
import HashTagColor from './HashTagColor'
import Dayjs from 'dayjs'
import AuthContext from '../Contexts/AuthContext'
import ArticleSideBar from './ArticleSideBar'
import axios from 'axios'
import { ARTICLE_MEMBER_POST } from '../component/LoginApi'

function ArticleMember({addDelLikeArt,likeIdList,artLikeList,getLikedArti}) {
    const navigation = useNavigate()
    const {article_id}=useParams()
    const {memberAuth}=useContext(AuthContext)
    // 篩選器
    // console.log('L1',artLikeList)
    const [showMemData,setShowMemData]= useState(artLikeList)
    const [artHistList,setArtHistList] = useState([])
    const getHistList = ()=>{
         axios.post(ARTICLE_MEMBER_POST,{
            memberId:memberAuth.memberId
        }).then((res)=>{
            console.log(res.data);
            setArtHistList(res.data)
            return res.data
        })
    }
    
    function getShowMemData (x){
        if(article_id=='liked'){
            console.log('2-1');
            setShowMemData(artLikeList.filter((v,i)=>{
                return v.article_category_id == x
            }))
        }
         if(article_id=='postEd'){
            let his = artHistList
             console.log('2-3',his);
            
            
             if(!!his){
                 setShowMemData(his.filter((v,i)=>{
                 return v.article_category_id==x
             }))
             }
          
            
         }

    }

    // 篩選按鈕className
    const [memNowCate,setMemNowCate]=useState(4)
    const changeMemArtCateBtn=(x)=>{
       if(x == memNowCate) {return 'btn category_radio active article_mb_hidden'}
       else{return 'btn category_radio article_mb_hidden'}
    }
  
    useEffect(()=>{
        getHistList()
        if(article_id=='liked'&& memNowCate==4){
            setShowMemData(artLikeList)
            // console.log('L5',memNowCate);
        }
        if(article_id=='postEd'&& memNowCate==4){
            setShowMemData(artHistList)
            // console.log('L5',memNowCate);
        }
        // console.log('L6',showMemData);
        
    },[artLikeList])

    useEffect(()=>{
        if(article_id=='liked'){
            setShowMemData(artLikeList)
            setMemNowCate(4)
            console.log('1',article_id);

        }
         if(article_id=='postEd'){
            setShowMemData(artHistList)
             setMemNowCate(4)
        //     console.log('2',article_id);
         }
        
    },[article_id])

      //useEffect(()=>{
       // getShowMemData()
    //     if(article_id=='postEd'){
    //         setShowMemData(artHistList)
    //          console.log('L5',article_id);
    //     }
    //      console.log('L6',artHistList);
        
     //},[artHistList])
    
  return (
    <>
        <div className="article_page">
            

            <div className="articles_container">
                <div className={article_id=='liked'?"article_member_page_title like_posts article_mb_hidden":"article_member_page_title his_posts article_mb_hidden"}><span>
                {article_id=='liked'?'收藏':'歷史文章'}</span></div>
                
               
           
                  <div className="artcles_area">
                    <div className="article_control_btn">
                        
                        <div className="d-flex gap-3 align-items-center">
                            <label htmlFor="article_order">文章分類 
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-3.67644e-08 9.15893L-4.00349e-07 0.841071C-4.33042e-07 0.0931635 0.93026 -0.28079 1.47261 0.246939L5.74678 4.40587C6.08441 4.73439 6.08441 5.26561 5.74678 5.59064L1.47261 9.75306C0.93026 10.2808 -4.0723e-09 9.90684 -3.67644e-08 9.15893Z" fill="black"/>
                                </svg></label>
                            <button onClick={()=>{ 
                                setMemNowCate(4)
                                if(article_id=='liked'){
                                    return setShowMemData(artLikeList)}
                                if(article_id=='postEd'){
                                    return setShowMemData(artHistList)}
                                
                            }} className={changeMemArtCateBtn(4)}>
                               全部
                            </button>
                            {article_id =="liked"? <button onClick={()=>{
                                getShowMemData(1)
                                setMemNowCate(1)
                            }} className={changeMemArtCateBtn(1)}>
                               BEE新聞
                            </button>:''}
                           
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


            <ArticleSideBar/>
        </div>
    </>
  )
}

export default ArticleMember