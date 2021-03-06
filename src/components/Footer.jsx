import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  base: {
    color: 'rgba(132,133,94,.4)',
    fontSize: '.8rem',
  },
}

function Footer({ capeLink, currentYear, ookbLink, sisterSite }) {
  return (
    <footer className="text-center mb4 mt1 p1 clear" style={styles.base}>
      <p className="pt2 uppercase">
        &copy; {currentYear} Delany &amp; Long LTD.
      </p>
      <p className="m0 p0 simple gold">
        <a href={sisterSite.href} title={sisterSite.title}>{sisterSite.title}</a>
      </p>
      <p className="homeHidden m0 p0 small">
        site by <a href={ookbLink}>OOKB</a>/powered by <a href={capeLink}>CAPE</a>
      </p>
    </footer>
  )
}

Footer.propTypes = {
  currentYear: PropTypes.number.isRequired,
  ookbLink: PropTypes.string.isRequired,
  capeLink: PropTypes.string.isRequired,
  sisterSite: PropTypes.object.isRequired,
}
Footer.defaultProps = {
  capeLink: 'http://www.cape.io',
  currentYear: new Date().getFullYear(),
  ookbLink: 'http://www.ookb.co',
  sisterSite: {
    title: 'For the Rogers & Goffigon collection click here.',
    href: 'http://www.rogersandgoffigon.com/',
  },
}

export default Footer
