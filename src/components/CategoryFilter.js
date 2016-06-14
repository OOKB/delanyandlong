import React, { PropTypes } from 'react'
import map from 'lodash/map'
import { connectField } from 'redux-field'

function CategoryFilter({ activeCategory, formEvent, options }) {
  return (
    <div className="collection-menu">
      {map(options, ({ value, label }) => {
        const className = activeCategory === value ? 'active' : ''
        return (
          <button className={className} onClick={formEvent.onChange} value={value} key={value}>
            {label}
          </button>
        )
      })}
    </div>
  )
}

CategoryFilter.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  formEvent: PropTypes.object.isRequired,
}
CategoryFilter.defaultProps = {
}
export default connectField()(CategoryFilter)
