import React, { PropTypes } from 'react'

// import FavAlert from './FavAlert'
import FavButton from './FavButton'
// {actionStatus === 'created' &&
//   <FavAlert item={item} onClick={partial(confirmFavorite, id)} />
// }
function Fav({ inCollections, editItemCollections }) {
  return (
    <div className="favorite-container">
      <FavButton inCollections={inCollections} onClick={editItemCollections} />
    </div>
  )
}

Fav.propTypes = {
  actionStatus: PropTypes.string,
  collections: PropTypes.object,
  editItemCollections: PropTypes.func.isRequired,
  inCollections: PropTypes.bool.isRequired,
  // confirmFavorite: PropTypes.func.isRequired,
  // endFavorite: PropTypes.func.isRequired,
}

export default Fav
