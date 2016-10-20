import React, { PropTypes } from 'react'
import map from 'lodash/map'
import partial from 'lodash/partial'
import Link from 'redux-history-component'

import Header from './Header'
import Footer from './Footer'
import FavButton from './FavButton'

function FavItem({ item, onClick }) {
  return (
    <li className="relative">
      <FavButton favorited item={item} onClick={onClick} />
      <Link href={item.link}>
        <img src={item.img} alt={item.id} title={item.id} />
        <div className="description">
          <h2>{item.color}</h2>
          <p>{item.id}</p>
        </div>
      </Link>
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
      <ul className="item-grid list-reset clearfix">
        {map(favorites, fav => (
          <FavItem key={fav.id} onClick={partial(endFavorite, fav.id)} item={fav.item} />
        ))}
      </ul>
    </div>
  )
}
FavsList.propTypes = {
  endFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
}

function Favs({ endFavorite, favorites }) {
  const hasFavorites = favorites && favorites.length > 0
  return (
    <div id="favorites">
      <Header />
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
}

export default Favs
