import React, { PropTypes } from 'react'
import { Link } from 'redux-history-sync'

function LinkOrNot({ children, color, parent }) {
  if (parent.id === color.id) return <span style={{ opacity: 0.5 }}>{children}</span>
  return <Link href={color.link} title={color.id}>{children}</Link>
}

LinkOrNot.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.object.isRequired,
  parent: PropTypes.object.isRequired,
}

export default LinkOrNot
