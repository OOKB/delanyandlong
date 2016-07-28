import React, { PropTypes } from 'react'
import map from 'lodash/map'

function Office({ address, email, name, tel, fax, title }) {
  const onClick = event => {
    event.preventDefault()
    window.location.href = `mailto:${email}`
  }
  return (
    <li className="office four columns">
      <h3>{title}</h3>
      {name && <h4>{name}</h4>}
      <address>
        {map(address, (line, index) => <span key={index}>{line}<br /></span>)}
      </address>
      <ul className="list-reset connect">
        <li>{email && <button onClick={onClick}>{email}</button>}</li>
        <li>{tel && <phone>{tel}</phone>}</li>
        <li>{fax && <phone>fax: {fax}</phone>}</li>
      </ul>
    </li>
  )
}
Office.propTypes = {
  address: PropTypes.array.isRequired,
  email: PropTypes.string,
  name: PropTypes.string,
  tel: PropTypes.string,
  fax: PropTypes.string,
  title: PropTypes.string.isRequired,
}

function Offices({ items }) {
  return (
    <ul className="list-reset group bt1 pt2 pb2">
      {map(items, item => <Office key={item.id} {...item} />)}
    </ul>
  )
}

Offices.propTypes = {
  items: PropTypes.array.isRequired,
}

export default Offices
