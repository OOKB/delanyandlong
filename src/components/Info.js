import React, { PropTypes } from 'react'
import map from 'lodash/map'

function Info({ item, fields }) {
  return (
    <div className="item-information">
      <ul>
        {map(fields, ({ value, label }) => (
          <li key={value} className={value}>
            <h3>{label}</h3>
            <p>{item[value]}</p>
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
    { value: 'color', label: 'Color' },
    { value: 'contents', label: 'Content' },
    { value: 'approxWidth', label: 'Approx Width' },
  ],
}
export default Info
