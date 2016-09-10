import React, { PropTypes } from 'react'
import map from 'lodash/map'

import ItemFav from '../containers/ItemFav'

function Info({ item, fields }) {
  return (
    <div className="item-information">
      <ItemFav item={item} />
      <ul className="list-reset bb1 black-border">
        {map(fields, ({ value, label }) => (
          <li key={value} className={value}>
            <h3 className="m0 uppercase small">{label}</h3>
            <p className="m0">{item[value]}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

Info.propTypes = {
  item: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
}
Info.defaultProps = {
  fields: [
    { value: 'id', label: 'Fabric' },
    { value: 'name', label: 'Pattern' },
    { value: 'color', label: 'Color' },
    { value: 'contents', label: 'Content' },
    { value: 'approxWidth', label: 'Approx Width' },
    { value: 'price', label: 'Price' },
  ],
}
export default Info
