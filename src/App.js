import Products from './Products/Products'
import LoginPage from './memberLogin/LoginPage'
import HomePage from './Home/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/product" element={<Products />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/member_login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
