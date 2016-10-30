import React, { PropTypes } from 'react'

function CollectionEl({ title, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{title}</button>
    </li>
  )
}
CollectionEl.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
export default CollectionEl
