import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'
import { Link } from 'redux-history-sync'

import { itemDetailSelector } from '../redux/select/item'
import Info from './Info'

function colorLink(item, color) {
  const text = color.id
  if (item.id === color.id) return <span>{text}</span>
  return <Link href={color.link}>{color.id}</Link>
}

function Detail({ item, colors }) {
  return (
    <div id="wrapper">
      <h2>Item Detail</h2>
      <Info item={item} />
      <h3>colors</h3>
      {map(colors, color => colorLink(item, color))}
    </div>
  )
}

Detail.propTypes = {
  route: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
}

export default connect(itemDetailSelector)(Detail)
