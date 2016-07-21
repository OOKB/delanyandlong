import React, { PropTypes } from 'react'
import map from 'lodash/map'

import { Link } from 'redux-history-sync'
import FavButton from './FavButton'

function Item({ item, onError, confirmFavorite, endFavorite, favorite, favoriteItem }) {
  const favorited = favorite && favorite.actionStatus !== 'ended' || false
  const favoriteItem = favorited ? partial(endFavorite, favorite) : partial(favoriteItem, item)

  function handleImgError() {
    if (onError) onError(item)
    // console.log('img error', item.id, err.type)
  }

  return (
    <li>
      <Link href={item.link}>
        <img src={item.img} alt={item.id} title={item.id} onError={handleImgError} />
        <div className="description">
          <h2>{item.color}</h2>
          <p>{item.id}</p>
        </div>
        <FavButton favorited={favorited} item={item} onClick={favoriteItem} />
      </Link>
    </li>
  )
}
Item.propTypes = {
  item: PropTypes.object.isRequired,
  onError: PropTypes.func,
}

function ItemGrid({ items, missingImage }) {
  return (
    <div className="items">
      <ul className="list-reset item-grid clearfix">
        {map(items, item => (
          <Item key={item.id} item={item} onError={missingImage} />
        ))}
      </ul>
    </div>
  )
}

ItemGrid.propTypes = {
  confirmFavorite: PropTypes.func.isRequired,
  endFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.object,
  favoriteItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  missingImage: PropTypes.func,
}

export default ItemGrid
