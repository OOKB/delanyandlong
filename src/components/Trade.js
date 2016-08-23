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
          <div className="input-group accountNumber">
            <label>
              <i className="fa fa-hashtag light-gray" aria-hidden="true"></i>
            </label>
            <input placeholder="D&L Account Number" />
          </div>
          <div className="input-group zipCode">
            <label>
              <i className="fa fa-hashtag light-gray" aria-hidden="true"></i>
            </label>
            <input placeholder="ZIP Code" />
          </div>
          <div className="icon-group">
            <label>
              <i className="fa fa-sign-in white" aria-hidden="true"></i>
            </label>
            <button className="btn-outline" type="submit">Log In</button>
          </div>
        </div>
        <div className="help-text mt4 pt2 bt1 light-gray-border">
          <ul className="list-reset">
            <li><p>You must have a Trade Account to see prices and utilize other special features.</p></li>
            <li>
            <p><strong className="sans uppercase dark-gold">Do you have an existing account with us but don't know your login information?</strong> <br />Use your full Delany and Long account number in the <code className="uppercase bg-light-gray px025">Account Number</code> field and the ZIP Code associated with your account in the <code className="uppercase bg-light-gray px025">ZIP Code</code> field.</p></li>
            <li><p><strong className="dark-gold sans uppercase">Are you a trades person and without an existing account?</strong> <br />Please contact us at <a href="customerservice@delanyandlong.com">customerservice@delanyandlong.com</a>.</p></li>
            <li className="mt4 small"><p>Accounts are available to trades people only (designers, re-sellers and industry members) and are not meant for regular customers.</p></li>
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
