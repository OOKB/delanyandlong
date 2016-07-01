import React, { PropTypes } from 'react'
import map from 'lodash/map'
import { Link } from 'redux-history-sync'

function MenuHome({ links }) {
  return (
    <ul className="MenuHome list-reset flex-item">
      {map(links, ({ id, href, label }) => (
        <li key={id} className={id}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}

MenuHome.propTypes = {
  links: PropTypes.array.isRequired,
}
MenuHome.defaultProps = {
}
export default MenuHome
