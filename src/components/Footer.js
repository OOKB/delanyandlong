import React, { PropTypes } from 'react'

function Footer({ currentYear }) {
  return (
    <footer className="text-center mb4 mt1 p1 clear">
      <p className="bt1 pt2 uppercase">
        &copy; {currentYear} Delany &amp; Long LTD.
      </p>
      <p className="small">site by OOKB/powered by CAPE</p>
    </footer>
  )
}

Footer.propTypes = {
  currentYear: PropTypes.string.isRequired,
  ookbLink: PropTypes.string.isRequired,
  capeLink: PropTypes.string.isRequired,
}
Footer.defaultProps = {
  ookbLink: 'http://www.ookb.co',
  capeLink: 'http://www.cape.io',
}

export default Footer