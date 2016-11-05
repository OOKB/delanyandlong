import React, { PropTypes } from 'react'
import Link from 'redux-history-component'

import Box from './Box'
import Field from '../Editable/FieldWrapper'

function FavAlert({ item, listItem, onClose, schema }) {
  const message = `${item.id} has been added to your ${listItem.collection.title} collection!`
  const collectionUrl = `/project/${listItem.id}`
  return (
    <Box onClose={onClose} message={message}>
      <ul className="list-reset mb1">
        <li><Field {...schema.position} /></li>
        <li><Field {...schema.description} /></li>
      </ul>
      <Link className="small uppercase" href="/favs" onClick={onClose}>View and share</Link>
      <div className="small" style={{ color: 'burlywood' }}>ListItem ID: {listItem.id}</div>
    </Box>
  )
}

FavAlert.propTypes = {
  item: PropTypes.object.isRequired,
  listItem: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  schema: PropTypes.object,
}

export default FavAlert
