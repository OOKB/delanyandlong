import React, { PropTypes } from 'react'

import Search from '../TextSearch'
import CategoryFilter from '../CategoryFilter'
import Pager from '../Pager'

function PricelistSearch({ activeCategory, categoryOptions, prefix }) {
  return (
    <div id="pricelist-header">
      <Search prefix={prefix.text} />
      <CategoryFilter
        activeCategory={activeCategory}
        options={categoryOptions}
        prefix={prefix.category}
      />
      <Pager />
    </div>
  )
}
PricelistSearch.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  categoryOptions: PropTypes.array.isRequired,
  prefix: PropTypes.object.isRequired,
}
export default PricelistSearch
