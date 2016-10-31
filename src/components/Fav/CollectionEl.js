import React, { PropTypes } from 'react'

import Icon from '../Icon'

function CollectionEl({ inList, onClick, title }) {
  return (
    <li className="relative">
      {!inList && <Icon symbol="circle-o" xtras="fa-li light-gray pointer" />}
      {inList && <Icon symbol="dot-circle-o" xtras="fa-li purple pointer" />}
      <button className="plain pointer relative gold" onClick={onClick}>{title}</button>
    </li>
  )
}
CollectionEl.propTypes = {
  inList: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
export default CollectionEl
