import React, { PropTypes } from 'react'

import LinkOrNot from '../LinkOrNot'

function RelatedColor({ color, parent }) {
  return (
    <li>
      <LinkOrNot color={color} parent={parent} >
        <img src={color.img.concat('?w=150&h=150&crop=focalpoint&fit=crop&fp-x=.5&fp-y=.5&fp-z=1.5')} alt={color.id} />
      </LinkOrNot>
    </li>
  )
}

RelatedColor.propTypes = {
  color: PropTypes.object.isRequired,
  parent: PropTypes.object.isRequired,
}

export default RelatedColor
