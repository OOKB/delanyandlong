import React, { PropTypes } from 'react'

function FavButton({ favorited, onClick }) {
  if (favorited) {
    return (
      <button
        className="absolute favorite btn-block"
        onClick={onClick}
        title="Remove this item from favorites"
      ><i className="fa fa-minus" aria-hidden="true"></i></button>
    )
  }
  return (
    <button
      className="absolute favorite btn-block"
      onClick={onClick}
      title="Favorite this item"
    ><i className="fa fa-plus" aria-hidden="true"></i></button>
  )
}

FavButton.propTypes = {
  favorited: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default FavButton
