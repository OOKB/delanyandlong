import React, { PropTypes } from 'react'
import map from 'lodash/map'
import partial from 'lodash/partial'

import Header from './Header'
import Footer from './Footer'
import FavButton from './FavButton'

function FavItem({ item, onClick }) {
  return (
    <li>
      <FavButton favorited item={item} onClick={onClick} />
      <img src={item.img} alt={item.id} title={item.id} />
    </li>
  )
}
FavItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}

function FavsList({ endFavorite, favorites }) {
  return (
    <div>
      <h2>items</h2>
      <ul>
        {map(favorites, (fav) => (
          <FavItem key={fav.id} onClick={partial(endFavorite, fav)} item={fav.item} />
        ))}
      </ul>
    </div>
  )
}
FavsList.propTypes = {
  endFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
}

function Favs({ endFavorite, favorites, menu }) {
  const hasFavorites = favorites && favorites.length > 0
  return (
    <div id="favorites">
      <Header links={menu} />
      <main className="clear m1 mt4 pt4 clearfix">
        <h1>Favorites</h1>
        {hasFavorites && <FavsList endFavorite={endFavorite} favorites={favorites} />}
        {!hasFavorites && <p>No favorites...</p>}
      </main>
      <Footer />
    </div>
  )
}

Favs.propTypes = {
  endFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  menu: PropTypes.array.isRequired,
}

export default Favs
