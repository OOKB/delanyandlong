import React, { PropTypes } from 'react'

import Alert from './FavAlert'
import FavButton from './Button'
import Overview from './Overview'

function ItemFavEl(props) {
  const {
    activeListItem, inCollections, item, itemIsActive, editItemCollections, userCollections,
  } = props
  function getAlert() {
    if (activeListItem) return <Alert item={item} listItem={activeListItem} />
    if (itemIsActive) return <Overview item={item} userCollections={userCollections} />
    return null
  }
  return (
    <div className="favorite-container">
      {getAlert()}
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
  userCollections: PropTypes.object,
}

export default ItemFavEl
