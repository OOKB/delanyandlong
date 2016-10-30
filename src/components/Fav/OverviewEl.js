import React, { PropTypes } from 'react'

import Box from './Box'

function Overview({ onClose, message }) {
  return (
    <Box message={message} onClose={onClose}>
      <p className="m0 mb1">Other stuff.</p>
    </Box>
  )
}
Overview.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
}

export default Overview
