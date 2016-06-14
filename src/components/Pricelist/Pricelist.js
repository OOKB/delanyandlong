import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Search from './PricelistSearch'
import Table from './PricelistTable'
import { pricelistSelector } from '../../redux/select'

function Pricelist(props) {
  const { info, items } = props
  return (
    <div id="container-pricelist" className={info.activeCategory}>
      <h1>pricelist</h1>
      <Search {...info} />
      <Table columns={info.columns} items={items} />
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
