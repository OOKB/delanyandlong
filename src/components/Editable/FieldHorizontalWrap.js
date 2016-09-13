import React, { PropTypes } from 'react'

import FormGroup from './FormGroup'
import { preventDefault } from './utils'

// This is for an individual, edtiable field.
function FieldHorizontalWrap({ children, editable, label, id, required, form, savingTxt }) {
  const { saving, status } = form

  return (
    <div className="editable-form form-horizontal" onSubmit={preventDefault}>
      <FormGroup
        id={id}
        label={label}
        editable={editable}
        required={required}
        status={status}
      >
        {children}
        {saving && <span>{savingTxt}</span>}
      </FormGroup>
    </div>
  )
}


FieldHorizontalWrap.propTypes = {
  // action: PropTypes.shape({
  //   submit: PropTypes.func.isRequired,
  // }).isRequired,
  // When not editing the children is what will show up inside the form group.
  children: PropTypes.node,
  editable: PropTypes.bool,
  // All the state related to editing the form field.
  form: PropTypes.shape({
    editing: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    status: PropTypes.string,
  }),
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // Prefix used to specify form state slice.
  prefix: PropTypes.array,
  required: PropTypes.bool,
  savingTxt: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'email',
    'dateTime',
    'fullName',
    'select',
    'text',
    'textarea',
  ]).isRequired,
  validators: PropTypes.array,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
}

FieldHorizontalWrap.defaultProps = {
  savingTxt: 'Saving...',
}

export default FieldHorizontalWrap
