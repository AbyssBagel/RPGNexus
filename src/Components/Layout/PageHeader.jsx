import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../img/icon.png'
import './PageHeader.scss'
import NavBar from './NavBar'

const PageHeader = () => {
  const navigate = useNavigate()

  return (
    <header>
      <div className="header-top">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" width="400px" />
          </div>
        </Link>
        <div className="login">
          <button className="button" onClick={() => navigate('/users/login')}>
            Login
          </button>
        </div>
      </div>
      <NavBar />
    </header>
  )
}

export default PageHeader
