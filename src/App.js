import Products from './Products/Products'
import MemberLogin from './MemberLogin/'
import { AuthContextProvider } from './Contexts/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <AuthContextProvider>
          <Routes>
            <Route path="/product" element={<Products />} />
            <Route path="/" element={<MemberLogin />} />
            <Route path="/member_login" element={<MemberLogin />} />
          </Routes>
        </AuthContextProvider>
      </Router>
    </>
  )
}

export default App
