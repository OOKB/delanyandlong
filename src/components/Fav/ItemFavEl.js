import React, { PropTypes } from 'react'

import Alert from './FavAlert'
import FavButton from './Button'
import Overview from './Overview'

function ItemFavEl(props) {
  const {
    activeListItem, inCollections, item, itemIsActive, editItemCollections, userCollections,
  } = props
  return (
    <div className="favorite-container">
      {activeListItem && <Alert item={item} listItem={activeListItem} />}
      {itemIsActive && <Overview item={item} userCollections={userCollections} />}
      <FavButton inCollections={inCollections} onClick={editItemCollections} />
    </div>
  )
}

ItemFavEl.propTypes = {
  activeListItem: PropTypes.object,
  collections: PropTypes.object,
  editItemCollections: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  inCollections: PropTypes.bool.isRequired,
  itemIsActive: PropTypes.bool,
  // confirmFavorite: PropTypes.func.isRequired,
  userCollections: PropTypes.object,
}

export default ItemFavEl
