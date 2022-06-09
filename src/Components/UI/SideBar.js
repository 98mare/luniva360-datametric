import React from 'react'
import styled from 'styled-components'
import Logo from '../../Assets/Images/lunivatech-360-01.png'
import { AiFillHome } from "react-icons/ai"

import {MdDashboard} from 'react-icons/md'
import {IoBarChartSharp} from 'react-icons/io5'
import {RiBillFill, RiLogoutBoxFill} from 'react-icons/ri'
import {HiDocumentReport} from 'react-icons/hi'

const SideBar = () => {
  return (
    <SideBarContainer>
      <Logocontainer>
        <img src={Logo} alt="" />
      </Logocontainer>
      <hr />
      <SideBarComponents>
        <div className="sideBarItem active">
          <MdDashboard />
          <span>Dashboard</span>
        </div>
        <div className="sideBarItem">
          <IoBarChartSharp />
          <span>Finance</span>
        </div>
        <div className="sideBarItem">
          <RiBillFill />
          <span>Edit Bill</span>
        </div>
        <div className="sideBarItem">
          <HiDocumentReport />
          <span>Reports</span>
        </div>
        <div className="sideBarItem">
          <RiLogoutBoxFill />
          <span>log Out</span>
        </div>

      </SideBarComponents>

      <div className="footer">
        <span>All rights reserved</span>
        <img src={Logo} alt="" />
      </div>

    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.div`
  background-color: #ffffff;
  width: 250px;
  height: 96%;
  /* margin: 20px 0; */
  top: 50%;
  transform: translateY(-50%);
  border-radius: 16px;
  position: fixed;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 8px 16px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;

  hr{
    border: 1px solid #46323230;
    margin: 10px 0;
    border-radius: 50%;
    // background-color: #46323230
  }
  .footer{
    position: absolute;
    bottom: 16px;
    left: 16px;
    right: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--primaryTxt);
    span{
      font-size: 12px;
      opacity: 0.8;
    }

    img{
      width: 60px;
      height: auto;
    }
  }
`

const Logocontainer = styled.div`
  width: 80%;
  height: auto;
  img{
    width: 100%;
  }
`
const SideBarComponents = styled.div`
  .sideBarItem{
    opacity: 1;
    color: var(--primaryTxt);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0.625rem;
    border-radius: 0.375rem;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    // border: 1px solid red;
    margin-bottom: 8px;
    transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    
    span{
      margin-left: 10px;
      font-size: 16px;
      // font-weight: 500;
      color: var(--primaryTxt);
    }
    &:hover{
      background-color: rgb(222, 226, 230);
    }
  }
  .active{
    opacity: 1;
    background: linear-gradient(195deg, rgb(73, 163, 241), #1a73e8);
    color: rgb(255, 255, 255);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0.625rem;
    border-radius: 0.375rem;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;

    span{
      font-weight: 600;
      color: #fefefe;
    }
  }
`