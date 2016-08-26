import React, { PropTypes } from 'react'
import map from 'lodash/map'

import Color from './RelatedColor'

function getStyle(isOpen) {
  if (isOpen) return { height: 'calc(100% - 25px - 1.3em - 1.3em)', boxShadow: '0 .25em .75em 0 rgba(65,65,45,.75)' }
  return { height: 'calc(3rem + 4px)', boxShadow: '0 0 0 0 rgba(65,65,45,0)' }
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
