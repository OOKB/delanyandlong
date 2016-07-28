import React, { PropTypes } from 'react'
import partial from 'lodash/partial'

import FavAlert from './FavAlert'
import FavButton from './FavButton'

function Fav({ actionStatus, confirmFavorite, endFavorite, favoriteItem, item }) {
  // const favorited = actionStatus !== 'ended' || false
  // const favToggle = favorited ? partial(endFavorite, favorite) : partial(favoriteItem, item)

  return (
    <div className="favorite-container">
      {actionStatus === 'created' &&
        <FavAlert item={item} />
      }
      <FavButton item={item} />
      'fav'
    </div>
  )
}

Fav.propTypes = {
  actionStatus: PropTypes.string,
  confirmFavorite: PropTypes.func.isRequired,
  endFavorite: PropTypes.func.isRequired,
  favoriteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
}

export default Fav
