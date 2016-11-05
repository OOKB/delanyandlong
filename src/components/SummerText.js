import React, { PropTypes } from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'

import { discMsgTxt } from '../redux/select/disc'

function SummerText({ active, texts }) {
  return active && (
    <div>{map(texts, txt => <div>{txt}</div>)}</div>
  )
}
SummerText.propTypes = {
  active: PropTypes.bool.isRequired,
  texts: PropTypes.arrayOf(PropTypes.string),
}

export default connect(discMsgTxt)(SummerText)
