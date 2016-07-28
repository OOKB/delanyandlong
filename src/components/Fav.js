import React, { PropTypes } from 'react'
import partial from 'lodash/partial'

import FavAlert from './FavAlert'
import FavButton from './FavButton'

function Fav({ actionStatus, confirmFavorite, endFavorite, favoriteItem, id, item }) {
  const favorited = actionStatus && actionStatus !== 'ended' || false
  // const favToggle = favorited ? partial(endFavorite, favorite) : partial(favoriteItem, item)
  const favToggle = partial(favoriteItem, item)
  return (
    <div className="favorite-container">
      {actionStatus === 'created' &&
        <FavAlert item={item} onClick={partial(confirmFavorite, id)} />
      }
      <FavButton favorited={favorited} item={item} onClick={favToggle} />
    </div>
  )
}

Fav.propTypes = {
  actionStatus: PropTypes.string,
  confirmFavorite: PropTypes.func.isRequired,
  endFavorite: PropTypes.func.isRequired,
  favoriteItem: PropTypes.func.isRequired,
  id: PropTypes.string,
  item: PropTypes.object.isRequired,
}

export default Fav
