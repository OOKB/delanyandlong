import React, { PropTypes } from 'react'

import Link from 'redux-history-component'
// import ItemFav from './Fav/ItemFav'
// <ItemFav item={item} />

function Item({ className, imgSize, item, onError }) {
  function handleImgError() { if (onError) onError(item) }
  const imgSrc = item.img.concat(imgSize)
  return (
    <li className={className}>
      <Link href={item.link}>
        <img src={imgSrc} alt={item.id} title={item.id} onError={handleImgError} />
        <div className="description absolute block bg-white">
          <p className="id mono"><span className="categoryCode">{item.categoryCode}</span> {item.id}</p>
          <h2>{item.name}: {item.color}</h2>
        </div>
      </Link>
    </li>
  )
}
Item.propTypes = {
  className: PropTypes.string,
  imgSize: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  onError: PropTypes.func,
}
export default Item
