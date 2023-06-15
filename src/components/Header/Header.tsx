import React from 'react'
import Logo from '../../Assets/Images/logo.png'

const Header = () => {
  return (
    <>
      <div className="header-parent">
        <div className="logo-parent">
          <img className="logo-img" src={Logo} alt="Logo"></img>
          <div>Code</div>
        </div>
      </div>
    </>
  )
}

export default Header
