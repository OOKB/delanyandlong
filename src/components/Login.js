import React, { PropTypes } from 'react'

import Header from './Header'
import Footer from './Footer'
import Icon from './Icon'
import FormField from '../containers/FormField'

const custNum = {
  className: 'accountNumber',
  icon: { className: 'light-gray', symbol: 'hashtag' },
  placeholder: 'D&L Account Number',
  prefix: [ 'login', 'customerNumber' ],
  validators: [ 'numString', [ 'length', 6 ] ],
}
const zip = {
  className: 'zipCode',
  icon: { className: 'light-gray', symbol: 'hashtag' },
  placeholder: 'Postal Code',
  prefix: [ 'login', 'postalCode' ],
}

function Login({ actQ, onClick, small }) {
  return (
    <div id="trade">
      <Header />
      <main className="container">
        <div className="login-wrapper">
          <FormField {...custNum} />
          <FormField {...zip} />
          <div className="icon-group">
            <label><Icon className="shite" symbol="sign-in" hidden /></label>
            <button className="btn-outline" type="submit" onClick={onClick}>Log In</button>
          </div>
        </div>
        <div className="help-text">
          <ul className="list-reset group">
            <li className="mb2">
              <p>
                You must have a Trade Account to view prices and utilize the other special features.
              </p>
            </li>
            <li className="mb2">
              <p>
                <strong className="sans uppercase gray">{actQ}</strong><br />
                Use your full Delany and Long account number in the <code className="uppercase dark-gold">Account Number</code> field and the ZIP Code associated with your account in the <code className="uppercase dark-gold">ZIP Code</code> field.
              </p>
            </li>
            <li>
              <p>
                <strong className="sans uppercase gray">Are you a trades person and without an existing account?</strong> <br />Please contact us at <a href="customerservice@delanyandlong.com">customerservice @ delanyandlong.com</a>.
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
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  small: PropTypes.string.isRequired,
}
Login.defaultProps = {}
export default Login
