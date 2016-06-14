import React, { PropTypes } from 'react'

import { connectField } from 'redux-field'


function TextSearch({ form, formEvent }) {
  const { value } = form
  const { onBlur, onChange, onFocus } = formEvent
  return (
    <div className="text-search">
      <input
        autoFocus
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        value={value || ''}
      />
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
