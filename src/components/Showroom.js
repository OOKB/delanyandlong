import React, { PropTypes } from 'react'

import Page from './Page'

function Showroom({ email, name, telephone, title }) {
  const header = name || title
  return (
    <Page>
      <main>
        <h2>Showroom</h2>
        {header && <h3>{header}</h3>}
        {email && <div>{email}</div>}
        {telephone && <phone>{telephone}</phone>}
      </main>
    </Page>
  )
}

Showroom.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  telephone: PropTypes.string,
  title: PropTypes.string,
}
Showroom.defaultProps = {
}

export default Showroom
