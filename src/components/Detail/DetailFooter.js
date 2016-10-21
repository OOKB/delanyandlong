import React, { PropTypes } from 'react'

function DetailFooter({ detailDisclaimer }) {
  return (
    <footer className="detailFooter bg-white small mono z3 text-center">
      <p className="p05 m0">{detailDisclaimer} Colors and scale shown are not exact. Please request actual samples from your <a href="/contact">DeLany & Long distributor</a>.</p>
    </footer>
  )
}

DetailFooter.propTypes = {
  detailDisclaimer: PropTypes.string.isRequired,
}
DetailFooter.defaultProps = {
}
export default DetailFooter
