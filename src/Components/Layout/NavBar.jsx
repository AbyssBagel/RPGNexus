import React from 'react'
import PropTypes from 'prop-types'
import './NavBar.scss'
import Row from '../Base/Row/Row'
import { Link } from 'react-router-dom'

function NavBar({ titles, dropdown }) {
  return (
    <Row>
      <div className="rpg-navbar">
        {titles.map((title, index) => (
          <div key={index} className="rpg-dropdown">
            <button className="rpg-dropbtn">{title}</button>
            <div className="rpg-dropdown-content">
              {dropdown[index].map((item, index) => (
                <Link key={index} to={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Row>
  )
}

NavBar.propTypes = {
  titles: PropTypes.array,
  dropdown: PropTypes.array,
}

export default NavBar
