import Products from './Products'
import MemberLogin from './MemberLogin/'
import { AuthContextProvider } from './Contexts/AuthContext'
import { ProductFunctionContextProvider } from './Contexts/ProductFunctionContext'
import { CompareContextProvider } from './Contexts/CompareContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import Checkout from './Checkout'
import DonePage from './Checkout/DonePage'
import HomePage from './Home/HomePage'
import Articles from './Articles'

import MemberPage from './MemberPage'
import MemberComment_List from './MemberPage/MemberComment_List'
import MemberCoupon_List from './MemberPage/MemberCoupon_List'
import MemberShopping_List from './MemberPage/MemberShopping_List'
import MemberShopping_List_Detail from './MemberPage/MemberShoppingList_Detail'
import MemberLevel from './MemberPage/MemberLevel'
import MemberCustomerService from './MemberPage/MemberCustomerService'

import MeberPage_Sidebar from './MemberPage/MemberPageComponent/MeberPage_Sidebar'
import MemberPage_ChangeAvatar from './MemberPage/MemberPageComponent/MemberPage_ChangeAvatar'

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <ProductFunctionContextProvider>
            <CompareContextProvider>
              <Routes>
                <Route path="/" element={<MeberPage_Sidebar />} />
                <Route path="/products" element={<Products />} />
                <Route
                  path="/product_detail/:product_id/:product_category"
                  element={<ProductDetail />}
                />
                <Route path="/member_login" element={<MemberLogin />} />
                <Route path="/member_page/edit" element={<MemberPage />} />
                <Route
                  path="/member_page/shoppinglist"
                  element={<MemberShopping_List />}
                />
                <Route
                  path="/member_page/shoppinglistdetail"
                  element={<MemberShopping_List_Detail />}
                />
                <Route
                  path="/member_page/membercoupon_list"
                  element={<MemberCoupon_List />}
                />
                <Route
                  path="/member_page/membercomment_list"
                  element={<MemberComment_List />}
                />
                <Route
                  path="/member_page/memberlevel"
                  element={<MemberLevel />}
                />
                <Route
                  path="/member_page/membercustomerservice"
                  element={<MemberCustomerService />}
                />

                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/donePage" element={<DonePage />} />
                <Route path="/articles/:nowPage" element={<Articles />} />
                <Route
                  path="/articles/:nowPage/:article_id"
                  element={<Articles />}
                />
              </Routes>
            </CompareContextProvider>
          </ProductFunctionContextProvider>
        </AuthContextProvider>
      </Router>
    </>
  )
}

export default App
