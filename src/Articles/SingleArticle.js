import React ,{useState,useEffect, useContext,Fragment,useRef}from 'react'
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

const postInput = useRef(null)
// 發文
const [postMessage,setPostMessage]=useState('')
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
                    <div className="article_buton"  onClick={()=>{
                                                    addDelLikeArt(singlePost[0].article_id)
                                                }}>
                                <button className=" article_like_button" 
                                               >
                                               {singlePost[0]&&likeIdList.includes(singlePost[0].article_id)?
                                               <i className="fa-solid fa-heart fa-xl" ></i>:<i className="fa-regular fa-heart fa-xl"></i>
                                                }
                                                
                                            </button>
                                    
                                 
                                收藏
                    </div>
                    <div className="article_buton" onClick={()=>{
                                                    postInput.current.focus()
                                                }}>
                                   <i class="fa-regular fa-comments fa-xl"></i>
                            
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
                            <input ref={postInput} type="text" placeholder='說點什麼?' value={postMessage} onChange={
                                (e)=>{
                                    setPostMessage(e.target.value)
                                }
                            }/>
                            <button className="btn"
                            onClick={()=>{
                                if(memberAuth.authorized){
                                    postComment()
                                    setPostMessage('')
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
                                               <i className="fa-solid fa-heart" ></i>:<i className="fa-regular fa-heart"></i>
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