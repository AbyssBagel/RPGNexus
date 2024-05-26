import React from 'react'
import logo from '../../img/icon.png'
import './PageHeader.scss'
import NavBar from './NavBar'

const PageHeader = () => {
  return (
    <header>
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="logo" width="400px" />
        </div>
        <div className="login">
          <button className="button">Login</button>
        </div>
      </div>
      <NavBar />
    </header>
  )
}

export default PageHeader
