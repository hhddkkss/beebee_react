import React ,{useState,useEffect, useContext,Fragment}from 'react'
import {GET_ARTICLE_COMMENT,POST_ARTICLE_COMMENT } from '../component/LoginApi'
import { useLocation, useParams,useNavigate } from 'react-router-dom'

import axios from 'axios'
import Dayjs from 'dayjs'
import AuthContext from '../Contexts/AuthContext'
import ArticleSideBar from './ArticleSideBar'

function SingleArticle({hashtagColor,allArtData,type,article_id, setType,addDelLikeArt,likeIdList}) {
    const navigation = useNavigate()

    const {memberAuth}=useContext(AuthContext)

// 文章內容資料
    const [singlePost,setSinglePost]=useState([])

    const getSinglePost = (sid)=>{
  
      let nowD = allArtData.filter((v)=>{
            return v.article_id == parseInt(sid)
        })
        console.log('G1');
          setSinglePost(nowD)
        if(!!nowD[0]){
          setType(parseInt(nowD[0].article_category_id))}
    }
// 文章留言資料
const [postsComment,setPostsComment]=useState([])

const getPostsComment = ()=>{
    // console.log('G2');

    axios.post(GET_ARTICLE_COMMENT,{
        article_id:article_id
    }).then((res)=>{
        // console.log('G3');

        setPostsComment(res.data)
    })
}

// 發文
const [postMessage,setPostMessage]=useState('說點什麼?')
const [postDone,setPostDone]=useState(false)

const postComment = ()=>{
    axios.post(POST_ARTICLE_COMMENT,{
        article_id:article_id,
        member_id:memberAuth.memberId,
        content:postMessage
    }).then((res)=>{
        console.log(res.data)
        setPostDone(!postDone)
    })
}
// 推薦文章
const[suggestPosts,setSuggestPosts]=useState([])
const getSuggestPosts=(cou)=>{
    let rex = []
    let ids=[]
    let n = 0
    for(let i = 0;i<cou;i++){
        n = Math.floor(Math.random()*allArtData.length);
         if(ids.indexOf(n)>0){ //若有重複判斷
            i-=1;
            continue
         }else{ //若不重複
        ids=[...ids,n]
        rex = [...rex,allArtData[n]]
        }
        
    }
    console.log('rec',rex);
    return rex
}

useEffect(()=>{
        console.log('E0','A',allArtData,'S',singlePost);
        getSinglePost(article_id)
        getPostsComment()
        setSuggestPosts(getSuggestPosts(3))
        },[allArtData])

useEffect(()=>{
    // console.log('G0','A',allArtData,'S',singlePost);

    if(!!allArtData){
        // console.log('G01','A',allArtData,'S',singlePost);
            getSinglePost(article_id)
            getPostsComment()
        }
    },[article_id])

   

useEffect(()=>{
        getPostsComment()
    },[postDone])

    // console.log('A',allArtData,'S',singlePost);

  return (
   <>

     <div className="article_page">
        <div className="articles_container">
{/* 文章本體 */}
            {!!singlePost[0]?
                    <>
                    {singlePost.map((v,i)=>{
                        return(
                            <Fragment key={v.article_id}>
                                <img className="article_main_pic" src={'/images/article/'+v.article_pic_main} alt='article_main_pic' />
                                <div className="single_article_title">{v.title}</div>

                                <div className="hashtag_group">
                                { v.article_hashtag.map((w,i)=>{
                                              
                                    return(
                                    <div key={i} className="hashtags"
                                    style={{backgroundColor:hashtagColor(v.article_id,i)}}>{w}</div>
                                    )
                                })}
                                    
                                </div>
                                <div className="article_writer">
                                    <img src={'/images/'+v.member_pic} alt=""/>
                                    <div className="writer_name">{v.email}</div>
                                    <div className="post_time">{Dayjs(v.created_at).format('YYYY-MM-DD')}</div>
                                </div>


                                <div className="article_content">
                                    <div className="article_paragraph">
                                            {v.content_1} 
                                    </div>
                                    
                                    {v.article_pic_content?
                                     <img className="article_content_pic" src={'/images/article/'+v.article_pic_content} alt="article_content_pic1"/>
                                    :''}
                                   

                                    
                                     {v.content_2?<div className="article_paragraph">
                                      {v.content_2}
                    
                                    </div>:''}
                                </div>

                            </Fragment>
                        )

                        
                
                    })}
    


                    </>
     
            :''}




          

{/* 文章留言區 */}
            <div className="article_message_area">

                <div className="article_button_group">
                    <div className="article_buton">
                                <button className=" article_like_button" >
                                    <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 2.23589C8.83647 1.05374 7.3116 0.432961 5.75012 0.505748C4.18864 0.578535 2.71393 1.33914 1.64004 2.62558C0.566142 3.91203 -0.0220808 5.62266 0.000634227 7.3932C0.0233493 9.16374 0.655207 10.8543 1.76165 12.1048L8.5868 19.8369C8.96164 20.2615 9.46997 20.5 10 20.5C10.53 20.5 11.0384 20.2615 11.4132 19.8369L18.2384 12.1048C19.3448 10.8543 19.9767 9.16374 19.9994 7.3932C20.0221 5.62266 19.4339 3.91203 18.36 2.62558C17.2861 1.33914 15.8114 0.578535 14.2499 0.505748C12.6884 0.432961 11.1635 1.05374 10 2.23589ZM8.82866 4.09757L9.2934 4.62301C9.48082 4.8353 9.73499 4.95456 10 4.95456C10.265 4.95456 10.5192 4.8353 10.7066 4.62301L11.1713 4.09757C11.5401 3.66494 11.9812 3.31987 12.469 3.08247C12.9567 2.84508 13.4813 2.72012 14.0121 2.7149C14.5429 2.70967 15.0694 2.82428 15.5607 3.05203C16.052 3.27979 16.4983 3.61612 16.8737 4.04142C17.2491 4.46672 17.5459 4.97247 17.7469 5.52914C17.9479 6.08581 18.0491 6.68227 18.0445 7.28372C18.0399 7.88516 17.9296 8.47953 17.72 9.03217C17.5105 9.5848 17.206 10.0846 16.8242 10.5025L10 18.2357L3.17585 10.5025C2.44763 9.64817 2.04468 8.50397 2.05379 7.31632C2.0629 6.12866 2.48333 4.99258 3.22455 4.15275C3.96576 3.31292 4.96845 2.83654 6.01664 2.82622C7.06484 2.8159 8.07468 3.27246 8.82866 4.09757Z" fill="#1D2D64"/>
                                    </svg>
                                    
                                    </button>
                                收藏
                    </div>
                    <div className="article_buton">
                                    <svg width="24" height="25" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.5 10.0834C17.5029 11.1832 17.2459 12.2683 16.75 13.25C16.162 14.4265 15.2581 15.416 14.1395 16.1078C13.021 16.7995 11.7319 17.1662 10.4167 17.1667C9.31678 17.1696 8.23176 16.9126 7.25 16.4167L2.5 18L4.08333 13.25C3.58744 12.2683 3.33047 11.1832 3.33333 10.0834C3.33384 8.76815 3.70051 7.47907 4.39227 6.36048C5.08402 5.2419 6.07355 4.338 7.25 3.75002C8.23176 3.25413 9.31678 2.99716 10.4167 3.00002H10.8333C12.5703 3.09585 14.2109 3.82899 15.4409 5.05907C16.671 6.28915 17.4042 7.92973 17.5 9.66669V10.0834Z" stroke="#1D2D64" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                            
                                留言
                    </div>

                </div>

                <div className="message_content">

                    {!!postsComment[0]?
                        <>
                        {postsComment.map((v,i)=>{

                            return(
                            <div key={v.message_id} className="message_box">
                                <div className="article_writer">
                                    <img src={'/images/'+v.member_pic} alt=""/>
                                    <div className="writer_name">{v.email}</div>
                                    <div className="post_time">{Dayjs(v.created_at).format('YYYY-MM-DD')}</div>
                                </div>
                                <div className="messages">
                                        {v.message_content}

                                </div>



                            </div>)
                        })}



                        </>
                        
                    :""}

                    



                    <div className="input_messenge_box">
                            <input type="text" value={postMessage} onChange={
                                (e)=>{
                                    setPostMessage(e.target.value)
                                }
                            }/>
                            <button className="btn"
                            onClick={()=>{
                                if(memberAuth.authorized){
                                    postComment()
                                }else{
                                    console.log('請先登入')
                                }
                                
                            }}>
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="18" cy="18" r="17.5" stroke="#E59069"/>
                                <path d="M15 24L21 18L15 12" stroke="#E59069" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg></button>
                    </div>


                </div>

                  
                </div>


{/* 推薦文章區 */}
                <div className="more_suggest_articles">
                  <div className="more_suggest">what's more</div>
                  <div className="article_box">
                
                
                  {suggestPosts[0]?
                    suggestPosts.map((v,i)=>{

                    return(
                        <div key={v.article_id} className="article_card col-4">
                            <img
                           
                            src={'/images/article/'+v.article_pic_main}alt=""/>
                            <div className="article">
                                <div className="title">
                                    <span  onClick={()=>{
                            navigation('/articles/beebeePostNO/'+v.article_id)
                                }}>{v.title}</span>
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
                                    {  v.article_hashtag.map((w,i)=>{
                                              
                                              return(
                                                  <div key={i} className="hashtags"
                                                  style={{backgroundColor:hashtagColor(v.article_id,i)}}>{w}</div>
                                              )
                                          })}

                                    
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }):''}

                  </div>


                </div>

            </div>

          
            {/* 側邊欄要元件化塞進來 */}
            <ArticleSideBar type={type}/>
           

        </div>
   </>
  )
}

export default SingleArticle