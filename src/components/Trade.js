import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { homeSelector } from '../redux/select/home'
import Header from './Header'
import Footer from './Footer'

function Trade({ menu, route }) {
  return (
    <div id="trade">
      <Header activeId={route.id} links={menu} />
      <main className="container">
        <div className="login-wrapper">
          <div className="input-group">
            <label>
              D&L Account Number
            </label>
            <input />
          </div>
          <div className="input-group">
            <label>
              Zip Code
            </label>
            <input />
          </div>
          <button className="btn-outline" type="submit">Log In</button>
        </div>
        <div className="help-text small mt4 bt1">
          <ul className="list-reset">
            <li><p><strong>Have an existing account with us but don't know your login information?</strong><br />Use your full account number as your user name and ZIP code as your password.</p></li>
            <li><p><strong>If you are a trades person and do not have an existing account...</strong><br />Please contact us at <a href="customerservice@delanyandlong.com">customerservice@delanyandlong.com</a>.</p></li>
            <li><p>Accounts are available to trades people only (designers, re-sellers and industry members) and are not meant for regular customers.</p></li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Trade.propTypes = {
  items: PropTypes.array.isRequired,
  menu: PropTypes.array.isRequired,
  missingImage: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
}

export default connect(homeSelector)(Trade)
