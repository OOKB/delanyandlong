import React, { PropTypes } from 'react'

import Icon from '../Icon'

function CollectionEl({ inList, onClick, title }) {
  return (
    <li>
      {inList && <Icon symbol="check" />}
      <button onClick={onClick}>{title}</button>
    </li>
  )
}
CollectionEl.propTypes = {
  inList: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
export default CollectionEl
