import React from 'react'
import PropTypes from 'prop-types'
import { connectField } from 'redux-field'

// import EditField from './Field'
import Placeholder from './Placeholder'

function FieldEditable({ name, description, value }) {
  if (!value) return <Placeholder name={name} title={description} />
  // if (field) {
  //   return (
  //     <EditField
  //       {...props}
  //       id={field.id}
  //       initialValue={field.value}
  //     />
  //   )
  // }
}

FieldEditable.propTypes = {
  description: PropTypes.string,
  field: PropTypes.object,
  form: PropTypes.object.isRequired,
  name: PropTypes.string,
  value: PropTypes.any,
}
FieldEditable.defaultProps = {
  justCreated: false,
}
export default connectField()(FieldEditable)
