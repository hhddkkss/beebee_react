//登入頁面的API

//連線主機
export const HOST = 'http://localhost:3003'
//登入
export const LOGIN = `${HOST}/login`

//申請
export const SIGNUP = `${HOST}/signUp`

//地址LIST
export const ADDRESS_LIST = `${HOST}/address_list`

//比價列表
export const COMPARE_LIST_API = `${HOST}/product_compare`

//比價區
export const COMPARE_ING_LIST_API = `${HOST}/product_compare/compareIng`

//商品詳細頁商品資料
export const PRODUCT_DETAIL_API = `${HOST}/product_detail/product_detail_api`

//拿到購物車內的商品項目
export const GET_CART_ITEM_API = `${HOST}/cart/api`

//新增單筆購物車
export const ADD_CART_ITEM = `${HOST}/cart/addItem`

//增加數量進購物車
export const ADD_CART_QUANTITY = `${HOST}/cart/plus`
//減少進購物車
export const MINUS_CART_QUANTITY = `${HOST}/cart/minus`
//刪除進購物車
export const DELETE_CART_ITEM = `${HOST}/cart/delete`
//商品詳細頁加入購物車API
export const PRODUCT_DETAIL_ADD_CART_API = `${HOST}/cart/detailAddCart`

//清空購物車
export const EMPTY_CART = `${HOST}/cart/empty`

//新增文章API
export const MEMBER_POST = `${HOST}/article_page/memberPostArticle`
//編輯文章API
export const MEMBER_EDIT_POST = `${HOST}/article_page/memberEditPostArticle`
// 刪除文章API
export const MEMBER_DELETE_POST = `${HOST}/article_page/deleteArticle`

//拿取分類文章
export const GET_All_ARTICLE_POST = `${HOST}/article_page/allArticle_api`

//拿取首頁文章
export const GET_FRONT_ARTICLES = `${HOST}/article_page/frontArticle_api`
//拿取單篇文章
export const GET_SINGLE_ARTICLE_POST = `${HOST}/article_page/singleArticle_api`

//拿取文章留言
export const GET_ARTICLE_COMMENT = `${HOST}/article_page/articleComments`

//新增文章留言
export const POST_ARTICLE_COMMENT = `${HOST}/article_page/postArticleComments`

//加入或移除喜愛文章
export const ADD_DEL_ARTI_LIKE = `${HOST}/article_page/memArticleLikeOrRemove`

// 拿取會員歷史喜愛
export const ARTICLE_MEMBER_LIKED = `${HOST}/article_page/memberArticleLike`
// 拿取會員歷史文章
export const ARTICLE_MEMBER_POST = `${HOST}/article_page/memberArticlePosted`

//最愛
export const FAVORITES = `${HOST}/favorites`

//最熱門文章
export const HOT_ARTICLES = `${HOST}/article_page/hotIssue`

//文章案讚數
export const SINGLE_ARTICLE_LIKE = `${HOST}/article_page/singleArtLikes`
//優惠券
export const GET_COUPON = `${HOST}/coupon/`

//訂單
export const ADD_ORDER_ALL = `${HOST}/order/order_all`
export const ADD_ORDER_DETAIL = `${HOST}/order/order_detail`

//發文圖片
export const POST_PIC = `${HOST}/article_page/memberPostArticlePic`

// Google登入 取得連結
export const GOOGLE_LOGIN_URL = `${HOST}/googleAuth`
// Google登入 取得資料
export const GOOGLE_LOGIN_DATA = `${HOST}/googleAuth/googleBack`
//拿購買清單
export const GET_PURCHASE_RECORDS = `${HOST}/member_page/membershoppinglist/`

//購買清單訂單明細
export const GET_PURCHASE_DETAIL = `${HOST}/member_page/shoppinglistdetail/`
//拿會員資料 
export const GET_MEMBER_DATA = `${HOST}/member_page/member_api/`



// 會員區商品歷史評論拿取
export const GET_HISTORY_COMMEND = `${HOST}/memberComment/getAllComment`

// 按下確認收貨後新增商品評論
export const HANDLE_CHECK_RECEIVE_NEW_COMMENT = `${HOST}/memberComment/handlenewComment`

// 單獨評論拿取
export const GET_SINGLE_COMMENT = `${HOST}/memberComment/getSingleComment`
// 修改評論
export const POST_SINGLE_COMMENT = `${HOST}/memberComment/upDateComment`

