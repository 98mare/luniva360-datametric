import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DashBoard from '../Pages/Dashboard'
import FinanceDashboard from '../Pages/FinanceDashboard'
// import DatametricReport from '../Pages/DatametricReport'
const MainRoute = () => {
  return (
    <Routes>
      <Route exact path='/Dashboard' element={<DashBoard />}></Route>
      {/* <Route exact path='/DatametricReport' element={<DatametricReport />}></Route> */}
      <Route exact path='/FinanceDashboard' element={<FinanceDashboard />}></Route>
    </Routes>
  )
}

export default MainRoute