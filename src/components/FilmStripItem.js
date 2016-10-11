import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

import { Link } from 'redux-history-sync'
import ItemImg from './ItemImg'
import Info from './Info'

function getImgExt(categoryCode) {
  if (categoryCode === 'P') return '?w=1500&h=600&fit=fill&bg=FFF'
  return '?w=1500&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&fp-z=1'
}
function FilmStripItem({ categoryCode, item }) {
  return (
    <li className="left">
      <Link href={item.link} className="wrap">
        <ItemImg {...item} imgixExt={getImgExt(categoryCode)} />
      </Link>
      <Info item={item} />
    </li>
  )
}

FilmStripItem.propTypes = {
  item: PropTypes.object.isRequired,
  categoryCode: PropTypes.string.isRequired,
}

export default connectField()(FilmStripItem)
