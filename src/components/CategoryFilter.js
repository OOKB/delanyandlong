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
      <h2 className="twelve columns mb0">Filters</h2>
      <div className="four columns mb0">
        <p>Select type:</p>
        <div className="button-group">
          {map(options, ({ value, label }) => {
            const style = getButtonStyle(activeCategory, value)
            return (
              <button style={style} onClick={formEvent.onChange} value={value} key={value}>
                {label}
              </button>
            )
          })}
        </div>
      </div>
      <div className="four columns mb0">
        <p>Add summer sale as a filter?</p>
      </div>
      <div className="four columns mb0">
        <p>Add window dressing as a filter? (still trying to work this out)</p>
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
