import React, { PropTypes } from 'react'
import classNames from 'classnames'

function Icon({ symbol, className, hidden }) {
  const classStr = `fa fa-${symbol}`

  return (
    <i
      className={classNames(classStr, className)}
      aria-hidden={hidden}
    />
  )
}

Icon.propTypes = {
  symbol: PropTypes.string.isRequired,
  className: PropTypes.string,
  hidden: PropTypes.bool.isRequired,
}
Icon.defaultProps = {
  hidden: 'false',
}
export default Icon
