import React from 'react'
import PropTypes from 'prop-types'
import './Component.scss'

const Component = ({ children, style, ...props }) => {
  const defaultProps = Component.defaultProps
  const { m, p, mb, mt, ml, mr, pb, pt, pl, pr, mx, my, px, py, gap } = props

  const className = [
    ...style,
    m !== defaultProps.m && `rpg-m-${m}`,
    p !== defaultProps.p && `rpg-p-${p}`,
    mb !== defaultProps.mb && `rpg-mb-${mb}`,
    mt !== defaultProps.mt && `rpg-mt-${mt}`,
    ml !== defaultProps.ml && `rpg-ml-${ml}`,
    mr !== defaultProps.mr && `rpg-mr-${mr}`,
    pb !== defaultProps.pb && `rpg-pb-${pb}`,
    pt !== defaultProps.pt && `rpg-pt-${pt}`,
    pl !== defaultProps.pl && `rpg-pl-${pl}`,
    pr !== defaultProps.pr && `rpg-pr-${pr}`,
    mx !== defaultProps.mx && `rpg-mx-${mx}`,
    my !== defaultProps.my && `rpg-my-${my}`,
    px !== defaultProps.px && `rpg-px-${px}`,
    py !== defaultProps.py && `rpg-py-${py}`,
    gap !== defaultProps.gap && `rpg-gap-${gap}`,
  ]
    .filter(Boolean)
    .join(' ')

  return <div className={`rpg-container ${className}`}>{children}</div>
}

Component.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.array,
  m: PropTypes.string,
  p: PropTypes.string,
  mb: PropTypes.string,
  mt: PropTypes.string,
  ml: PropTypes.string,
  mr: PropTypes.string,
  pb: PropTypes.string,
  pt: PropTypes.string,
  pl: PropTypes.string,
  pr: PropTypes.string,
  mx: PropTypes.string,
  my: PropTypes.string,
  px: PropTypes.string,
  py: PropTypes.string,
  gap: PropTypes.string,
}

Component.defaultProps = {
  style: [],
  m: null,
  p: null,
  mb: '0',
  mt: '0',
  ml: '0',
  mr: '0',
  pb: '0',
  pt: '0',
  pl: '0',
  pr: '0',
  mx: null,
  my: null,
  px: null,
  py: null,
  gap: '0',
}

export default Component
