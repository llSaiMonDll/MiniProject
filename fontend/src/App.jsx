import React from 'react'
import Home from './Components/Home'
import { Box,Stack } from '@mui/material'
import {Routes,Route,BrowserRouter,} from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import Profile from './Components/Profile';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <>
    <Stack direction="row" display={"flex"}>
    <BrowserRouter>
      <Routes className="AllRoutes"> 
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/Register' element={<Register/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/About' element={<AboutUs/>}/>
        <Route exact path='/Profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    </Stack>
    
    </>
  )
}

export default App