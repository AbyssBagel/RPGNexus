import React from 'react'
import PropTypes from 'prop-types'
import Component from '../Component/Component'

const Col = ({ children, justifyContent, alignItems, lg, ...props }) => {
  const defaultProps = Col.defaultProps
  const className = [
    'rpg-col',
    lg && (lg === 'auto' ? 'rpg-col-auto' : `rpg-col-${lg}`),
    justifyContent !== defaultProps.justifyContent && `rpg-justify-${justifyContent}`,
    alignItems !== defaultProps.alignItems && `rpg-align-${alignItems}`,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component style={[className]} {...props}>
      {children}
    </Component>
  )
}

Col.propTypes = {
  children: PropTypes.node.isRequired,
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
}

Col.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'stretch',
}

export default Col
