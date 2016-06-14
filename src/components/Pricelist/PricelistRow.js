import React, { PropTypes } from 'react'
import classnames from 'classnames'
import map from 'lodash/map'

import { cellStyles } from './styles'

function cellValue(item, key, printWhenColor) {
  if (item.isPattern) return item[key]
  const colorKey = printWhenColor[key]
  return colorKey && item[colorKey] || null
}

function PricelistRowPattern({ columns, item, printWhenColor }) {
  const className = classnames({
    color: !item.isPattern,
    pattern: item.isPattern,
  })
  return (
    <tr className={className}>
      {map(columns, ({ value }) => (
        <td key={value} style={cellStyles[value]}>
          {cellValue(item, value, printWhenColor)}
        </td>
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
