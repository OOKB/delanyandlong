import React, { Component, PropTypes } from 'react'
import map from 'lodash/map'
import shallowCompare from 'react-addons-shallow-compare'
import Row from './PricelistRow'

const styles = {
  base: {
    width: '100%',
  },
}

class PricelistTable extends Component {
  shouldComponentUpdate(nextProps) {
    const compare = nextProps.items !== this.props.items
    return compare
  }
  render() {
    const { columns, items, printWhenColor } = this.props
    return (
      <table style={styles.base}>
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
}

PricelistTable.propTypes = {
  columns: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
  printWhenColor: PropTypes.object.isRequired,
}
PricelistTable.defaultProps = {
}
export default PricelistTable
