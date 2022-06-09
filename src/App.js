import { Suspense, useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import { AsyncDashBoard, AsyncPublicLayout } from './Components/AsyncComponent/asyncComponent';
import SideBar from './Components/UI/SideBar';
import Layouts from './Layouts/index'
import PublicRoute from './Routes/PublicRoute';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <Layouts></Layouts>
  );
}

export default App;

