import React, { PropTypes } from 'react'
import partial from 'lodash/partial'

import Info from '../Info'
import Related from './Related'
import FavAlert from '../FavAlert'

function Detail({ item, colors, confirmFavorite, endFavorite, favorite, favoriteItem }) {
  const favorited = favorite && favorite.actionStatus !== 'ended' || false
  const favToggle = favorited ? partial(endFavorite, favorite) : partial(favoriteItem, item)

  return (
    <div id="wrapper">
      <h2>Item Detail</h2>
      {favorite && favorite.actionStatus === 'created' &&
        <FavAlert item={item} favorite={favorite} onClick={partial(confirmFavorite, favorite)} />
      }
      <Info
        item={item}
        favorited={favorited}
        favoriteItem={favToggle}
      />
      <img src={item.img} alt={item.id} />
      <Related colors={colors} parent={item} />
    </div>
  )
}

Detail.propTypes = {
  confirmFavorite: PropTypes.func.isRequired,
  endFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.object,
  favoriteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
}

export default Detail
