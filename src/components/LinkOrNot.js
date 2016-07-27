import React, { PropTypes } from 'react'
import { Link } from 'redux-history-sync'

const styles = {
  active: {
    display: 'block',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    boxShadow: 'inset 0 0 10px rgba(66,67,47,.5)',
    border: '2px solid rgba(66,67,47,.5)',
  },
}

function LinkOrNot({ children, color, parent }) {
  if (parent.id === color.id) return <span style={styles.active}>{children}</span>
  return <Link href={color.link} title={color.id}>{children}</Link>
}

LinkOrNot.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.object.isRequired,
  parent: PropTypes.object.isRequired,
}

export default LinkOrNot
