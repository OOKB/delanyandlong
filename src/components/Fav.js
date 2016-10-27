import React, { PropTypes } from 'react'

import FavAlert from './FavAlert'
import FavButton from './FavButton'

function Fav(props) {
  const {
    activeListItem, inCollections, item, itemIsActive, editItemCollections, userCollections,
  } = props
  return (
    <div className="favorite-container">
      {(activeListItem || itemIsActive) &&
        <FavAlert item={item} listItem={activeListItem} userCollections={userCollections} />
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
  itemIsActive: PropTypes.bool,
  // confirmFavorite: PropTypes.func.isRequired,
  userCollections: PropTypes.object,
}

export default Fav
