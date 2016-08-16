import React, { PropTypes } from 'react'
import map from 'lodash/map'
import merge from 'lodash/merge'
import { connectField } from 'redux-field'

const styles = {
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'block',
    fontSize: '1rem',
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
    <div className="collection-menu group mb0">
      {/* <h2 className="twelve columns mb0 uppercase">Filters</h2> */}
      <div className="twelve columns mb0 select-type">
        <div className="button-group flex-center text-center">
          <p className="uppercase m0">Filter By Type:</p>
          {map(options, ({ value, label }) => {
            const style = getButtonStyle(activeCategory, value)
            return (
              <button className="flex-item" style={style} onClick={formEvent.onChange} value={value} key={value}>
                {label}
              </button>
            )
          })}
        </div>
      </div>
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
