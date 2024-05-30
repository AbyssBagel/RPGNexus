import React from 'react'
import PropTypes from 'prop-types'
import Component from '../Component/Component'

const Row = ({ children, justifyContent, alignItems, ...props }) => {
  const className = [
    'rpg-row',
    justifyContent !== 'flex-start' && `rpg-justify-${justifyContent}`,
    alignItems !== 'stretch' && `rpg-align-${alignItems}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component style={[className]} {...props}>
      {children}
    </Component>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
}

export default Row
