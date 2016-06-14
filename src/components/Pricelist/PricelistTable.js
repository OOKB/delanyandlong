import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Row from './PricelistRowPattern'

function PricelistTable({ columns, items }) {
  return (
    <table>
      <thead><tr>
        {map(columns, label => (
          <td className={label} key={label}>
            {label}
          </td>
        ))}
      </tr></thead>
      <tbody>
        {map(items, item => (
          <Row columns={columns} item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  )
}

PricelistTable.propTypes = {
  columns: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
}
PricelistTable.defaultProps = {
}
export default PricelistTable
