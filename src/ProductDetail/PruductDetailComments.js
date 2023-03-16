import React,{useEffect,useState} from 'react'
import Dayjs from 'dayjs'
import Rating from '@mui/material/Rating'



function PruductDetailComments({p_detailData}) {

    const averageStar = ()=>{
         let all = 0
         if (p_detailData.length>0){ 
            let stars = p_detailData.map((v,i)=>{
            return v.star
            })
            all = stars.reduce((acc,now)=>{
             return acc + now})/stars.length
        }
        return parseFloat(all.toFixed(2))
    }
//顯示出來的留言
    const [showComment,setShowComment]=useState([])

    const starsChange = (stars)=>{
      switch(stars){
        case 1:
           setShowComment(p_detailData.filter((v,i)=>v.star=='1')) 
           break
          
        case 2:
          setShowComment(p_detailData.filter((v,i)=>v.star=='2')) 
          break
          
        case 3:
          setShowComment(p_detailData.filter((v,i)=>v.star=='3')) 
          break
        case 4:
          setShowComment(p_detailData.filter((v,i)=>v.star=='4')) 
          break
        case 5:
          setShowComment(p_detailData.filter((v,i)=>v.star=='5')) 
          break
        default:
          setShowComment(p_detailData) 
          break
                  
      }
    }

    const commentChange = ()=>{
      setShowComment(p_detailData.filter((v,i)=>v.content !=='')) 
    }

    useEffect(()=>{
      console.log('ComDe',p_detailData);
      setShowComment(p_detailData)
    },[p_detailData])
    

  return (<>
       {/* 評論區bar */}
       <div className="container product_details_container comment">
        <div className="product_bar">商品評論區</div>
        <div className="product_commentarea">
          <div>
            <span className="product_commentarea_word">{
                averageStar()
            } </span>
            <span className="product_commentarea_word2">/ 5</span>
            <Rating name="read-only" value={averageStar()} readOnly />
          </div>
          <div className="product_commentarea_position">
            <div className=" product_commentarea_selectors">
              <div className="">
                <button className="btn select product_commentarea_tatal"
                  onClick={(e)=>{
                  e.preventDefault()
                  starsChange()
                }}>
                  全部
                </button>
              </div>
              <div className=" d-none d-sm-block">
                <button className="btn select product_commentarea_tatal"
                  onClick={(e)=>{
                  e.preventDefault()
                  starsChange(1)
                }}>
                  1星
                </button>
              </div>
              <div className=" d-none d-sm-block">
                <button className="btn select product_commentarea_tatal"
                  onClick={(e)=>{
                  e.preventDefault()
                  starsChange(2)
                }}>
                  2星
                </button>
              </div>
              <div className="d-none d-sm-block">
                <button className="btn select product_commentarea_tatal"
                  onClick={(e)=>{
                  e.preventDefault()
                  starsChange(3)
                }}>
                  3星
                </button>
              </div>
              <div className=" d-none d-sm-block">
                <button className="btn select product_commentarea_tatal"
                  onClick={(e)=>{
                  e.preventDefault()
                  starsChange(4)
                }}>
                  4星
                </button>
              </div>
              <div className=" d-none d-sm-block">
                <button className="btn select product_commentarea_tatal"
                  onClick={(e)=>{
                  e.preventDefault()
                  starsChange(5)
                }}>
                  5星
                </button>
              </div>
              <div className="">
                <button className="btn select product_commentarea_tatal"
                  onClick={(e)=>{
                  e.preventDefault()
                  commentChange()
                }}>
                  附上評論
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 評論卡片區 */}
      <div className="container product_comment_area">
        {showComment.length > 0 && showComment[0].p_comment_id!==null
          ? showComment.map((v, i) => {

            {/* 評論卡片 */}
              return (
                <div key={v.p_comment_id} className="row product_memeber_row">
                  <div className="col-2 product_memeber">
                    <img
                      className="comment_card_avatar"
                      src={'/images/'+v.member_pic}
                      alt="member"
                    />
                  </div>
                  <div className="col-10 product_memeber_detail">
                    <div className="commemt_card_account">
                      {v.email.split('@')[0]}
                    </div>
                    <Rating name="read-only" value={v.star} readOnly />
                    <div className="product_account_contant">
                      {Dayjs(v.comment_created_at).format('YYYY/MM/DD')}
                    </div>
                    <pre className="commemt_card_content">{v.content}</pre>
                  </div>
                </div>
              )
            })
          : ''}
      </div>
  </>
  )
}

export default PruductDetailComments