import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Search from './PricelistSearch'
import Table from './PricelistTable'
import Menu from '../Menu'
import { pricelistSelector } from '../../redux/select/pricelist'

function Pricelist(props) {
  const { info, menu, pager } = props
  const { items, ...pagerInfo } = pager
  const { activeCategory, columns, printWhenColor } = info
  return (
    <div id="container-pricelist" className={activeCategory}>
      <Menu links={menu} />
      <h1>pricelist</h1>
      <Search {...info} pagerInfo={pagerInfo} />
      <Table columns={columns} items={items} printWhenColor={printWhenColor} />
    </div>
  )
}
Pricelist.propTypes = {
  info: PropTypes.object.isRequired,
  menu: PropTypes.array.isRequired,
  pager: PropTypes.object.isRequired,
}
Pricelist.defaultProps = {
}
export default connect(pricelistSelector)(Pricelist)
