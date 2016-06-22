import React, { PropTypes } from 'react'
import classnames from 'classnames'
import map from 'lodash/map'
import { Link } from 'redux-history-sync'

import { cellStyles } from './styles'

function itemLink(item, key, value) {
  if (key !== 'id' && key !== 'color') return value
  return <Link href={item.link}>{value}</Link>
}

function cellValue(item, key, printWhenColor) {
  if (item.isPattern) return itemLink(item, key, item[key])
  const colorKey = printWhenColor[key]
  return colorKey && itemLink(item, key, item[colorKey]) || null
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
