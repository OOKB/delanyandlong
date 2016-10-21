import React, { PropTypes } from 'react'
import Link from 'redux-history-component'

function DetailFooter({ link: { href, title }, message }) {
  return (
    <footer className="detailFooter bg-white small mono z3 text-center">
      <p className="p05 m0">
        {message}
        <Link href={href} title={title}>{title}</Link>
      </p>
    </footer>
  )
}

DetailFooter.propTypes = {
  link: PropTypes.object.isRequired,
  message: PropTypes.string.isRequired,
}
DetailFooter.defaultProps = {
}
export default DetailFooter
