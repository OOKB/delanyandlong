import React from 'react'
import PropTypes from 'prop-types'
import map from 'lodash/map'
import classnames from 'classnames'
import Link from 'redux-history-component'

function MenuHome({ links }) {
  return (
    <ul className="MenuHome list-reset">
      {map(links, ({ id, href, label, icon }) => (
        <li key={id} className={id}>
          <Link href={href}>
            {icon &&
              <i className={classnames('visible-sm fa', `fa-${icon}`)} aria-hidden="true" />
            }
            <span className="textLink">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

MenuHome.propTypes = {
  links: PropTypes.array.isRequired,
  icon: PropTypes.string.isRequired,
}
MenuHome.defaultProps = {
}
export default MenuHome
