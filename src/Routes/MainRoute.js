import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from '../Pages/Dashboard'
import DatametricReport from '../Pages/DatametricReport'
const MainRoute = () => {
  return (
    <Routes>
      <Route exact path='/' element={<DashBoard />}></Route>
      <Route exact path='/DatametricReport' element={<DatametricReport/>}></Route>
    </Routes>
  )
}

export default MainRoute