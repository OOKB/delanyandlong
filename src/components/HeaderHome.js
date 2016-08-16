import React, { PropTypes } from 'react'

import Menu from './MenuHome'
import Logo from './Logo'

function Header({ links }) {
  return (
    <header>
      <div className="left three-x">
        <div className="outer tile twelve-by-three">
          <div className="inner">
            <div className="flex-center text-center">
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <nav className="left two-x">
        <div className="outer tile eight-by-three">
          <div className="inner">
            <div className="flex-center">
              <Menu links={links} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  links: PropTypes.array.isRequired,
}
Header.defaultProps = {
}
export default Header
