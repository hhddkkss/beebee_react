import React ,{useState,useEffect, useContext}from 'react'
import {HOST } from '../component/LoginApi'
import { useLocation, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Dayjs from 'dayjs'
import ArticleSideBar from './ArticleSideBar'
import HashTagColor from './HashTagColor'
import AuthContext from '../Contexts/AuthContext'

function SearchArticles({frontData,allArtData,type,addDelLikeArt,likeIdList,setType,setInputText}) {
    const navigation = useNavigate()
    const { article_id } = useParams()
    const {memberAuth} = useContext(AuthContext)

    // 將所有文章分類呈現
    console.log('all',allArtData);
    const [showPosts,setShowPosts] = useState(allArtData)
    const getShowPosts = ()=>{
        let newArt = allArtData.filter((v,i)=>{
         return  v.title.includes(article_id) || v.article_hashtag.includes(article_id)
        //  
        })
        

        setShowPosts(newArt)
    }

    useEffect(()=>{

    getShowPosts()
    },[allArtData])
    useEffect(()=>{

        getShowPosts()
        },[article_id])
   


  return (
  <>
         {showPosts.length>0 ?  
         <>
            <div className="article_page">
           
           
                <div className="articles_container">

                  


                    <div className="artcles_area">
                        <div className="article_control_btn">
                            <div className="">
                        
                                <select name="article_order" id="article_order" defaultValue={''}> 
                                <option value="" disabled >文章排序</option>
                                    <option value="oldToNew">由舊至新</option>
                                    <option value="newToOld">由新至舊</option>
                                </select>
                            </div>
                        
                        </div>

                        <div className="article_list">
                        {showPosts.map((v,i)=>{

                            return(
                                <div key={v.article_id}  className="article_card col-4">
                                    <img                                     
                                     src={HOST+'/articlePic/'+v.article_pic_main}alt=""/>
                                    <div className="article">
                                        <div className="title">
                                            <span onClick={()=>{
                                    navigation('/articles/beebeePostNO/'+v.article_id)
                                        }} >{v.title}</span>
                                            <button className=" article_like_button" 
                                                onClick={()=>{ if(memberAuth.authorized && memberAuth.token){
                                                    addDelLikeArt(v.article_id)}else{
                                                        navigation('/member_login',{state:{text2:'您尚未登入'}})
                                                    }
                                                }}>
                                               {likeIdList.includes(v.article_id)?
                                                <i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>
                                                }
                                                
                                            </button>
                                                
                                        </div>
                                
                                        <div className="foot">
                                            <div className="article_writer">
                                                <img src={v.member_pic} alt=""/>
                                                <div className="writer_name">{v.email}</div>
                                                <div className="post_time">{Dayjs(v.created_at).format('YYYY/MM/DD')}</div>
                                            </div>
        
                                            <div className="hashtag_group">
                                            {  v.article_hashtag.map((w,i)=>{
                                              if(w){
                                                return(
                                                    <div key={i} className="hashtags"
                                                    style={{backgroundColor:HashTagColor(v.article_id,i)}}
                                                    onClick={()=>{
                                                    setInputText(w)
                                                    setTimeout(()=>{
                                                        navigation('/articles/searchArticles/'+w)
                                                        setInputText('')
                                                    },100)
                                                }}>{w}</div>
                                                )
                                              }
                                                
                                            })}
                                            
                                            </div>
                                        </div>
                                    </div>
                        
                                </div>
                            )



                        })}
                        {/* 最候補一筆換行 */}
                        <div className="article_card col-4"></div>

                        



                        </div>






                    </div>

                </div>


                
          



            <ArticleSideBar type={type}/>

         

            </div>
        </>  :
        <div className="article_page">
            <div className='searchNoAns'>搜尋不到您要的結果 <img src="/images/article/search.gif" alt="" /></div>
           
        </div>}
</>
   
  )
}

export default SearchArticles