import React, { PropTypes } from 'react'

import Icon from '../Icon'

function CollectionEl({ inList, onClick, title }) {
  return (
    <li className="relative">
      {!inList && <Icon symbol="circle-o" className="fa-li light-gray pointer" />}
      {inList && <Icon symbol="dot-circle-o" className="fa-li green pointer" />}
      <button className="plain pointer relative gold text-left" onClick={onClick}>{title}</button>
    </li>
  )
}
CollectionEl.propTypes = {
  inList: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
export default CollectionEl
