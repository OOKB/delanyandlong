import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Fav from './Fav'

function Info({ item, fields }) {
  return (
    <div className="item-information">
      <Fav item={item} />
      <ul className="flex-center list-reset p1 text-center">
        {map(fields, ({ value, label }) => (
          <li key={value} className={value}>
            <h3 className="m0">{label}</h3>
            <p className="m0">{item[value]}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

Info.propTypes = {
  favorited: PropTypes.bool.isRequired,
  favoriteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  fields: PropTypes.array.isRequired,
}
Info.defaultProps = {
  fields: [
    { value: 'id', label: 'Fabric' },
    { value: 'color', label: 'Color' },
    { value: 'contents', label: 'Content' },
    { value: 'approxWidth', label: 'Approx Width' },
  ],
}
export default Info
