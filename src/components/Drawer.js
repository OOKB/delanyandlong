import React, { PropTypes } from 'react'

import Icon from './Icon'

function Drawer() {
  return (
    <section className="drawer bg-light-gold p2 relative inset-shadow">
      <button className="absolute b1 dark-gold close block fs1 bg-light-gold top-1 right-1">
        <Icon symbol="times" />
      </button>
      <div className="container mb0 pb0 maxw50rem">
        <div className="group mb0">
          <img alt="a thing" className="six columns mb0 b1 p05 white" src="https://b2.cape.io/file/delanyandlong/test7.jpg" />
          <div className="six columns mb0">
            <h1 className="dark-gold m0 mb05">Online Summer Fabric Sale</h1>
            <p className="m0">Two weeks only</p>
            <p className='m0 mono uppercase'>July 11th – July 25th, 2016</p>
            <h2 className="dark-gold m0 mt1 small uppercase">to the trade only</h2>
            <p className='m0 mono uppercase'>Great discounts! Up to 75% off!</p>
            <ul className="mt1 list-reset">
              <li>To access the sale items login with your customer#</li>
              <li>Contact customer service for inventory: 203.532.0010</li>
              <li>5yd minimum</li>
              <li>Limited Quantities</li>
              <li>Your CFA is your sample</li>
              <li>Reserves for 10days only</li>
              <li>Shipping charges may apply</li>
            </ul>
            <p className="mono uppercase small">All fabrics sold as is. All sales Final. No returns or exchanges. Payment by check or credit card.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

Drawer.propTypes = {
  currentYear: PropTypes.number.isRequired,
  ookbLink: PropTypes.string.isRequired,
  capeLink: PropTypes.string.isRequired,
  sisterSite: PropTypes.object.isRequired,
}
Drawer.defaultProps = {
  capeLink: 'http://www.cape.io',
  currentYear: new Date().getFullYear(),
  ookbLink: 'http://www.ookb.co',
  sisterSite: {
    title: 'For the Rogers & Goffigon collection click here.',
    href: 'http://www.rogersandgoffigon.com/',
  },
}

export default Drawer
