import React, { PropTypes } from 'react'

function DetailFooter({ disclaimer }) {
  return (
    <footer className="detailFooter bg-white small mono z3 text-center">
      <p className="p05 m0" dangerouslySetInnerHTML={{ __html: disclaimer }} />
    </footer>
  )
}

DetailFooter.propTypes = {
  disclaimer: PropTypes.string.isRequired,
}
DetailFooter.defaultProps = {
}
export default DetailFooter
