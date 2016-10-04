import React, { PropTypes } from 'react'
import classnames from 'classnames'

import Input from '../Editable/input/Input'
import Help from '../Editable/Help'
import Icon from '../Icon'

function getKey(id, prefix) {
  if (id) return id
  return prefix.join('-')
}
function InputField(props) {
  const { className, errorMessage, hasError, icon, id, prefix, suggestion } = props
  const key = getKey(id, prefix)

  return (
    <div className={classnames('input-group', className)}>
      <label htmlFor={key}><Icon {...icon} hidden /></label>
      <Input {...props} id={key} />
      {(errorMessage || suggestion) &&
        <Help
          help={errorMessage}
          hasErrors={hasError}
          id={id}
          suggestion={suggestion}
        />
      }
    </div>
  )
}


InputField.propTypes = {
  className: PropTypes.string,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool.isRequired,
  id: PropTypes.string,
  prefix: PropTypes.arrayOf(React.PropTypes.string).isRequired,
  suggestion: PropTypes.string,
}
InputField.defaultProps = {}
export default InputField
