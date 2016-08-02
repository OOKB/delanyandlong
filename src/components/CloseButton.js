import React, { PropTypes } from 'react'
import ButtonEl from './Button'

function CloseButton(props) {
  return <ButtonEl className="close btn-small" icon="times" {...props} />
}

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default CloseButton
