import React, { PropTypes } from 'react'
import { map } from 'lodash'
import Box from './Box'

function CollectionEl({ title }) {
  return <li>{title}</li>
}
CollectionEl.propTypes = {
  title: PropTypes.string.isRequired,
}
function Overview({ onClose, message, userCollections }) {
  return (
    <Box message={message} onClose={onClose}>
      <h3>User Collections</h3>
      <ul>{map(userCollections, CollectionEl)}</ul>
    </Box>
  )
}
Overview.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  userCollections: PropTypes.object.isRequired,
}

export default Overview
