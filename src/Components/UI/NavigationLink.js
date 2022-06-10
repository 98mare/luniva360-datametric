import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// className={`sideBarItem ${pathname.includes(data.pathname) && 'active'} ${IsActive && 'active'}`}

const NavigationLink = ({ data, cPathname }) => {
  console.log('data', cPathname);
  const [IsActive, setIsActive] = useState(false)
  const handleClick = () => {
    if (cPathname.includes(data.pathname)) {
      setIsActive(true)
    } else {
      setIsActive(true)
    }

  }
  return (
    <Link to={data.pathname} onClick={() => handleClick()}>
      <div className={`${IsActive && 'active'}`}>
        <data.icon />
        <span>{data.name}</span>
      </div>
    </Link>
  )
}

export default NavigationLink

