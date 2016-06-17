import React, { PropTypes } from 'react'
import map from 'lodash/map'
import Menu from './Menu'

function FavsList({ favorites }) {
  return (
    <div>
      <h2>items</h2>
      <ul>
        {map(favorites, ({ id }) => (
          <li key={id}>
            <h3>{id}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}
FavsList.propTypes = {
  favorites: PropTypes.array.isRequired,
}

function Favs({ favorites, menu }) {
  const hasFavorites = favorites && favorites.length > 0
  return (
    <div id="favorites">
      <Menu links={menu} />
      <h1>Favorites</h1>
      {hasFavorites && <FavsList favorites={favorites} />}
      {!hasFavorites && <p>No favorites...</p>}
    </div>
  )
}

Favs.propTypes = {
  favorites: PropTypes.array.isRequired,
  menu: PropTypes.array.isRequired,
}

export default Favs
