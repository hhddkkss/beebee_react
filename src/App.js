import Products from './Products/Products'
import LoginPage from './memberLogin/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/product" element={<Products />} />
          <Route path="/member_login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
