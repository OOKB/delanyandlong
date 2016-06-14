import React, { PropTypes } from 'react'
import map from 'lodash/map'
import { connectField } from 'redux-field'

function CategoryFilter({ form, formEvent, options }) {
  return (
    <div className="collection-menu">
      {map(options, ({ value, name }) => {
        const className = form.value === value ? 'active' : ''
        return (
          <button className={className} onClick={formEvent.onChange} value={value} key={value}>
            {name}
          </button>
        )
      })}
    </div>
  )
}

CategoryFilter.propTypes = {
  options: PropTypes.array.isRequired,
  form: PropTypes.object.isRequired,
  formEvent: PropTypes.object.isRequired,
}
CategoryFilter.defaultProps = {
  options: [
    { name: 'Textile', value: 'textile' },
    { name: 'Passementerie', value: 'trim' },
    { name: 'Leather', value: 'leather' },
  ],
}
export default connectField()(CategoryFilter)
