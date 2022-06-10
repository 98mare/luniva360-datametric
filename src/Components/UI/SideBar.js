import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Logo from '../../Assets/Images/lunivatech-360-01.png'
// import { AiFillHome } from "react-icons/ai"

import { MdDashboard, MdAttachMoney, MdEmail } from 'react-icons/md'
import { IoBarChartSharp, IoLogoWechat, IoDocumentText, IoDocument, IoDocumentTextOutline } from 'react-icons/io5'
import { FaBuilding, FaStethoscope } from 'react-icons/fa'
import { BsClipboardData, BsCalendar3, BsGearWideConnected, BsFillCalendarCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import NavigationLink from './NavigationLink'

const navData = [
  {
    id: 1,
    name: 'Dashboard',
    icon: MdDashboard,
    pathname: '/Dashboard'
  },
  {
    id: 2,
    name: 'Datametric Report',
    icon: FaBuilding,
    pathname: '/DatametricReport'
  },
  {
    id: 3,
    name: 'Finance Dashboard',
    icon: IoBarChartSharp,
    pathname: '/FinanceDashboard'
  },
  {
    id: 4,
    name: 'Department Analytucs',
    icon: FaBuilding,
    pathname: '/DepartmentAnalytucs'
  },
  {
    id: 5,
    name: 'Outsourcing Analytics',
    icon: BsClipboardData,
    pathname: '/OutsourcingAnalytics'
  },
  {
    id: 6,
    name: 'Marketing Analytics',
    icon: BsCalendar3,
    pathname: '/MarketingAnalytics'
  },
  {
    id: 7,
    name: 'TAT Analysis',
    icon: IoLogoWechat,
    pathname: '/TATAnalysis'
  },
  {
    id: 8,
    name: 'Test Analysis',
    icon: FaStethoscope,
    pathname: '/TestAnalysis'
  },
  {
    id: 9,
    name: 'Expense Management',
    icon: MdAttachMoney,
    pathname: '/ExpenseManagement'
  },
  {
    id: 10,
    name: 'QC Control',
    icon: BsGearWideConnected,
    pathname: '/QCControl'
  },
  {
    id: 11,
    name: 'Dynamic Report',
    icon: IoDocumentText,
    pathname: '/DynamicReport'
  },
  {
    id: 12,
    name: 'Edit Bill',
    icon: IoDocument,
    pathname: '/EditBill'
  },
  {
    id: 13,
    name: 'MIS Report',
    icon: IoDocumentTextOutline,
    pathname: '/MISReport'
  },
  {
    id: 14,
    name: 'SMS',
    icon: MdEmail,
    pathname: '/SMS'
  },
  {
    id: 15,
    name: 'Date Change',
    icon: BsFillCalendarCheckFill,
    pathname: '/DateChange'
  },
  {
    id: 16,
    name: 'Bulk Negative',
    icon: IoDocument,
    pathname: '/BulkNegative'
  },
  {
    id: 17,
    name: 'Report',
    icon: IoDocument,
    pathname: '/Report'
  },
]


const SideBar = () => {
  let pathname = window.location.pathname
  const [IsActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(true)
  }




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
        {
          navData.map(e => (

            // <NavigationLink data={e} cPathname={pathname} />
            // <div className={` sideBarItem ${IsActive && 'active'}`}></div>
            <Link to={e.pathname} onClick={() => handleClick()}>
              <div className={` sideBarItem ${pathname.includes(e.pathname) && 'active'}`}>
                <e.icon />
                <span>{e.name}</span>
              </div>
            </Link>
          ))
        }

      </SideBarComponents>

      {/* <div className="footer">
        <span>All rights reserved</span>
        <img src={Logo} alt="" />
      </div> */}

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
  ${'' /* border-radius: 16px; */}
  position: fixed;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  padding: 8px 16px;
  box-shadow: rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem;
  overflow-y: auto;



  /* width */
::-webkit-scrollbar {
  width: 4px;
  border-radius: 50%;
  
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
  margin: 20px 0;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #3c445d35; 
  margin: 10px 0;
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3c445d; 
  width: 10px;
}

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