import React, { PropTypes } from 'react'

function CloseButton({ onClick }) {
  return (
    <button className="close btn-small btn-block absolute" onClick={onClick}>
      <i className="fa fa-times" aria-hidden="true"></i>
    </button>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default CloseButton
