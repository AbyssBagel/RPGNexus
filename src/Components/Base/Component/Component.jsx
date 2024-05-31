import React from 'react'
import PropTypes from 'prop-types'
import './Component.scss'

const Component = ({ children, style, ...props }) => {
  const { m, p, mb, mt, ml, mr, pb, pt, pl, pr, mx, my, px, py, gap } = props

  const className = [
    ...style,
    m !== null && `rpg-m-${m}`,
    p !== null && `rpg-p-${p}`,
    mb !== '0' && `rpg-mb-${mb}`,
    mt !== '0' && `rpg-mt-${mt}`,
    ml !== '0' && `rpg-ml-${ml}`,
    mr !== '0' && `rpg-mr-${mr}`,
    pb !== '0' && `rpg-pb-${pb}`,
    pt !== '0' && `rpg-pt-${pt}`,
    pl !== '0' && `rpg-pl-${pl}`,
    pr !== '0' && `rpg-pr-${pr}`,
    mx !== null && `rpg-mx-${mx}`,
    my !== null && `rpg-my-${my}`,
    px !== null && `rpg-px-${px}`,
    py !== null && `rpg-py-${py}`,
    gap !== '0' && `rpg-gap-${gap}`,
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

export default Component
