import React, { PropTypes } from 'react'

import FavAlert from './FavAlert'
import FavButton from './FavButton'

function Fav({ activeListItem, inCollections, item, editItemCollections }) {
  return (
    <div className="favorite-container">
      {activeListItem &&
        <FavAlert item={item} listItem={activeListItem} />
      }
      <FavButton inCollections={inCollections} onClick={editItemCollections} />
    </div>
  )
}

Fav.propTypes = {
  activeListItem: PropTypes.object,
  collections: PropTypes.object,
  editItemCollections: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  inCollections: PropTypes.bool.isRequired,
  // confirmFavorite: PropTypes.func.isRequired,
  // endFavorite: PropTypes.func.isRequired,
}

export default Fav
