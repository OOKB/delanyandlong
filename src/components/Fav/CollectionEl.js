import React, { PropTypes } from 'react'
import Link from 'redux-history-component'

import Icon from '../Icon'

function CollectionEl({ id, inList, onClick, title }) {
  return (
    <li className="relative">
      {!inList && <Icon symbol="circle-o" className="fa-li light-gray pointer" />}
      {inList && <Icon symbol="dot-circle-o" className="fa-li green pointer" />}
      <button className="plain pointer relative gold text-left" onClick={onClick}>{title}</button>
      <Link href={`/project/${id}`}>view</Link>
    </li>
  )
}
CollectionEl.propTypes = {
  id: PropTypes.string.isRequired,
  inList: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
export default CollectionEl
