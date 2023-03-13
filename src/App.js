import Products from './Products'
import MemberLogin from './MemberLogin/'
import { AuthContextProvider } from './Contexts/AuthContext'
import { ProductFunctionContextProvider } from './Contexts/ProductFunctionContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import Cart from './Cart'
import Checkout from './Checkout'
import DonePage from './DonePage'

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <ProductFunctionContextProvider>
            <Routes>
              <Route path="/" element={<MemberLogin />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/product_detail/:product_id/:product_category"
                element={<ProductDetail />}
              />
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
