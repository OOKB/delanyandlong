import React, { PropTypes } from 'react'
import { Link } from 'redux-history-sync'

import Close from './CloseButton'
import Field from './Editable/FieldWrapper'

function getSchema(listItem) {
  const prefix = [ listItem.type, listItem.id ]
  return {
    description: {
      description: 'Notes about item within collection.',
      label: 'Notes',
      id: `${listItem.id}-description`,
      prefix: prefix.concat('description'),
      value: listItem.description,
    },
    position: {
      description: 'Position within list.',
      label: 'Position',
      id: `${listItem.id}-position`,
      prefix: prefix.concat('position'),
      value: listItem.position,
    },
  }
}
function FavAlert({ onClick, item, listItem }) {
  const message = `${item.id} has been added to your ${listItem.collection.title} collection!`
  const schema = getSchema(listItem)
  return (
    <div className="favorite popup absolute p1" style={{ zIndex: 10 }}>
      <Close onClick={onClick} />
      <div className="outer"><div className="inner">
        <p>{message}</p>
        <ul>
          <li><Field {...schema.position} /></li>
          <li><Field {...schema.description} /></li>
        </ul>
        <Link className="small uppercase" href="/favs" onClick={onClick}>View and share</Link>
        <div className="small" style={{ color: 'burlywood' }}>ListItem ID: {listItem.id}</div>
      </div></div>
    </div>
  )
}

FavAlert.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  listItem: PropTypes.object.isRequired,
}

export default FavAlert
