import React, { PropTypes } from 'react'
import classnames from 'classnames'

function Button({ className, icon, ...props }) {
  return (
    <button {...props} className={classnames('absolute btn-block', className)}>
      <i className={classnames('fa', `fa-${icon}`)} aria-hidden="true"></i>
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Button
