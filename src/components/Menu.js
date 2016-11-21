import React, { PropTypes } from 'react'
import map from 'lodash/map'
import classnames from 'classnames'
import Link from 'redux-history-component'
import { connect } from 'react-redux'

import { menuActions, menuSelector } from '../redux/select/menu'
import Icon from './Icon'

function NavItem({ active, action, id, href, label, icon }) {
  const Label = (<span>
    {icon && <Icon className="visible-sm" symbol={icon} hidden />}
    <span className="visible-lg">{label}</span>
  </span>)

  return (
    <li className={classnames(id, { active })}>
      {href && <Link href={href} alt={label} title={label}>{Label}</Link>}
      {action && <button onClick={action}>{Label}</button>}
    </li>
  )
}

function Menu({ activeId, links, logout }) {
  function isActive({ id }) { return activeId === id }
  function getAction({ action }) { return action === 'logout' && logout }
  return (
    <ul className="menu list-reset list-inline">
      {map(links, props => (
        <NavItem {...props} key={props.id} active={isActive(props)} action={getAction(props)} />
      ))}
    </ul>
  )
}
Menu.propTypes = {
  activeId: PropTypes.string.isRequired,
  links: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
}
Menu.defaultProps = {
}
export default connect(menuSelector, menuActions)(Menu)
