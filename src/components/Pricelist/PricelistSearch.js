import React, { PropTypes } from 'react'

import Search from '../TextSearch'
import CategoryFilter from '../CategoryFilter'
import Pager from '../Pager'

function PricelistSearch(props) {
  const { activeCategory, categoryOptions, pageSizeOptions, pagerInfo, prefix } = props
  return (
    <div id="pricelist-header">
      <Search prefix={prefix.text} />
      <CategoryFilter
        activeCategory={activeCategory}
        options={categoryOptions}
        prefix={prefix.category}
      />
      <Pager
        {...pagerInfo}
        pageSizeOptions={pageSizeOptions}
        prefix={prefix.pgIndex}
        pgSizePrefix={prefix.pgSize}
      />
    </div>
  )
}
PricelistSearch.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  categoryOptions: PropTypes.array.isRequired,
  pageSizeOptions: PropTypes.array.isRequired,
  pagerInfo: PropTypes.object.isRequired,
  prefix: PropTypes.object.isRequired,
}
export default PricelistSearch
