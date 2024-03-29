import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import Error from './pages/Error.jsx';
import Cart from './pages/Cart.jsx';
import Registration from './pages/Registration.jsx';
import User from './pages/User.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx';
import { CartProvider } from './contexts/CartContext.jsx';


function App() {
  return (
    <CartProvider>
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='*' element={<Error/>}/>
      <Route path='/registration' element={<Registration/>}/>
      <Route path='/user' element={<User/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </div>
  </CartProvider>
  )
}

export default App