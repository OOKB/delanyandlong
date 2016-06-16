import React, { PropTypes } from 'react'

function CloseButton({ onClick }) {
  return (
    <button className="close btn-small" onClick={onClick}>
      X
    </button>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default CloseButton
