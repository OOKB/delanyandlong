import React, { PropTypes } from 'react'

function Fav() {
  return (
    <div className="favorite-container">
      'fav'
    </div>
  )
}

Fav.propTypes = {
  favorite: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default Fav
