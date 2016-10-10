import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

import { Link } from 'redux-history-sync'
import ItemFav from '../containers/ItemFav'
import ItemImg from './ItemImg'
import Related from '../containers/Related'

function NavItem({ onClick, ...props }) {
  return (
    <li onClick={onClick} role="button" className="button left">
      <div className="wrap">
        <ItemImg
          {...props}
          imgixExt='?w=500&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=2&fp-debug=true'
          />
      </div>
    </li>
  )
}
NavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
}

function Item({ item }) {
  return (
    <li className="left">
      <ItemFav item={item} />
      {/* <Related parent={item} /> */}
      <Link href={item.link} className="wrap">
        <ItemImg
          {...item}
          imgixExt='?w=1500&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1&fp-debug=true'
          />
        <div className="description">
          <p className="id mono"><span className="categoryCode">{item.categoryCode}</span> {item.id}</p>
          <h2 className="name">{item.name}: {item.color}</h2>
          <p className="contents meta-data"><strong>Contents:</strong> {item.contents}</p>
          <p className="approxWidth meta-data"><strong>Approx Width:</strong> {item.approxWidth}</p>
          <p className="price meta-data"><strong>Price:</strong> {item.price}</p>
        </div>
      </Link>
    </li>
  )
}
Item.propTypes = {
  item: PropTypes.object.isRequired,
  onError: PropTypes.func,
}

function FilmStrip({ active, formEvent: { onChange }, next, previous }) {
  function clickPrev() { onChange(previous.index) }
  function clickNext() { onChange(next.index) }
  return (
    <div className="items">
      <ul className="list-reset clearfix filmStrip">
        <NavItem {...previous.item} onClick={clickPrev} />
        <Item item={active.item} />
        <NavItem {...next.item} onClick={clickNext} />
      </ul>
      {!active && <p>No Items</p>}
    </div>
  )
}

FilmStrip.propTypes = {
  active: PropTypes.object.isRequired,
  formEvent: PropTypes.object.isRequired,
  next: PropTypes.object.isRequired,
  previous: PropTypes.object.isRequired,
  missingImage: PropTypes.func,
  imgixExt: PropTypes.string.isRequired,
}

export default connectField()(FilmStrip)
