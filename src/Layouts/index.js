import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import NavBar from '../Components/UI/NavBar'
import SideBar from '../Components/UI/SideBar'
import Dashboard from '../Pages/Dashboard/index'

const index = () => {
  return (
    <LayoutMainContainer>
      <SideBar></SideBar>
      <div className="mainContainer">
        <NavBar />
        {/* <Dashboard></Dashboard> */}
      </div>
    </LayoutMainContainer>
  )
}

export default index

const LayoutMainContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: var(--secondaryBackground);
  display: flex;
  position: relative;

  .mainContainer{
    position: relative;
    left: 250px;
    top: 0;
    bottom: 0;
    right: 0;
    width: calc(100% - 250px);
    min-height: 100vh;
    /* background: #fefefe; */
    padding: 20px;
  }
`