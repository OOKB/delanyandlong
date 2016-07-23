import React, { PropTypes } from 'react'

import Logo from '../Logo'

function DetailHeader() {
  return (
    <header className="detailHeader">
      <Logo />
    </header>
  )
}

DetailHeader.propTypes = {
  logo: PropTypes.string.isRequired,
}
DetailHeader.defaultProps = {
  logo: 'http://rogersandgoffigon.imgix.net/logos/dl-logo-cropped.gif',
}
export default DetailHeader
