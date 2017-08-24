import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'redux-history-component'

import Icon from './Icon'

function NavItem({ active, action, icon, id, name, routeId, ...props }) {
  const Label = (
    <span>
      {icon && <Icon className="visible-sm" symbol={icon} hidden />}
      <span className="visible-lg">{name}</span>
    </span>
  )

  return (
    <li className={classnames(id, { active })}>
      {routeId && <Link routeId={routeId} alt={name} title={name} {...props}>{Label}</Link>}
      {action && <button onClick={action}>{Label}</button>}
    </li>
  )
}
NavItem.propTypes = {
  active: PropTypes.bool.isRequired,
  action: PropTypes.func,
  routeId: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}
NavItem.defaultProps = {
  action: null,
  routeId: null,
  icon: null,
}
export default NavItem
