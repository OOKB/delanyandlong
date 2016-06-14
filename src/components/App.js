import React, { PropTypes } from 'react'
import Pricelist from './Pricelist/Pricelist'

function App() {
  return (
    <div id="wrapper">
      <h1>pricelist</h1>
      <Pricelist />
    </div>
  )
}

App.propTypes = {
  route: PropTypes.object.isRequired,
}

export default App
