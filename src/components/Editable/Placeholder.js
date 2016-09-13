import React, { PropTypes } from 'react'
import merge from 'lodash/merge'

const style = {
  base: {
    background: 'transparent',
    border: 0,
    color: 'grey',
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
  color: 'grey',
}

export default Placeholder
