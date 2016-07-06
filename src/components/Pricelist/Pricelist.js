import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Search from './PricelistSearch'
import Table from './PricelistTable'
import Header from '../Header'
import Footer from '../Footer'
import { pricelistSelector } from '../../redux/select/pricelist'

function Pricelist(props) {
  const { info, lead, disclaimer, menu, pager } = props
  const { items, ...pagerInfo } = pager
  const { activeCategory, columns, printWhenColor } = info
  return (
    <div id="container-pricelist" className={activeCategory}>
      <Header links={menu} />
      <main className="clear m1 mt3">
        <Search {...info} pagerInfo={pagerInfo} />
        <div className="table-scroll">
          <Table columns={columns} items={items} printWhenColor={printWhenColor} />
        </div>
        <div className="text-center small">
          <p className="uppercase">{lead}</p>
          <p dangerouslySetInnerHTML={{ __html: disclaimer }} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
Pricelist.propTypes = {
  info: PropTypes.object.isRequired,
  lead: PropTypes.string.isRequired,
  disclaimer: PropTypes.string.isRequired,
  menu: PropTypes.array.isRequired,
  pager: PropTypes.object.isRequired,
}
Pricelist.defaultProps = {
  lead: 'All fabrics are Water, Mildew and Stain Resistant',
  disclaimer: 'Colors and scale shown are not exact. Please request actual samples from your <a href="/contact">DeLany & Long distributor</a>.'
}
export default connect(pricelistSelector)(Pricelist)
