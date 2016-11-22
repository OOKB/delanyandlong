import React, { PropTypes } from 'react'

import Close from './CloseButton'

function Drawer({ disclaimer, onClose, title }) {
  return (
    <section className="drawer bg-light-gold p2 relative inset-shadow">

      <Close onClick={onClose} className="right-1 top-1" />

      <div className="mb0 pb0 maxw50rem mlrauto clearfix">

        <img alt="a thing" className="six columns mb0 b1 p05 white" src="https://b2.cape.io/file/delanyandlong/test7.jpg" />

        <div className="six columns mb0">

          <h1 className="dark-gold m0 mb05">{title}</h1>

          <p className="m0">Two weeks only</p>

          <p className="m0 mono uppercase">July 11th – July 25th, 2016</p>

          <h2 className="dark-gold m0 mt1 small uppercase">to the trade only</h2>

          <p className="m0 mono uppercase">Great discounts! Up to 75% off!</p>

          <ul className="mt1 list-reset">
            <li>To access the sale items login with your customer#</li>
            <li>Contact customer service for inventory: 203.532.0010</li>
            <li>5yd minimum</li>
            <li>Limited Quantities</li>
            <li>Your CFA is your sample</li>
            <li>Reserves for 10days only</li>
            <li>Shipping charges may apply</li>
          </ul>

          <p className="mono uppercase small">{disclaimer}</p>

        </div>

      </div>

    </section>
  )
}

Drawer.propTypes = {
  disclaimer: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}
Drawer.defaultProps = {
  disclaimer: 'All fabrics sold as is. All sales Final. No returns or exchanges. Payment by check or credit card.',
  title: 'Online Summer Fabric Sale',
}

export default Drawer
