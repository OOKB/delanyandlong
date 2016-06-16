import React, { PropTypes } from 'react'

function FavButton({ favorited, onClick }) {
  if (favorited) {
    return (
      <button onClick={onClick} title="Remove this item from favorites">-</button>
    )
  }
  return (
    <button onClick={onClick} title="Favorite this item">+</button>
  )
}

FavButton.propTypes = {
  favorited: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default FavButton
