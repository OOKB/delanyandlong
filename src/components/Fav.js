import React, { PropTypes } from 'react'

// import FavAlert from './FavAlert'
import FavButton from './FavButton'
// {actionStatus === 'created' &&
//   <FavAlert item={item} onClick={partial(confirmFavorite, id)} />
// }
function Fav({ collections, editItemCollections }) {
  return (
    <div className="favorite-container">
      <FavButton favorited={!!collections} onClick={editItemCollections} />
    </div>
  )
}

Fav.propTypes = {
  actionStatus: PropTypes.string,
  collections: PropTypes.object.isRequired,
  // confirmFavorite: PropTypes.func.isRequired,
  editItemCollections: PropTypes.func.isRequired,
  // endFavorite: PropTypes.func.isRequired,
}

export default Fav
