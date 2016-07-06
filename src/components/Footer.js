import React, { PropTypes } from 'react'

const styles = {
  base: {
    color: 'rgba(132,133,94,.4)',
    fontSize: '.8rem',
  },
}

function Footer({ currentYear }) {
  return (
    <footer className="text-center mb4 mt1 p1 clear" style={styles.base}>
      <p className="pt2 uppercase">
        &copy; {currentYear} Delany &amp; Long LTD.
      </p>
      <p className="m0 p0 small">site by OOKB/powered by CAPE</p>
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
