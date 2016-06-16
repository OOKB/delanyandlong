import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { itemDetailSelector } from '../../redux/select/item'
import Info from '../Info'
import Related from './Related'

function Detail({ item, colors }) {
  return (
    <div id="wrapper">
      <h2>Item Detail</h2>
      <Info item={item} />
      <img src={item.img} alt={item.id} />
      <Related colors={colors} parent={item} />
    </div>
  )
}

Detail.propTypes = {
  route: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
}

export default connect(itemDetailSelector)(Detail)
