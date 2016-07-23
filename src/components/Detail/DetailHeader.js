import React, { PropTypes } from 'react'

import Logo from '../Logo'
import Close from '../CloseButton'

function DetailHeader({ onClick }) {
  return (
    <header className="detailHeader">
      <Logo />
      <Close onClick={onClick} />
    </header>
  )
}

DetailHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
}
DetailHeader.defaultProps = {
}
export default DetailHeader
