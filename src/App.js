import Products from './Products'
import MemberLogin from './MemberLogin/'
import { AuthContextProvider } from './Contexts/AuthContext'
import { ProductFunctionContextProvider } from './Contexts/ProductFunctionContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './Products/ProductDetail'
import ProductCompere from './Products/ProductCompere'

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <ProductFunctionContextProvider>
            <Routes>
              <Route path="/" element={<MemberLogin />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product_detail" element={<ProductDetail />} />
              <Route path="/member_login" element={<MemberLogin />} />
              <Route path="/ProductCompere" element={<ProductCompere />} />
            </Routes>
          </ProductFunctionContextProvider>
        </AuthContextProvider>
      </Router>
    </>
  )
}

export default App
