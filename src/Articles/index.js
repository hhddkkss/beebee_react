import React ,{useContext,useEffect,useState} from 'react'
import AuthContext from '../Contexts/AuthContext'
import Navbar from './../component/Navbar'
import { useLocation, useParams,useNavigate } from 'react-router-dom'
import { GET_All_ARTICLE_POST,GET_FRONT_ARTICLES,ADD_DEL_ARTI_LIKE,ARTICLE_MEMBER_LIKED } from '../component/LoginApi'
import PostPage from './PostPage'
import axios from 'axios'



// CSS
import './../styles/artclesStyle/articlePage.css';
import './../styles/artclesStyle/articleCategoryPage.css';
import './../styles/artclesStyle/articleMemberPage.css';
import './../styles/artclesStyle/articlePostPage.css';
import './../styles/artclesStyle/articleSinglePage.css';

// 分頁
import Front from './Front';
import CateArticle from './CateArticle'
import SingleArticle from './SingleArticle'
import ArticleMember from './ArticleMember'
import SearchArticles from './SearchArticles'
import EditPostPage from './EditPostPage'


function Articles() {
    const {setNavbarType,memberAuth} = useContext(AuthContext)
    setNavbarType('light')
    const navigation = useNavigate()
    
    //拿到param上的nowPage
    const { nowPage,article_id } = useParams()
    // console.log(nowPage);
    // 頁名
    const pageNames = ['front','beebeeArticles','member','beebeePost','beebeePostNO','editPost','searchArticles']
    // 按鈕focusclassName
    const listBarBtnClass = ['btn article_list_button','btn article_list_button article_mb_hidden']
    // 分類頁篩選碼
    const[type,setType] = useState(1)

    //判斷是否為該頁
    const isShowPage= (pName,pageElement)=>{
        if( pageNames[pName] == nowPage){
            return pageElement
        }else{
            return 
        }
    }
    // 拿首頁資料
    const[frontData,setFrontData]=useState([])
    const getFrontArticles = ()=>{
            axios.get(GET_FRONT_ARTICLES).then((res)=>{
                console.log(res.data);
                setFrontData(res.data)
            })
        }
    // 拿全部資料
    const[allArtData,setAllArtData]=useState([])
    const getAllArticles = ()=>{
            axios.get(GET_All_ARTICLE_POST).then((res)=>{
                console.log(res.data);
                setAllArtData(res.data)
            })
        }

 
    
    // 按鈕focus
    const btnNowFocus = (a,b)=>{
       if(pageNames[b] == nowPage ){
        // console.log('A1');
        return `${listBarBtnClass[a]} active`
        }else{
            // console.log('A2');
            return listBarBtnClass[a]} 
    }
    const btnNowFocus2 = (a,b,c)=>{
        if(pageNames[b] == nowPage&&type==c ){
         // console.log('A1');
         return `${listBarBtnClass[a]} active`
         }else{
             // console.log('A2');
             return listBarBtnClass[a]} 
     }
   


    //喜愛功能
    const[addYY,setAddYY] = useState(false)
    const [likeIdList,setLikeIdList]  = useState([])
    const addDelLikeArt = async(id)=>{
        if(memberAuth.token && memberAuth.memberId){
            await axios.post(ADD_DEL_ARTI_LIKE,{
            memberId:memberAuth.memberId,
            likeArticle:id
        }).then((res)=>{
            // console.log(res.data);
            if(res.data.success){
                setAddYY(!addYY)
            }else{console.log('失敗');}
        })
        }else{
            console.log('失敗');
        }
    
    }
    //喜愛列表
    const [artLikeList,setArtLikeList]  = useState([])
    const getLikedArti = async()=>{
        if(memberAuth.token && memberAuth.memberId){
        await axios.post(ARTICLE_MEMBER_LIKED,{
            memberId:memberAuth.memberId
        }).then((res)=>{
            setArtLikeList(res.data);
            setLikeIdList(res.data.map((v,i)=>{
                return v.article_id
            }))
           
        })
    }

    }

    // 搜尋功能
    const [inputText,setInputText] = useState('')

 



    useEffect(()=>{
        getFrontArticles()
        getAllArticles()
        getLikedArti()

    },[])
    useEffect(()=>{
        getAllArticles()
        getLikedArti()

    },[nowPage])
    useEffect(()=>{   
        getLikedArti()
    },[addYY])



  return (
    <>
        <Navbar/>
    <div className="article_body">
    {/* 文章區最開頭 */}
        <div className="article_title_bar" >
            <div className="article_title">
                <svg
                width="129"
                height="25"
                viewBox="0 0 331 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                d="M10.66 60.3993C5.19 60.3993 3.1 60.4693 0 60.6193C0.43 57.5193 0.58 55.0793 0.58 50.0393V10.6493C0.58 6.8293 0.44 3.7393 0 0.279297C3.67 0.499297 4.68 0.499297 10.58 0.499297H29.45C41.12 0.499297 47.96 6.1193 47.96 15.6193C47.96 20.0093 46.52 23.4693 43.78 25.9193C42.2 27.2893 40.9 28.0093 37.95 29.0893C41.48 29.8793 43.35 30.7493 45.44 32.5493C48.54 35.2893 50.12 39.1693 50.12 43.9293C50.12 54.2993 42.78 60.4193 30.25 60.4193H10.66V60.3993ZM27.36 23.6093C31.18 23.6093 33.55 21.3793 33.55 17.8493C33.55 14.3193 31.32 12.3093 27.21 12.3093H14.68V23.6193H27.35L27.36 23.6093ZM14.69 48.5193H27.94C32.48 48.5193 35.21 45.9993 35.21 41.7493C35.21 37.4993 32.47 35.1293 27.87 35.1293H14.69V48.5193Z"
                fill="#1D2D64"
                />
                <path
                d="M102.53 60.91C99.4301 60.55 96.8401 60.41 90.6501 60.41H67.9701C62.5001 60.41 60.4801 60.48 57.3901 60.63C57.8201 57.75 57.9701 55.09 57.9701 50.12V10.79C57.9701 6.33 57.8301 3.81 57.3901 0.28C60.3401 0.42 62.3601 0.5 67.9701 0.5H90.9401C95.8401 0.5 98.2801 0.36 101.67 0V13.47C98.3601 13.11 95.7701 12.97 90.9401 12.97H72.2201V23.55H87.7701C92.5201 23.55 94.2501 23.48 98.5701 23.05V36.37C95.1901 36.01 92.7401 35.87 87.7701 35.87H72.2201V47.97H90.8001C96.2701 47.97 99.4401 47.83 102.54 47.47V60.94L102.53 60.91Z"
                fill="#1D2D64"
                />
                <path
                d="M155.02 60.91C151.92 60.55 149.33 60.41 143.14 60.41H120.46C114.99 60.41 112.97 60.48 109.88 60.63C110.31 57.75 110.46 55.09 110.46 50.12V10.79C110.46 6.33 110.32 3.81 109.88 0.28C112.83 0.42 114.85 0.5 120.46 0.5H143.43C148.33 0.5 150.77 0.36 154.16 0V13.47C150.85 13.11 148.26 12.97 143.43 12.97H124.71V23.55H140.26C145.01 23.55 146.74 23.48 151.06 23.05V36.37C147.68 36.01 145.23 35.87 140.26 35.87H124.71V47.97H143.29C148.76 47.97 151.93 47.83 155.03 47.47V60.94L155.02 60.91Z"
                fill="#1D2D64"
                />
                <path
                d="M161.71 60.4C162.14 56.94 162.29 53.92 162.29 49.09V11.8C162.29 6.54 162.15 3.95 161.71 0.5H176.33C175.97 3.96 175.83 6.55 175.83 11.8V17.85C175.83 18.93 175.83 19.58 175.76 20.59C180.01 16.85 184.62 15.19 190.59 15.19C203.7 15.19 211.33 23.54 211.33 37.8C211.33 45.51 209.1 51.7 204.92 56.09C201.17 59.83 196.28 61.71 189.94 61.71C183.96 61.71 180.44 60.49 175.75 56.6C175.75 56.82 175.82 57.75 175.82 58.11V60.41H161.71V60.4ZM187.2 26.12C180.65 26.12 175.97 31.16 175.97 38.15C175.97 45.14 180.72 50.68 186.92 50.68C193.12 50.68 197.36 45.57 197.36 37.93C197.36 30.29 193.54 26.12 187.21 26.12H187.2Z"
                fill="#1D2D64"
                />
                <path
                d="M228.46 42.4698C229.18 48.2998 232.56 51.3998 238.25 51.3998C241.13 51.3998 243.65 50.4598 245.52 48.7398C246.6 47.7298 247.1 46.9398 247.68 45.0698L260.21 48.5998C258.55 52.3398 257.47 53.9998 255.46 56.0198C251.36 60.0498 245.6 62.1398 238.47 62.1398C231.34 62.1398 225.87 60.1198 221.76 56.0198C217.51 51.6998 215.21 45.5798 215.21 38.4498C215.21 24.1898 224.35 14.7598 238.11 14.7598C249.34 14.7598 257.19 20.8798 259.71 31.6098C260.29 33.9098 260.57 36.9398 260.79 41.0398C260.79 41.3298 260.79 41.7598 260.86 42.4798H228.46V42.4698ZM247.18 32.5298C246.17 27.9198 243.08 25.4698 238.11 25.4698C233.14 25.4698 229.9 27.7698 228.68 32.5298H247.19H247.18Z"
                fill="#1D2D64"
                />
                <path
                d="M312.41 60.91C309.31 60.55 306.72 60.41 300.53 60.41H277.85C272.38 60.41 270.36 60.48 267.27 60.63C267.7 57.75 267.85 55.09 267.85 50.12V10.79C267.85 6.33 267.71 3.81 267.27 0.28C270.22 0.42 272.24 0.5 277.85 0.5H300.82C305.72 0.5 308.16 0.36 311.55 0V13.47C308.24 13.11 305.65 12.97 300.82 12.97H282.1V23.55H297.65C302.4 23.55 304.13 23.48 308.45 23.05V36.37C305.07 36.01 302.62 35.87 297.65 35.87H282.1V47.97H300.68C306.15 47.97 309.32 47.83 312.42 47.47V60.94L312.41 60.91Z"
                fill="#1D2D64"
                />
                <path
                d="M329.98 60.2004C329.38 62.0004 328.25 62.9704 326.6 62.9704C325.48 62.9704 324.43 62.2204 323.45 60.8704C322.48 59.5204 322.03 58.4004 322.03 57.5704C322.03 56.3704 322.56 55.0204 323.68 53.6704C324.73 52.3204 325.85 51.6504 327.2 51.6504C329.68 51.6504 330.95 53.3004 330.95 56.4504C330.95 56.8304 330.57 58.1004 329.98 60.2004Z"
                fill="#231815"
                />
            </svg>
                論壇</div>
        </div>
    {/* 文章區分類按鈕 */}
        <div className="article_list_bar">
        <div>
            <div className="article_list_button_group">
                <button className={btnNowFocus(0,0)} 
                onClick={()=>{
                    navigation('/articles/front')
                }}
                >首頁</button>
                <button className={btnNowFocus2(0,1,1)}
                 onClick={()=>{
                    navigation('/articles/beebeeArticles')
                    setType(1)
                }}>Bee新聞</button>
                <button className={btnNowFocus2(1,1,2)}
                 onClick={()=>{
                    navigation('/articles/beebeeArticles')
                    setType(2)
                }}>推薦版</button>
                <button className={btnNowFocus2(1,1,3)}
                 onClick={()=>{
                    navigation('/articles/beebeeArticles')
                    setType(3)
                }}>分享版</button>
                {memberAuth.authorized && memberAuth.memberId? <button className={
                    pageNames[2] == nowPage||pageNames[3] == nowPage?
                    `${listBarBtnClass[1]} active`:`${listBarBtnClass[1]}`
                }
                 onClick={()=>{
                    navigation('/articles/member/liked')
                }}>會員文章中心</button>:''}
                
                <button className="btn article_list_button article_mb_show ">其他
                    <svg className='ms-1' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6.5L9 14.5L17 6.5" stroke="#F4F4F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            
    {/* <!-- 搜尋 --> */}
            <div className="article_list_search_group">
              <div className="search-form">
                <input
                    type="text"
                    id="search"
                    className="search-input"
                    placeholder="輸入要尋找的商品"
                    autoComplete="off"
                     value={inputText}
                     onChange={(e) => {
                       
                       setInputText(e.target.value)
                     }}
                     onKeyDown={(e) => { if(e.target.value.length>0){
                            if (e.key === 'Enter') {
                         navigation('/articles/searchArticles/'+e.target.value)
                         setInputText('')
                       }
                        }
                       
                     }}
                />
                <button
                    className="btn btn-search"
                     onClick={() => {if(inputText.length>0){
                        
                        navigation('/articles/searchArticles/'+inputText)
                        setInputText('')
                     }}}
                >
                    開始搜尋
                </button>
                </div>
            </div>
        </div>

        

        </div>

        
    {/* 需依照nowPage改變區域 */}

    {/* 首頁 */}
    {isShowPage(0, <Front  frontData={frontData} setType={setType}/>)}
    {/* <Front/> */}
        


    {/* 分類頁 */}
    {isShowPage(1, <CateArticle  frontData={frontData} allArtData={allArtData} type={type} addDelLikeArt={addDelLikeArt} likeIdList={likeIdList} setType={setType}/>)}



 
    {/* 單頁面 */}
    {isShowPage(4, <SingleArticle  allArtData={allArtData} type={type} setType={setType} article_id={article_id} addDelLikeArt={addDelLikeArt} likeIdList={likeIdList}/>)}


        
    {/* 會員文章頁 */} 
    {isShowPage(2, <ArticleMember  allArtData={allArtData} type={type} setType={setType} article_id={article_id} addDelLikeArt={addDelLikeArt} likeIdList={likeIdList} artLikeList={artLikeList} getLikedArti={getLikedArti}/>)}
     
      

    {/* 發文頁 */}
    {isShowPage(3, <PostPage  allArtData={allArtData} type={type} setType={setType} article_id={article_id} addDelLikeArt={addDelLikeArt} likeIdList={likeIdList} artLikeList={artLikeList} getLikedArti={getLikedArti}/>)}

    {/* 編輯貼文頁 */}
    {isShowPage(5, <EditPostPage  allArtData={allArtData} type={type} setType={setType} article_id={article_id} addDelLikeArt={addDelLikeArt} likeIdList={likeIdList} artLikeList={artLikeList} getLikedArti={getLikedArti}/>)}
    
    {/* 搜尋頁 */}
    {isShowPage(6, <SearchArticles  allArtData={allArtData} type={type} setType={setType} article_id={article_id} addDelLikeArt={addDelLikeArt} likeIdList={likeIdList} artLikeList={artLikeList} getLikedArti={getLikedArti} />)}




    </div>
{/* 開始發文鍵 */}
        <div className="post_btn" 
        onClick={()=>{
            if(memberAuth.authorized && memberAuth.token){
                 navigation('/articles/beebeePost')
            }else{
                navigation('/member_login',{state:{text2:'您尚未登入'}})
            }
                   
                }}>
            <div className="post_icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 4.5H4.5C3.96957 4.5 3.46086 4.71071 3.08579 5.08579C2.71071 5.46086 2.5 5.96957 2.5 6.5V20.5C2.5 21.0304 2.71071 21.5391 3.08579 21.9142C3.46086 22.2893 3.96957 22.5 4.5 22.5H18.5C19.0304 22.5 19.5391 22.2893 19.9142 21.9142C20.2893 21.5391 20.5 21.0304 20.5 20.5V13.5"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 2.99998C19.3978 2.60216 19.9374 2.37866 20.5 2.37866C21.0626 2.37866 21.6022 2.60216 22 2.99998C22.3978 3.39781 22.6213 3.93737 22.6213 4.49998C22.6213 5.06259 22.3978 5.60216 22 5.99998L12.5 15.5L8.5 16.5L9.5 12.5L19 2.99998Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div className="post_letter">開始發文</div>
        </div>


    </>
    
  )
}

export default Articles