import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Page from '../Page'
import Item from '../Item'

function FavsList({ favorites, imgSize }) {
  return (
    <div>
      <ul className="item-grid list-reset clearfix">
        {map(favorites, fav => <Item className="relative" key={fav.id} item={fav.item} imgSize={imgSize} />)}
      </ul>
    </div>
  )
}
FavsList.propTypes = {
  favorites: PropTypes.array.isRequired,
  imgSize: '?w=250&h=187&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=2',
}

function Favs({ endFavorite, favorites }) {
  const hasFavorites = favorites && favorites.length > 0
  return (
    <Page id="favorites">
      <main className="clear m1 mt4 clearfix">
        <h1 className="text-center m0 bb2 mb1 fw400 uppercase fs1 ls0p15">Your Favorites</h1>
        {hasFavorites && <FavsList endFavorite={endFavorite} favorites={favorites} />}
        {!hasFavorites && <p className="text-center">You currently have no favorites selected...</p>}
      </main>
    </Page>
  )
}

Favs.propTypes = {
  endFavorite: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
}

export default Favs