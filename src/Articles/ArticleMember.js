import React,{useState,useEffect, useContext,Fragment} from 'react'
import {useParams,useNavigate } from 'react-router-dom'
import HashTagColor from './HashTagColor'
import Dayjs from 'dayjs'
import AuthContext from '../Contexts/AuthContext'
import ArticleSideBar from './ArticleSideBar'
import axios from 'axios'
import { ARTICLE_MEMBER_POST,HOST } from '../component/LoginApi'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function ArticleMember({addDelLikeArt,likeIdList,artLikeList,setInputText}) {
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
                if(x==4){
                    setShowMemData(his.filter((v,i)=>{
                        return v.article_Onpublic==0
                    }))
                    return
                }
                 setShowMemData(his.filter((v,i)=>{
                 return v.article_category_id==x && v.article_Onpublic==1
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

     // 文章排序
     const[artiOrder,setArtiOrder]=useState(1)
     const articleOrder=(x)=>{
         let newArt
         if(x==1){
              newArt = showMemData.sort((a,b)=>{
                 return a.article_id-b.article_id
             })
         }
         if(x==2){
              newArt = showMemData.sort((a,b)=>{
                 return b.article_id-a.article_id
             })
         }
         setShowMemData(newArt)
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
                <div className={article_id=='liked'?"article_member_page_title like_posts ":"article_member_page_title his_posts "}><span>
                {article_id=='liked'?'收藏':'歷史文章'}</span></div>
                
               
           
                  <div className="artcles_area">
                    <div className="article_control_btn">
                        
                        <div className="d-flex gap-3 align-items-center">
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
                            <label htmlFor="article_order" className='article_mb_hidden'>文章分類 　<i className="fa-solid fa-caret-right"></i></label>
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
                            {article_id =="postEd"? <button onClick={()=>{
                                getShowMemData(4)
                                setMemNowCate(5)
                            }} className={changeMemArtCateBtn(5)}>
                               草稿
                            </button>:''}
                        </div>
                        {}
                        <button onClick={()=>{
                                article_id=='liked'?navigation('/articles/member/postEd'):navigation('/articles/member/liked')
                            }} className=' btn category_radio article_mb_show'>
                               {article_id=='liked'?'歷史文章':'收藏'}
                            </button>
                    </div>
                    {showMemData[0]?
                        <div className="article_list">

                        
                            {showMemData.map((v,i)=>{return(
                                <div key={v.article_id}  className="article_card col-4">
                                    <img                                     
                                    src={HOST+'/articlePic/'+v.article_pic_main}alt=""/>
                                    <div className="article">
                                        <div className="title">
                                            <span onClick={()=>{
                                    navigation('/articles/beebeePostNO/'+v.article_id)
                                        }} >{v.title}</span>

                                        {article_id=='liked' ?    <button className=" article_like_button" 
                                                    onClick={()=>{
                                                        addDelLikeArt(v.article_id)
                                                    }}>
                                                {likeIdList.includes(v.article_id)?
                                                    <i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>
                                                    }
                                                    
                                                </button>:
                                                <button className=" article_like_button" 
                                                    onClick={()=>{
                                                        // 跳頁至編輯頁
                                                        navigation('/articles/editPost/'+v.article_id)
                                                    }}>
                                                    <i className="fa-regular fa-pen-to-square" style={{color:" #5e6673"}}></i>
                                                    
                                                </button>
                                                
                                                }
                                    
                                                
                                        </div>
                                
                                        <div className="foot">
                                            <div className="article_writer">
                                                <img src={v.member_pic} alt=""/>
                                                <div className="writer_name">{v.email}</div>
                                                <div className="post_time">{Dayjs(v.created_at).format('YYYY/MM/DD')}</div>
                                            </div>

                                             <div className="hashtag_group">
                                            { v.article_hashtag[1]?  v.article_hashtag.map((w,i)=>{
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