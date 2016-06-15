import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Search from './PricelistSearch'
import Table from './PricelistTable'
import { pricelistSelector } from '../../redux/select'

function Pricelist(props) {
  const { info, pager } = props
  const { items, ...pagerInfo } = pager
  const { activeCategory, columns, printWhenColor } = info
  return (
    <div id="container-pricelist" className={activeCategory}>
      <h1>pricelist</h1>
      <Search {...info} pagerInfo={pagerInfo} />
      <Table columns={columns} items={items} printWhenColor={printWhenColor} />
    </div>
  )
}
Pricelist.propTypes = {
  info: PropTypes.object.isRequired,
  pager: PropTypes.object.isRequired,
}
Pricelist.defaultProps = {
}
export default connect(pricelistSelector)(Pricelist)
