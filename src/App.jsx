import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './Footer/Footer'
import { useState } from 'react'
import Loginpopup from './Components/LoginPopup/Loginpopup'
import PlaceOrder from './Pages/Placehorder/PlaceOrder'
function App() {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin ? <Loginpopup setShowLogin={setShowLogin} /> : <></>}
      <div className='App'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
