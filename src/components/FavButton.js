import React, { PropTypes } from 'react'

function FavButton({ favorited, onClick }) {
  if (favorited) {
    return (
      <button className="absolute" onClick={onClick} title="Remove this item from favorites">-</button>
    )
  }
  return (
    <button className="absolute" onClick={onClick} title="Favorite this item">+</button>
  )
}

FavButton.propTypes = {
  favorited: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default FavButton
