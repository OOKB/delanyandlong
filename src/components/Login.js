import React, { PropTypes } from 'react'

import Header from './Header'
import Footer from './Footer'
import Icon from './Icon'
import FormField from '../containers/FormField'

function Submit({ onClick }) {
  return (
    <div className="icon-group">
      <button type="submit" onClick={onClick}>
        <Icon className="absolute labelLike" symbol="sign-in" hidden /> Log In
      </button>
    </div>
  )
}
Submit.propTypes = {
  onClick: PropTypes.func.isRequired,
}

function Login({ actQ, custNum, mustHave, noActQ, onClick, showZip, showLoginButton, small, zip }) {
  return (
    <div id="trade">
      <Header />
      <main className="container">
        <div className="login-wrapper">
          <FormField {...custNum} />
          {showZip && <FormField {...zip} />}
          {showLoginButton && <Submit onClick={onClick} />}
        </div>
        <div className="help-text">
          <ul className="list-reset group">
            <li className="mb2">
              <p>{mustHave}</p>
            </li>
            <li className="mb2">
              <p>
                <strong className="sans uppercase gray">{actQ}</strong><br />
                Use your full Delany and Long account number in the <code className="uppercase dark-gold">Account Number</code> field and the ZIP Code associated with your account in the <code className="uppercase dark-gold">ZIP Code</code> field. Customers outside the US may need to use their country name. Contact <a href="customerservice@delanyandlong.com">customer service</a> if your ZIP code or postal code does not allow access.
              </p>
            </li>
            <li>
              <p>
                <strong className="sans uppercase gray">{noActQ}</strong> <br />Please contact us at <a href="customerservice@delanyandlong.com">customerservice @ delanyandlong.com</a>.
              </p>
            </li>
            <li>
              <p className="small">{small}</p>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Login.propTypes = {
  actQ: PropTypes.string.isRequired,
  custNum: PropTypes.object.isRequired,
  mustHave: PropTypes.string.isRequired,
  noActQ: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  small: PropTypes.string.isRequired,
  zip: PropTypes.object.isRequired,
}
Login.defaultProps = {}
export default Login
