import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from '../Pages/Dashboard'
import PublicRoute from './PublicRoute';
import FinanceDashboard from '../Pages/FinanceDashboard'
// import DatametricReport from '../Pages/DatametricReport/index2'
const MainRoute = () => {
  return (
    <Routes>
      {/* <Route exact path='/' element={<DashBoard />}></Route> */}
      {/* <Route exact path='/DatametricReport' element={<DatametricReport/>}></Route> */}
      {/* <PublicRoute /> */}
      <Route exact path = '/' element={<PublicRoute component={<DashBoard/>}/>} />
      <Route exact path='/FinanceDashboard' element={<FinanceDashboard/>}></Route>
    </Routes>
  )
}

export default MainRoute