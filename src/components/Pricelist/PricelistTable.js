import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Row from './PricelistRow'

function PricelistTable({ columns, items, printWhenColor }) {
  return (
    <table>
      <thead><tr>
        {map(columns, ({ label, value }) => (
          <td className={value} key={value}>
            {label}
          </td>
        ))}
      </tr></thead>
      <tbody>
        {map(items, item => (
          <Row columns={columns} item={item} key={item.id} printWhenColor={printWhenColor} />
        ))}
      </tbody>
    </table>
  )
}

PricelistTable.propTypes = {
  columns: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  printWhenColor: PropTypes.object.isRequired,
}
PricelistTable.defaultProps = {
}
export default PricelistTable
