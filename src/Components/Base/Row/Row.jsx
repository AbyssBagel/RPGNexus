import React from 'react'
import PropTypes from 'prop-types'
import './Row.scss'

const Row = ({ children, mb, mt, ml, mr, pb, pt, pl, pr, gap, justifyContent, alignItems }) => {
  const style = {
    '--mb': mb,
    '--mt': mt,
    '--ml': ml,
    '--mr': mr,
    '--pb': pb,
    '--pt': pt,
    '--pl': pl,
    '--pr': pr,
    '--gap': gap,
    '--justify-content': justifyContent,
    '--align-items': alignItems,
  }

  return (
    <div className="row" style={style}>
      {children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  mb: PropTypes.string,
  mt: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  pb: PropTypes.string,
  pt: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
  gap: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
}

Row.defaultProps = {
  mb: '0',
  mt: '0',
  ml: '0',
  mr: '0',
  pb: '0',
  pt: '0',
  pl: '0',
  pr: '0',
  gap: '0',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
}

export default Row
