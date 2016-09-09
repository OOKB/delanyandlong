import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Color from './RelatedColor'
const style = {
  closed: {
    boxShadow: '0 0 0 0 rgba(65,65,45,0)',
    height: 'calc(3rem + 4px)',
  },
  open: {
    boxShadow: '0 .25em .75em 0 rgba(65,65,45,.75)',
    height: 'auto',
  },
}
function getStyle(isOpen) {
  if (isOpen) return style.open
  return style.closed
}

function Related({ close, colors, isOpen, open, parent }) {
  const toggle = isOpen ? close : open
  return (
    <div id="related-colors" style={getStyle(isOpen)}>
      <button className="colors-header" onClick={toggle}>
        <i className="fa fa-caret-down" aria-hidden="true"></i> Additional Colors
      </button>
      {isOpen &&
        <ul className="list-reset">
          {map(colors, color =>
            <Color key={color.colorNumber} parent={parent} color={color} />
          )}
        </ul>
      }
    </div>
  )
}

Related.propTypes = {
  close: PropTypes.func.isRequired,
  colors: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  open: PropTypes.func.isRequired,
  parent: PropTypes.object.isRequired,
}

export default Related
