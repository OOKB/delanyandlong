import React, { PropTypes } from 'react'
import map from 'lodash/map'

function Office({ address, email, name, tel, title }) {
  const onClick = event => {
    event.preventDefault()
    window.location.href = `mailto:${email}`
  }
  return (
    <li>
      <h3>{title}</h3>
      {name && <p>{name}</p>}
      <address>
        {map(address, (line, index) => <span key={index}>{line}<br /></span>)}
      </address>
      {email && <button onClick={onClick}>{email}</button>}
      {tel && <phone>{tel}</phone>}
    </li>
  )
}
Office.propTypes = {
  address: PropTypes.array.isRequired,
  email: PropTypes.string,
  name: PropTypes.string,
  tel: PropTypes.string,
  title: PropTypes.string.isRequired,
}

function About({ items }) {
  return (
    <ul>
      {map(items, item => <Office key={item.id} {...item} />)}
    </ul>
  )
}

About.propTypes = {
  items: PropTypes.array.isRequired,
}

export default About
