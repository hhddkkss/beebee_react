import React,{useState,useEffect} from 'react'
import {GET_FRONT_ARTICLES } from '../component/LoginApi'
import axios from 'axios'
import Dayjs from 'dayjs'
import { useLocation, useParams,useNavigate } from 'react-router-dom'


function Front({hashtagColor,frontData}) {
    const navigation = useNavigate()
    


  return (
    <>
    {frontData.length > 0? 
     <div className="article_front">
            <div className="news_category_card bg_orange">
                <div className="category_title">
                    <div className="title">Bee新聞
                    <svg className="article_mb_show" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.42871 18.5715L10.0001 10.0001L1.42871 1.42868" stroke="#F4F4F4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 18.5715L18.5714 10.0001L10 1.42868" stroke="#F4F4F4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="description article_mb_hidden">為網友提供專業的最新時事動態，為您提供最新、最完整的時事報導。</div>
                    <img  src={"/images/article/article_orange.png"} alt="" className="article_mb_hidden"/>
                </div>

                <div className="latest_article">
                    <div className="article">
                        <div className="title">{frontData[0].title}</div>
                        <div className="content article_mb_hidden">{frontData[0].content_1}</div>
                        <div className="foot">
                            <div className="article_writer">
                                <img src={'/images/'+frontData[0].member_pic} alt=""/>
                                <div className="writer_name">{frontData[0].email}</div>
                                <div className="post_time">{Dayjs(frontData[0].created_at).format('YYYY/MM/DD')}</div>
                            </div>

                            <div className="hashtag_group">
                            {frontData[0].article_hashtag.map((v,i)=>{
                                return(
                                    <div key={i} className="hashtags"
                                    style={{backgroundColor:hashtagColor(i)}}>{v}</div>
                                )
                            })}
                                
                            </div>
                        </div>
                    </div>
                    <img onClick={()=>{navigation('/articles/beebeePostNO/'+frontData[0].article_id)}} src={'/images/article/'+frontData[0].article_pic_main} alt=""/>
                </div>

            </div>

            <div className="news_category_card bg_blue">
                <div className="category_title">
                    <div className="title">推薦版
                    <svg className="article_mb_show" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.42871 18.5715L10.0001 10.0001L1.42871 1.42868" stroke="#F4F4F4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 18.5715L18.5714 10.0001L10 1.42868" stroke="#F4F4F4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="description article_mb_hidden">網友最誠心的推薦好物，貨比三家不吃虧！</div>
                    <img src="/images/article/article_blue.png" alt="" className="article_mb_hidden"/>
                </div>

                <div className="latest_article">
                    
                    <img onClick={()=>{navigation('/articles/beebeePostNO/'+frontData[1].article_id)}} src={'/images/article/'+frontData[1].article_pic_main} alt=""/>
                    <div className="article">
                        <div className="title">{frontData[1].title}</div>
                        <div className="content article_mb_hidden">{frontData[1].content_1}</div>
                        <div className="foot">
                            <div className="article_writer">
                                <img src={'/images/'+frontData[1].member_pic} alt=""/>
                                <div className="writer_name">{frontData[1].email}</div>
                                <div className="post_time">
                                {Dayjs(frontData[1].created_at).format('YYYY/MM/DD')}
                                </div>
                            </div>

                            <div className="hashtag_group">
                            {frontData[1].article_hashtag.map((v,i)=>{
                                return(
                                    <div key={i} className="hashtags"
                                    style={{backgroundColor:hashtagColor(i)}}>{v}</div>
                                )
                            })}
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="news_category_card bg_pink">
                <div className="category_title">
                    <div className="title">心得版
                    <svg className="article_mb_show" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.42871 18.5715L10.0001 10.0001L1.42871 1.42868" stroke="#F4F4F4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 18.5715L18.5714 10.0001L10 1.42868" stroke="#F4F4F4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div className="description article_mb_hidden">最詳細的使用推薦心得就在BEEbeE，結合自己的使用經驗，一啟發文與別人分享吧！</div>
                    <img src="/images/article/article_pink.png" alt="" className="article_mb_hidden"/>
                </div>

                <div className="latest_article">
                    <div className="article">
                        <div className="title">{frontData[2].title}</div>
                        <div className="content article_mb_hidden">{frontData[2].content_1}</div>
                        <div className="foot">
                            <div className="article_writer">
                                <img src={'/images/'+frontData[2].member_pic}alt=""/>
                                <div className="writer_name">{frontData[2].email}</div>
                                <div className="post_time">
                                {Dayjs(frontData[2].created_at).format('YYYY/MM/DD')}
                                </div>
                            </div>

                            <div className="hashtag_group">
                            {frontData[2].article_hashtag.map((v,i)=>{
                                return(
                                    <div key={i} className="hashtags"
                                    style={{backgroundColor:hashtagColor(i)}}>{v}</div>
                                )
                            })}
                                
                            </div>
                        </div>
                    </div>
                    <img onClick={()=>{navigation('/articles/beebeePostNO/'+frontData[2].article_id)}} src={'/images/article/'+frontData[2].article_pic_main}alt=""/>
                </div>

            </div>


        </div>:'' }
       
    </>
  )
}

export default Front