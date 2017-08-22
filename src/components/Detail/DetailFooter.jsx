import React from 'react'
import PropTypes from 'prop-types'
import Link from 'redux-history-component'

function DetailFooter({ content, link: { routeId, title } }) {
  return (
    <footer className="detailFooter bg-white small mono z3 text-center">
      <p className="p05 m0">
        {content} <Link routeId={routeId} title={title}>{title}</Link>.
      </p>
    </footer>
  )
}

DetailFooter.propTypes = {
  content: PropTypes.string.isRequired,
  link: PropTypes.shape({
    routeId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
DetailFooter.defaultProps = {
}
export default DetailFooter
