import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

import { Link } from 'redux-history-sync'
import ItemFav from '../containers/ItemFav'
import ItemImg from './ItemImg'
import Info from './Info'

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
  const imgixExt = '?w=1500&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1&fp-debug=true'
  const trimImgixExt = '?w=1500&h=600&fp-debug=true&fit=fill&bg=FFF&fp-x=0.5&fp-y=0.5&fp-z=1&fp-debug=true'
  return (
    <li className="left">
      {/* <Related parent={item} /> */}
      <Link href={item.link} className="wrap">
        <ItemImg {...item} imgixExt={imgixExt} />
      </Link>
      <Info item={item} />
    </li>
  )
}
Item.propTypes = {
  item: PropTypes.object.isRequired,
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
