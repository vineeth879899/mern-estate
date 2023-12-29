import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SinIn from './pages/SinIn'
import SinOut from './pages/SinOut'
import Profile from './pages/Profile'
import About from './pages/About'
import Header from './components/Header'



export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/sinin' element={<SinIn></SinIn>}></Route>
      <Route path='/sinout' element={<SinOut></SinOut>}></Route>
      <Route path='/profile' element={<Profile></Profile>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
