import React, { PropTypes } from 'react'
import map from 'lodash/map'

import { cellStyles } from './styles'

function PricelistRowPattern({ columns }) {
  return (
    <thead style={cellStyles.theadBase}>
      <tr>
        {map(columns, ({ label, value }) => (
          <td className={value} style={cellStyles[value]} key={value}>
            {label}
          </td>
        ))}
        <td className="favButton"></td>
      </tr>
    </thead>
  )
}

PricelistRowPattern.propTypes = {
  columns: PropTypes.array.isRequired,
}

export default PricelistRowPattern
