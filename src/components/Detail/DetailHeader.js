import React, { PropTypes } from 'react'

import Logo from '../Logo'

function DetailHeader() {
  return (
    <header className="detailHeader fixed">
      <Logo />
    </header>
  )
}

DetailHeader.propTypes = {
  // onClick: PropTypes.func.isRequired,
}
DetailHeader.defaultProps = {
}
export default DetailHeader
