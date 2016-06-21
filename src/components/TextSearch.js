import React, { PropTypes } from 'react'

import { connectField } from 'redux-field'


function TextSearch({ form, formEvent }) {
  const { value } = form
  const { onBlur, onChange, onFocus } = formEvent
  return (
    <div className="text-search text-center mb2">
      <div className="search-wrapper">
        <label>
          <i className="fa fa-search"></i>
        </label>
        <input
          autoFocus
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          value={value || ''}
        />
      </div>
    </div>
  )
}

TextSearch.propTypes = {
  form: PropTypes.object,
  formEvent: PropTypes.object.isRequired,
}
TextSearch.defaultProps = {
}
export default connectField({ initialValue: '' })(TextSearch)
