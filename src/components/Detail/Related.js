import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Color from './RelatedColor'

function Related({ colors, parent }) {
  return (
    <div id="related-colors">
      <h3>Related Colors</h3>
      <div className="colors-header">Pager</div>
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
