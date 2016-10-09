import React, { PropTypes } from 'react'

import Page from './Page'

function Showroom({ sales: { email, name, telephone } }) {
  return (
    <Page>
      <main>
        <h2>Showroom</h2>
        {name && <h3>{name}</h3>}
        {email && <div>{email}</div>}
        {telephone && <phone>{telephone}</phone>}
      </main>
    </Page>
  )
}

Showroom.propTypes = {
  sales: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    telephone: PropTypes.string,
  }),
}
Showroom.defaultProps = {
}

export default Showroom
