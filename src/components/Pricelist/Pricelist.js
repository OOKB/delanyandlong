import React, { PropTypes } from 'react'

import Search from './PricelistSearch'
import Table from './PricelistTable'

function Pricelist(props) {
  const { category } = props
  return (
    <div id="container-pricelist" className={category}>
      <h1>pricelist</h1>
      <Search />
      <Table />
    </div>
  )
}
Pricelist.propTypes = {
  category: PropTypes.string.isRequired,
}
Pricelist.defaultProps = {
  category: 'textile',
}
export default Pricelist
