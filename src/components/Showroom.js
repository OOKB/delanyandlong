import React, { PropTypes } from 'react'
import Header from './Header'

function Showroom({ sales: { email, name, telephone } }) {
  return (
    <div>
      <Header />
      <h2>Showroom</h2>
      {name && <h3>{name}</h3>}
      {email && <div>{email}</div>}
      {telephone && <phone>{telephone}</phone>}
    </div>
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
