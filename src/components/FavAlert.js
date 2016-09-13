import React, { PropTypes } from 'react'
import { Link } from 'redux-history-sync'

import Close from './CloseButton'
import Field from './Editable/Field'

function FavAlert({ onClick, item, listItem }) {
  const message = `${item.id} has been added to your favorites!`
  const prefix = [ listItem.type, listItem.id ]
  return (
    <div className="favorite popup absolute p1">
      <Close onClick={onClick} />
      <div className="outer"><div className="inner">
        <p>{message}</p>
        <ul>
          <li>
            <Field
              description="Position within list."
              name="Position"
              type="number"
              prefix={prefix.concat('position')}
              initialValue={listItem.position}
            />
          </li>
          <li>
            <Field
              description="Notes about item within collection."
              name="Notes"
              type="text"
              prefix={prefix.concat('description')}
              initialValue={listItem.position}
            />
          </li>
          {listItem.title && <li>{listItem.title}</li>}
        </ul>
        <Link className="small uppercase" href="/favs" onClick={onClick}>View and share</Link>
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
