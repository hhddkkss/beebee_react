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

//新增進購物車
export const ADD_CART_QUANTITY = `${HOST}/cart/plus`
//新增進購物車
export const MINUS_CART_QUANTITY = `${HOST}/cart/minus`
