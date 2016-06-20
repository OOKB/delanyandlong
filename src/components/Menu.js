import React, { PropTypes } from 'react'
import map from 'lodash/map'
import { Link } from 'redux-history-sync'
import Logo from './Logo'

function Menu({ links }) {
  return (
    <ul className="menu list-reset">
      <Logo />
      {map(links, ({ id, href, label }) => (
        <li key={id} className={id}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}

Menu.propTypes = {
  links: PropTypes.array.isRequired,
}
Menu.defaultProps = {
}
export default Menu
