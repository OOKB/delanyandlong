import React, { PropTypes } from 'react'

import LinkOrNot from '../LinkOrNot'

function RelatedColor({ color, parent }) {
  return (
    <li>
      <LinkOrNot color={color} parent={parent}>
        <img src={color.img.concat('?w=200')} alt={color.id} />
      </LinkOrNot>
    </li>
  )
}

RelatedColor.propTypes = {
  color: PropTypes.object.isRequired,
  parent: PropTypes.object.isRequired,
}

export default RelatedColor
