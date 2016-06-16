import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import map from 'lodash/map'

import { itemDetailSelector } from '../redux/select/item'

function Detail({ item, colors }) {
  return (
    <div id="wrapper">
      <h2>Item Detail</h2>
      {item.id}
      <h3>colors</h3>
      {map(colors, color => <div>{color.id}</div>)}
    </div>
  )
}

Detail.propTypes = {
  route: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
}

export default connect(itemDetailSelector)(Detail)
