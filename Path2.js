import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import HomePage from './HomePage'
import ButtonAppBar from './Appbar'
import Men from './Men'
import Women from './Women'
import Children from './Children'
import Payment from './Payment'
import AddressForm from'./AdressForm';
import AddressForm1 from'./AddressForm1';
import AddressForm2 from'./AddressForm2';

const Path2 = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path='/HomePage' element={<HomePage/>}></Route>
            <Route path='/Appbar'element={<ButtonAppBar/>}></Route>
            <Route path='/Men'element={<Men/>}></Route>
            <Route path='/Women'element={<Women/>}></Route>
            <Route path='/Children'element={<Children/>}></Route>
            <Route path='/Payment'element={<Payment/>}></Route>
            <Route path="/Addressform" element={<AddressForm/>}/>
      <Route path="/Addressform1" element={<AddressForm1/>}/>
      <Route path="/Addressform2" element={<AddressForm2/>}/>
      <Route path="/payment" element={<Payment/>}/>






           

        </Routes>
    </BrowserRouter>
  )
}

export default Path2;