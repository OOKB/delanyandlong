import React, { PropTypes } from 'react'
import map from 'lodash/map'
import merge from 'lodash/merge'
import { connectField } from 'redux-field'

const styles = {
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  buttonActive: {
    fontWeight: 'bold',
  },
}
function getButtonStyle(activeCategory, value) {
  if (activeCategory === value) return merge({}, styles.button, styles.buttonActive)
  return styles.button
}
function CategoryFilter({ activeCategory, formEvent, options }) {
  return (
    <div className="collection-menu">
      {map(options, ({ value, label }) => {
        const style = getButtonStyle(activeCategory, value)
        return (
          <button style={style} onClick={formEvent.onChange} value={value} key={value}>
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
