import radium from 'radium'
import React, { PropTypes } from 'react'
import Icon from '../../Icon'

const styles = {
  base: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    border: 'none',
    background: 'transparent',
    width: '1rem',
    color: 'currentColor',
    ':hover': {
      color: 'red',
    },
  },
}

function InputClear({ style, ...props }) {
  return (
    <button {...props} type="button" style={[ styles.base, style ]}>
      <Icon symbol="times" />
    </button>
  )
}

InputClear.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object,
}
InputClear.defaultProps = {
  title: 'Clear input value',
}
export default radium(InputClear)
