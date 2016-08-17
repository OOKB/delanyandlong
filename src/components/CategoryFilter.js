import React, { PropTypes } from 'react'
import map from 'lodash/map'
import merge from 'lodash/merge'
import { connectField } from 'redux-field'

const styles = {
  button: {
    background: 'none',
    backgroundColor: 'rgb(242,239,229)',
    backgroundColor: 'rgba(242,239,229,1)',
    cursor: 'pointer',
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontFamily: 'inherit',
    whiteSpace: 'nowrap',
    color: 'rgb(121,120,115)',
    color: 'rgba(121,120,115,1)',
    border: '1px solid rgb(121,120,115)',
    border: '1px solid rgba(121,120,115,1)',
  },
  buttonActive: {
    fontWeight: 'bold',
    color: 'rgb(066,067,047)',
    color: 'rgba(066,067,047,1)',
    backgroundColor: 'rgb(205,206,191)',
    backgroundColor: 'rgba(205,206,191,1)',
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
      <div className="select-type mlrauto">
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
