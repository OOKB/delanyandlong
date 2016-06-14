import React, { PropTypes } from 'react'

import CategoryFilter from '../CategoryFilter'
import Pager from '../Pager'

function PricelistSearch({ activeCategory, categoryOptions, prefix }) {
  return (
    <div id="pricelist-header">
      <CategoryFilter activeCategory={activeCategory} options={categoryOptions} prefix={prefix} />
      <Pager />
    </div>
  )
}
PricelistSearch.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  categoryOptions: PropTypes.array.isRequired,
  prefix: PropTypes.array.isRequired,
}
export default PricelistSearch
