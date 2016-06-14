import React, { PropTypes } from 'react'
import map from 'lodash/map'

function PricelistRowPattern({ columns, item }) {
  return (
    <tr>
      {map(columns, key => (
        <td key={key}>{item[key]}</td>
      ))}
    </tr>
  )
}

PricelistRowPattern.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
}

export default PricelistRowPattern
