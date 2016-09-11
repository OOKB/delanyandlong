import React, { PropTypes } from 'react'

// import FavAlert from './FavAlert'
import FavButton from './FavButton'
// {actionStatus === 'created' &&
//   <FavAlert item={item} onClick={partial(confirmFavorite, id)} />
// }
function Fav({ itemInCollections, editItemCollections }) {
  return (
    <div className="favorite-container">
      <FavButton itemInCollections={itemInCollections} onClick={editItemCollections} />
    </div>
  )
}

Fav.propTypes = {
  actionStatus: PropTypes.string,
  editItemCollections: PropTypes.func.isRequired,
  itemInCollections: PropTypes.bool.isRequired,
  itemCollections: PropTypes.object,
  // confirmFavorite: PropTypes.func.isRequired,
  // endFavorite: PropTypes.func.isRequired,
}

export default Fav
