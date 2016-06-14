import React, { PropTypes } from 'react'
import map from 'lodash/map'

function PricelistTable({ columns }) {
  return (
    <table>
      <thead><tr>
        {map(columns, title => (
          <td className={title} key={title}>
            {title}
          </td>
        ))}
      </tr></thead>
      <tbody></tbody>
    </table>
  )
}

PricelistTable.propTypes = {
  columns: PropTypes.array.isRequired,
}
PricelistTable.defaultProps = {
  columns: [ 'id', 'color', 'price', 'content', 'width', 'repeat' ],
}
export default PricelistTable
