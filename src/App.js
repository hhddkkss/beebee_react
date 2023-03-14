import Products from './Products'
import MemberLogin from './MemberLogin/'
import { AuthContextProvider } from './Contexts/AuthContext'
import { ProductFunctionContextProvider } from './Contexts/ProductFunctionContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './Products/ProductDetail'
import Cart from './Cart'
import Checkout from './Checkout'
import DonePage from './DonePage'
import HomePage from './Home/HomePage'
import Home4ads from './Home/Home_4ads'

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <ProductFunctionContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product_detail" element={<ProductDetail />} />
              <Route path="/member_login" element={<MemberLogin />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/donePage" element={<DonePage />} />
            </Routes>
          </ProductFunctionContextProvider>
        </AuthContextProvider>
      </Router>
    </>
  )
}

export default App
