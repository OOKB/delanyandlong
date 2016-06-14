import React, { PropTypes } from 'react'
import map from 'lodash/map'

function CategoryFilter({ activeCategory, categories, onClick }) {
  return (
    <div className="collection-menu">
      {map(categories, ({ value, name }) => {
        const className = activeCategory === value ? 'active' : ''
        return (
          <button className={className} onClick={onClick} value={value}>{name}</button>
        )
      })}
    </div>
  )
}

CategoryFilter.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  onClick: PropTypes.func,
}
CategoryFilter.defaultProps = {
  activeCategory: 'textile',
  categories: [
    { name: 'Textile', value: 'textile' },
    { name: 'Passementerie', value: 'trim' },
    { name: 'Leather', value: 'leather' },
  ],
}
export default CategoryFilter
