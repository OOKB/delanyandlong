import React, { PropTypes } from 'react'

import { Link } from 'redux-history-sync'
import ItemFav from '../containers/ItemFav'

function Item({ item, onError }) {
  function handleImgError() {
    if (onError) onError(item)
  }
  const imgSize = '?w=100&h=100&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=1.5'
  return (
    <li>
      <ItemFav item={item} />
      <Link href={item.link}>
        <img
          src={color.img.concat(imgSize)}
          alt={item.id}
          title={item.id}
          onError={handleImgError}
        />
        <div className="description">
          <h2>{item.name}: {item.color}</h2>
          <p>{item.id}</p>
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
