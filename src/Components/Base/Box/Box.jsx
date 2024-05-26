import React from 'react'
import PropTypes from 'prop-types'
import './Box.scss'

const Box = ({ children }) => {
  return <div className="rpg-box">{children}</div>
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Box
