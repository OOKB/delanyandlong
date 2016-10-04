import React, { PropTypes } from 'react'
import classnames from 'classnames'
import isString from 'lodash/isString'

import Input from '../Editable/input/Input'
// import Help from '../Editable/Help'
import Icon from '../Icon'

function getKey(id, prefix) {
  if (id) return id
  return prefix.join('-')
}
function InputField(props) {
  const { className, id, prefix } = props
  const key = getKey(id, prefix)
  // const helpTxt = hasError ? errorMessage : help
  return (
    <div className={classnames('input-group', className)}>
      <label htmlFor={key}><Icon className="light-gray" symbol="hashtag" hidden /></label>
      <Input {...props} id={key} />
    </div>
  )
}

// {(helpTxt || suggestion) &&
//   <Help
//     help={helpTxt}
//     hasErrors={hasError}
//     id={id}
//     suggestion={suggestion}
//   />
// }
InputField.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  prefix: PropTypes.arrayOf(React.PropTypes.string).isRequired,
}

export default InputField
