import React, { PropTypes } from 'react'

import { Link } from 'redux-history-sync'
import ItemFav from '../containers/ItemFav'

function Item({ item, onError }) {
  function handleImgError() {
    if (onError) onError(item)
  }
  const imgSize = '?w=240&h=168&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=1.5'
  return (
    <li>
      <ItemFav item={item} />
      <Link href={item.link}>
        <img
          src={item.img.concat(imgSize)}
          alt={item.id}
          title={item.id}
          onError={handleImgError}
        />
        <div className="description absolute block bg-white">
          <p className="id mono"><span className="categoryCode">{item.categoryCode}</span> {item.id}</p>
          <h2>{item.name}: {item.color}</h2>
        </div>
      </Link>
    </li>
  )
}
Item.propTypes = {
  item: PropTypes.object.isRequired,
  onError: PropTypes.func,
}

export default Item
