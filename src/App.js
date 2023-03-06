import Products from './component/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/product" element={<Products />} />
        </Routes>
      </Router>
      <Products />
    </>
  )
}

export default App
