import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Search from './PricelistSearch'
import Table from './PricelistTable'
import Header from '../Header'
import Footer from '../Footer'
import { pricelistSelector } from '../../redux/select/pricelist'

function Pricelist(props) {
  const { info, lead, menu, pager } = props
  const { items, ...pagerInfo } = pager
  const { activeCategory, columns, printWhenColor } = info
  return (
    <div id="container-pricelist" className={activeCategory}>
      <Header links={menu} />
      <main className="clear m1 mt4 pt4">
        <Search {...info} pagerInfo={pagerInfo} />
        {lead}
        <Table columns={columns} items={items} printWhenColor={printWhenColor} />
      </main>
      <Footer />
    </div>
  )
}
Pricelist.propTypes = {
  info: PropTypes.object.isRequired,
  lead: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  pager: PropTypes.object.isRequired,
}
Pricelist.defaultProps = {
  lead: 'All fabrics are Water, Mildew and Stain Resistant',
}
export default connect(pricelistSelector)(Pricelist)
