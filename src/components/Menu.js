import React, { PropTypes } from 'react'
import map from 'lodash/map'
import classnames from 'classnames'
import { Link } from 'redux-history-sync'
import { connect } from 'react-redux'

import { menuSelector } from '../redux/select/menu'

function Menu({ activeId, links }) {
  function isActive(id) { return activeId === id }
  return (
    <ul className="menu list-reset list-inline">
      {map(links, ({ id, href, label, icon }) => (
        <li key={id} className={classnames(id, { active: isActive(id) })}>
          <Link href={href} alt={label} title={label}>
            {icon &&
              <i className={classnames('visible-sm fa', `fa-${icon}`)} aria-hidden="true"></i>
            }
            <span className="visible-lg">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

Menu.propTypes = {
  activeId: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
}
Menu.defaultProps = {
}
export default connect(menuSelector)(Menu)
