import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Admin from '../components/Admin';
import Cart from '../components/Cart';
import Home from '../components/Home';
import Mensshop from '../components/Mensshop';
import PrivateRoutes from './PrivateRoutes';
import Main from '../components/Main';
import Womensshop from '../components/Womensshop';
import Cashmere from '../components/Cashmere'

function AllRoutes() {
  return (
    <Routes>
      <Route path='/Mens' element={<Mensshop/>}></Route>
      <Route path='/Womens' element={<Womensshop/>}></Route>
      <Route path='/Cashmere' element={<Cashmere/>}></Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Mensshop/>}></Route>
      <Route path='/adminpanel' element={<Admin/>}></Route>
      <Route path='/home' element={<Main/>}></Route>
      <Route path='/Cart' element={
        // <PrivateRoutes>
          <Cart/>
        /* </PrivateRoutes> */
      }>
      </Route>
      
    </Routes>
  )
}

export default AllRoutes;