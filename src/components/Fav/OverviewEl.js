import React, { PropTypes } from 'react'
import { map } from 'lodash'
import Box from './Box'
import CollectionEl from './CollectionEl'
import Field from '../../containers/FormField'

const collectionField = {
  // className: 'collection-title',
  emptyText: 'Create new collection.',
  icon: { className: 'light-gray', symbol: 'pencil' },
  id: 'new-collection',
  placeholder: 'Title',
  prefix: [ 'collection', 'title' ],
  // validate
}

function Overview({ message, onClose, userCollections }) {
  return (
    <Box message={message} onClose={onClose}>
      <h3 className="m0 fs1 uppercase mono bb1 fw400 mb05">User Collections</h3>
      <ul className="list-reset collections fa-ul">
        {map(userCollections, CollectionEl)}
        <li><Field {...collectionField} emptyText="new collection" /></li>
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
