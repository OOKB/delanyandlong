import React, { PropTypes } from 'react'
import map from 'lodash'

function Favs({ favorites }) {
  const hasFavorites = favorites && favorites.length > 0
  console.log(favorites.length)
  return (
    <div id="favorites">
      <h1>Favorites</h1>
      {hasFavorites && (
        <div>
          <h2>items</h2>
          {map(favorites, fav => {
            console.log(fav)
            return (<li key={fav.id}>{fav.id}</li>)
          })}
        </div>
      )}
      {!hasFavorites && <p>No favorites...</p>}
    </div>
  )
}

Favs.propTypes = {
  route: PropTypes.object.isRequired,
  favorites: PropTypes.array.isRequired,
}

export default Favs
