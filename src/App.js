import Products from './Products/Products'
import MemberLogin from './MemberLogin/'
import { AuthContextProvider } from './Contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import ProductDetail from './Products/ProductDetail'
import ProductCompere from './Products/ProductCompere'

function App() {
  const [dataFromProducts, setDataFromProducts] = useState({})

  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<MemberLogin />} />
            <Route
              path="/products"
              element={<Products setDataFromProducts={setDataFromProducts} />}
            />
            <Route
              path="/product_detail"
              element={<ProductDetail dataFromProducts={dataFromProducts} />}
            />
            <Route path="/member_login" element={<MemberLogin />} />
            <Route path="/ProductCompere" element={<ProductCompere />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  )
}

export default App
