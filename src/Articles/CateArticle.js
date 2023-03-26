import React ,{useState,useEffect, useContext}from 'react'
import {HOST } from '../component/LoginApi'
import { useLocation, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'
import Dayjs from 'dayjs'
import ArticleSideBar from './ArticleSideBar'
import HashTagColor from './HashTagColor'
import AuthContext from '../Contexts/AuthContext'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function CateArticle({frontData,allArtData,type,addDelLikeArt,likeIdList,setType,setInputText}) {
    const navigation = useNavigate()
    const {memberAuth} = useContext(AuthContext)
    // 將所有文章分類呈現
    const [showPosts,setShowPosts] = useState(allArtData)
    const getShowPosts = (typeId)=>{
        let newArt = allArtData.filter((v,i)=>{
         return  v.article_id!==frontData[type-1].article_id && v.article_category_id == typeId
        //  
        })
        

        setShowPosts(newArt)
    }

    // 文章排序
    const[artiOrder,setArtiOrder]=useState(1)
    const articleOrder=(x)=>{
        let newArt
        if(x==1){
             newArt = showPosts.sort((a,b)=>{
                return a.article_id-b.article_id
            })
        }
        if(x==2){
             newArt = showPosts.sort((a,b)=>{
                return b.article_id-a.article_id
            })
        }
        setShowPosts(newArt)
    }

    useEffect(()=>{
        if(!!type){
            setType(1)
        getShowPosts(1)
        }
    },[])
    useEffect(()=>{
    //    console.log('cete',allArtData);
    //    getAllArticles()
    getShowPosts(type)
    },[allArtData])
    useEffect(()=>{
        // console.log('cete2',allArtData);
        getShowPosts(type)
      // console.log(type);
    },[type])
   


  return (
  <>
         {showPosts.length>0 ?  
         <>
            <div className="article_page">
           
           
                <div className="articles_container">

                    <div className="latest_article article_mb_hidden" >
                        <div className="article">
                            <div  className="title">
                                <span onClick={()=>{
                            navigation('/articles/beebeePostNO/'+frontData[type-1].article_id)
                        }}>{frontData[type-1].title}</span>
                                <button className=" article_like_button" 
                                onClick={()=>{
                                    if(memberAuth.authorized && memberAuth.token){
                                         addDelLikeArt(frontData[type-1].article_id)
                                    }else{
                                        navigation('/member_login',{state:{text2:'您尚未登入'}})
                                    }
                                   
                                }}>
                                {likeIdList.includes(frontData[type-1].article_id)?
                                <i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>
                                }
                                
                                    
                                    </button>
                                    
                            </div>
                            <div className="content">{frontData[type-1].content_1}</div>
                            <div className="foot">
                                <div className="article_writer">
                                    <img src={frontData[type-1].member_pic} alt=""/>
                                    <div className="writer_name">{frontData[type-1].email}</div>
                                    <div className="post_time">{Dayjs(frontData[type-1].created_at).format('YYYY/MM/DD')}</div>
                                </div>

                                <div className="hashtag_group">
                                {
                                    frontData[type-1].article_hashtag.map((v,i)=>{
                                        if(v){
                                             return(
                                        <div key={i} className="hashtags"
                                        style={{backgroundColor:HashTagColor(frontData[type-1].article_id,i)}}
                                        onClick={()=>{
                                        setInputText(v)
                                        setTimeout(()=>{
                                            navigation('/articles/searchArticles/'+v)
                                            setInputText('')
                                        },100)
                                    }}>{v}</div>
                                    )
                                        }
                                   
                                })}
                                    
                                </div>
                            </div>
                        </div>
                        <img  src={HOST+'/articlePic/'+frontData[type-1].article_pic_main} alt=""/>
                    </div>


                    <div className="artcles_area">
                        <div className="article_control_btn">
                            <div className="">
                        
                                 <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">文章排序</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={artiOrder}
                                    onChange={(e)=>{
                                        setArtiOrder(e.target.value)
                                        articleOrder(e.target.value)}}
                                    label="Age"
                                    >
                                    <MenuItem value={1}>由舊至新</MenuItem>
                                    <MenuItem value={2}>由新至舊</MenuItem>
                                    </Select>
                                </FormControl>
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
                                                onClick={()=>{
                                                    if(memberAuth.authorized && memberAuth.token){
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
        </>  :''}
</>
   
  )
}

export default CateArticle