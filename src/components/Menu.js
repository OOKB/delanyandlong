import React, { PropTypes } from 'react'
import map from 'lodash/map'
import classnames from 'classnames'
import { Link } from 'redux-history-sync'

function Menu({ activeId, links, menuStyle }) {
  function isActive(id) { return activeId === id }
  return (
    <ul className="menu list-reset list-inline" style={menuStyle}>
      {map(links, ({ id, href, label }) => (
        <li key={id} className={classnames(id, { active: isActive(id) })}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}

Menu.propTypes = {
  activeId: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  menuStyle: PropTypes.object.isRequired,
}
Menu.defaultProps = {
}
export default Menu
