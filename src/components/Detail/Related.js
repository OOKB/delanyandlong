import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Color from './RelatedColor'

function Related({ colors, parent }) {
  return (
    <div id="related-colors">
      <button className="colors-header">
        <i className="fa fa-caret-down" aria-hidden="true"></i> Additional Colors
      </button>
      <ul className="list-reset">
        {map(colors, color => <Color key={color.colorNumber} parent={parent} color={color} />)}
      </ul>
    </div>
  )
}

Related.propTypes = {
  colors: PropTypes.array.isRequired,
  parent: PropTypes.object.isRequired,
}

export default Related
