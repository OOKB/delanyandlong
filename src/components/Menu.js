import React, { PropTypes } from 'react'
import map from 'lodash/map'
import { connect } from 'react-redux'
import { menuActions, menuSelector } from '../redux/select/menu'
import NavItem from './NavItem'

function Menu({ activeId, links, logout }) {
  function isActive({ id }) { return activeId === id }
  function getAction({ action }) { return (action === 'logout' && logout) || undefined }
  console.log('menu')
  return (
    <ul className="menu list-reset list-inline">
      {map(links, link => (
        <NavItem {...link} key={link.id} active={isActive(link)} action={getAction(link)} />
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
