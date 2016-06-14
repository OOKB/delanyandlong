import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Search from './PricelistSearch'
import Table from './PricelistTable'
import { pricelistSelector } from '../../redux/select'

function Pricelist(props) {
  const { info, items } = props
  const { activeCategory, columns, printWhenColor } = info
  return (
    <div id="container-pricelist" className={activeCategory}>
      <h1>pricelist</h1>
      <Search {...info} />
      <Table columns={columns} items={items} printWhenColor={printWhenColor} />
    </div>
  )
}
Pricelist.propTypes = {
  info: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
}
Pricelist.defaultProps = {
}
export default connect(pricelistSelector)(Pricelist)
