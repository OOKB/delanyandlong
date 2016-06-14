import React, { PropTypes } from 'react'

import CategoryFilter from '../CategoryFilter'
import Pager from '../Pager'

function PricelistSearch() {
  return (
    <div id="pricelist-header">
      <CategoryFilter />
      <Pager />
    </div>
  )
}
PricelistSearch.propTypes = {
}
export default PricelistSearch
