import React from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash/merge'

const style = {
  base: {
    background: 'transparent',
    border: 0,
    color: 'rgba(205,206,191,1)',
    fontSize: '1rem',
    textAlign: 'left',
  },
}

function Placeholder({ color, name, ...props }) {
  return (
    <button {...props} style={merge(style.base, { color })}>
      {name}
    </button>
  )
}

Placeholder.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired, // Name of the field.
  onClick: PropTypes.func.isRequired,
}
Placeholder.defaultProps = {
  color: 'rgba(205,206,191,1)',
}

export default Placeholder
