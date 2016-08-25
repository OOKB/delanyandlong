import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

import { Link } from 'redux-history-sync'
import ItemFav from '../containers/ItemFav'
import ItemImg from './ItemImg'

function NavItem({ onClick, ...props }) {
  return (
    <li onClick={onClick} role="button">
      <ItemImg {...props} />
    </li>
  )
}
NavItem.propTypes = {
  onClick: PropTypes.func.isRequired,
}

function Item({ item }) {
  return (
    <li>
      <ItemFav item={item} />
      <Link href={item.link}>
        <ItemImg {...item} />
        <div className="description">
          <p><span className="categoryCode">{item.categoryCode}</span> {item.id}</p>
          <h2>{item.name}: {item.color}</h2>
          <p>{item.contents}</p>
          <p>{item.approxWidth}</p>
          <p>Other info for these?</p>
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
  console.log(active)
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
}

export default connectField()(FilmStrip)
