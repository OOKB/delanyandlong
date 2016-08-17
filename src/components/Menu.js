import React, { PropTypes } from 'react'
import map from 'lodash/map'
import classnames from 'classnames'
import { Link } from 'redux-history-sync'

function Menu({ activeId, links }) {
  function isActive(id) { return activeId === id }
  return (
    <ul className="menu list-reset list-inline">
      {map(links, ({ id, href, label, icon }) => (
        <li key={id} className={classnames(id, { active: isActive(id) })}>
          <Link href={href}>
            {icon &&
              <i className={classnames('fa', `fa-${icon}`)} aria-hidden="true"></i>
            }
            {label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

Menu.propTypes = {
  activeId: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
}
Menu.defaultProps = {
}
export default Menu
