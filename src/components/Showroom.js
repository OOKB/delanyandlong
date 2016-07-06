import React, { PropTypes } from 'react'

function Showroom({ title, name, address, email, tel, fax }) {
  return (
    <li className="showroom">
      stuff.
      <h3>{title}</h3>
      <p>{name}</p>
      <address>
        {address}
      </address>
      <ul className="connect list-reset">
        <li>{email}</li>
        <li>{tel}</li>
        <li>{fax}</li>
      </ul>
    </li>
  )
}

Showroom.propTypes = {
}

export default Showroom
