import React, { PropTypes } from 'react'
import classnames from 'classnames'
import map from 'lodash/map'
import { Link } from 'redux-history-sync'

import FavButton from '../FavButton'

import { cellStyles } from './styles'

function makeValue(key, alt, value) {
  if (key !== 'img') return value
  return <img src={value} alt={alt} />
}

function itemLink(item, key, value) {
  if (key !== 'id' && key !== 'color' && key !== 'img') return value
  return <Link href={item.link}>{makeValue(key, item.id, value)}</Link>
}

function cellValue(item, key, printWhenColor) {
  if (item.isPattern) return itemLink(item, key, item[key])
  const colorKey = printWhenColor[key]
  return colorKey && itemLink(item, key, item[colorKey]) || null
}

function PricelistRowPattern({ columns, item, favorited, favoriteItem, printWhenColor }) {
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
      <td className="favButton">
        <FavButton favorited={favorited} item={item} onClick={favoriteItem} />
      </td>
    </tr>
  )
}

PricelistRowPattern.propTypes = {
  columns: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  printWhenColor: PropTypes.object.isRequired,
  favorited: PropTypes.bool.isRequired,
  favoriteItem: PropTypes.func.isRequired,
}

export default PricelistRowPattern
