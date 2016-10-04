import React, { PropTypes } from 'react'

import Input from '../Editable/input/Input'
// import Help from '../Editable/Help'
import Icon from '../Icon'

function InputField(props) {
  // const helpTxt = hasError ? errorMessage : help
  return (
    <div className="input-group accountNumber">
      <label htmlFor={props.id}><Icon className="light-gray" symbol="hashtag" hidden /></label>
      <Input {...props} />
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
  id: PropTypes.string.isRequired,
}
export default InputField
