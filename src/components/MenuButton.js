import React, { PropTypes } from 'react'

import ButtonEl from './Button'

function MenuButton() {
  function onClick() {
  }
  return (
    <ButtonEl
      className="toggle"
      icon="chevron-circle-up"
      onClick={onClick}
      title="Open/Close Menu"
    />
  )
}

MenuButton.propTypes = {
}

export default MenuButton
