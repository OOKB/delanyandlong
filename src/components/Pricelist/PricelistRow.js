import React, { PropTypes } from 'react'
import map from 'lodash/map'

function cellValue(item, key, printWhenColor) {
  if (item.isPattern) return item[key]
  const colorKey = printWhenColor[key]
  return colorKey && item[colorKey] || null
}

function PricelistRowPattern({ columns, item, printWhenColor }) {
  return (
    <tr>
      {map(columns, ({ value }) => (
        <td key={value}>{cellValue(item, value, printWhenColor)}</td>
      ))}
    </tr>
  )
}

PricelistRowPattern.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  printWhenColor: PropTypes.object.isRequired,
}

export default PricelistRowPattern
