import React from 'react'
import './../styles/login.css'
import {  useNavigate } from 'react-router-dom'
import { MEMBER_DELETE_POST } from '../component/LoginApi'
import axios from 'axios'

function ArticleInfo(props) {
  const navigation = useNavigate()
  const { infoClass, setInfoState,infoState,infoText,article_id,setInfoText } = props

      // 刪除文章
      const DeletePosts = async(aid)=>{
          const result = await axios.post(MEMBER_DELETE_POST,{
            article_id:aid
          })
          console.log('delete',result);
          if(result.data.success){
            setInfoState(2)
            setInfoText('成功刪除！')
          }else{
            setInfoState(3)
            setInfoText('Opps！文章未被儲存')
          }
        
      }
  return (
    <div
      className={infoClass(
        'article_info_box',
        'article_info_box success',
        'article_info_box fail'
      )}
    >
      <p>{infoText}</p>
      <div className="btn-mygroup">
      {infoState !== 2 && infoState === 4 ? <button
          href="#"
          className="btn-confirm"
          onClick={(e) => {
            e.preventDefault()
            setInfoState(1)
            DeletePosts(article_id)
            navigation('/articles/member/postEd')
            //確定刪除
          }}
        >
          確定刪除
        </button>:
          ''
        }
      {infoState === 2 && infoState !==4 ? <button
          href="#"
          className="btn-confirm"
          onClick={(e) => {
            e.preventDefault()
            setInfoState(1)
            navigation('/articles/member/postEd')
            //導回首頁
          }}
        >
          確定
        </button>:
         ''
        }
        {infoState !== 2 && infoState !==4 ? <button
          href="#"
          className="btn-confirm"
          onClick={(e) => {
            e.preventDefault()
            setInfoState(1)
            //導回首頁
          }}
        >
          確定
        </button>:
         ''
        }

        
      </div>
    </div>
  )
}

export default ArticleInfo
