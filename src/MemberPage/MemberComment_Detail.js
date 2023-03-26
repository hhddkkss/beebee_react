import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import AuthContext from '../Contexts/AuthContext'
import Rating from '@mui/material/Rating'
import axios from 'axios'
import { GET_SINGLE_COMMENT, POST_SINGLE_COMMENT } from '../component/LoginApi'
import { async } from 'q'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router'

function MemberComment_Detail() {
  const navigation = useNavigate()
  const { memberAuth } = useContext(AuthContext)
  const [singleComment, setSingleComment] = useState([])
  const [infoText, setInfoText] = useState('必填')
  const { p_comment_id } = useParams()
  const [editComment, setEditComment] = useState({
    star: 0,
    content: '',
  })
  // 拿取評論資料
  const getSingleComment = async (id) => {
    await axios
      .post(GET_SINGLE_COMMENT, {
        cid: id,
      })
      .then((res) => {
        console.log(res.data)
        setSingleComment(res.data)
      })
  }
  // 確定送出評論
  const postSingleComment = async () => {
    await axios
      .post(POST_SINGLE_COMMENT, {
        pid: p_comment_id,
        star: editComment.star,
        content: editComment.content,
      })
      .then((res) => {
        console.log('comment result:', res)
        if (res.data.success) {
          window.location.reload()
        } else {
          setInfoText(res.data.error)
        }
      })
  }

  useEffect(() => {
    getSingleComment(p_comment_id)
  }, [p_comment_id])
  return (
    <>
      <div className="member_container">
        <div className="detailArea">
          <div className="coupon_box">
            <table className="coupon_box_detail">
              <thead>
                <tr>
                  <th>訂單編號</th>
                  <th>發布日期</th>
                  <th>商品名稱</th>
                  <th>評價星數</th>
                  <th>評價內容</th>
                </tr>
              </thead>
              <tbody>
                {singleComment.length > 0 ? (
                  singleComment[0].comment_done !== 0 ? (
                    singleComment.map((v) => {
                      return (
                        <tr key={v.p_comment_id}>
                          <td>{v.order_id}</td>
                          <td>
                            {dayjs(v.comment_created_at).format(
                              'YYYY-MM-DD hh:mm'
                            )}
                          </td>
                          <td>{v.product_name}</td>

                          <td>
                            <Rating name="read-only" value={v.star} readOnly />
                          </td>

                          <td className="comment_all">
                            <div>{v.content}</div>
                          </td>
                        </tr>
                      )
                    })
                  ) : (
                    singleComment.map((v) => {
                      return (
                        <tr key={v.p_comment_id}>
                          <td>{v.order_id}</td>
                          <td>{dayjs().format('YYYY-MM-DD')}</td>
                          <td>{v.product_name}</td>

                          <td>
                            <div>
                              <Rating
                                name="star"
                                value={editComment.star}
                                onChange={(e) => {
                                  setEditComment({
                                    ...editComment,
                                    star: parseInt(e.target.value),
                                  })
                                  if (e.target.value > 0) {
                                    setInfoText('')
                                  }
                                }}
                              />
                              <p className="rating_star_info">{infoText}</p>
                            </div>
                          </td>

                          <td className="comment_all">
                            <textarea
                              placeholder={'（可選填）說點什麼吧～'}
                              value={editComment.content}
                              onChange={(e) => {
                                setEditComment({
                                  ...editComment,
                                  content: e.target.value,
                                })
                              }}
                            ></textarea>
                          </td>
                        </tr>
                      )
                    })
                  )
                ) : (
                  <tr></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="form_btn_group">
        {singleComment.length > 0 && !!singleComment[0].comment_done ? (
          <button
            className="btn basic_infomation_confirm memberPage_button"
            onClick={(e) => {
              navigation(
                `/product_detail/${singleComment[0].product_id}/${singleComment[0].product_category_id}`
              )
            }}
          >
            查看商品頁
          </button>
        ) : (
          <button
            className="btn basic_infomation_confirm memberPage_button"
            onClick={() => {
              if (memberAuth.token && memberAuth.authorized) {
                if (editComment.star !== 0) {
                  postSingleComment()
                } else {
                  setInfoText('請為商品評分')
                }
              }
            }}
          >
            送出評價
          </button>
        )}

        <button
          className="btn basic_infomation_cancle memberPage_button"
          onClick={(e) => {
            navigation(-1)
          }}
        >
          返回
        </button>
      </div>
    </>
  )
}

export default MemberComment_Detail
