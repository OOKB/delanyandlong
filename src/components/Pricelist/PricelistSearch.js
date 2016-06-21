import React, { PropTypes } from 'react'

import Search from '../TextSearch'
import CategoryFilter from '../CategoryFilter'
import Pager from '../Pager'

function PricelistSearch(props) {
  const { activeCategory, categoryOptions, pageSizeOptions, pagerInfo, pgSize, prefix, classes } = props
  return (
    <div id="pricelist-header">
      <Search prefix={prefix.text} />
      <CategoryFilter
        activeCategory={activeCategory}
        options={categoryOptions}
        prefix={prefix.category}
        classes={classes}
      />
      <Pager
        {...pagerInfo}
        pageSizeOptions={pageSizeOptions}
        prefix={prefix.pgIndex}
        pgSizePrefix={prefix.pgSize}
        pgSize={pgSize}
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
  classes: PropTypes.string,
}
PricelistSearch.defaultProps = {
  classes: 'bt1 bb1 mt1 mb1 pt1 pb1',
}

export default PricelistSearch
