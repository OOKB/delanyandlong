import React, { PropTypes } from 'react'

import ButtonEl from './Button'

function MenuButton(toggle) {
  return (
    <ButtonEl
      className="toggle"
      icon="chevron-circle-up"
      onClick={toggle}
      title="Open/Close Menu"
    />
  )
}

MenuButton.propTypes = {
}

export default MenuButton
