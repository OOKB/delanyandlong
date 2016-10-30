import React, { PropTypes } from 'react'
import { map } from 'lodash'
import Box from './Box'
import CollectionEl from './CollectionEl'

function Overview({ message, onClose, userCollections }) {
  return (
    <Box message={message} onClose={onClose}>
      <h3>User Collections</h3>
      <ul>
        {map(userCollections, CollectionEl)}
      </ul>
    </Box>
  )
}
Overview.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  userCollections: PropTypes.object.isRequired,
}

export default Overview
