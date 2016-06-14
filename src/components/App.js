import React, { PropTypes } from 'react'
import Pricelist from './Pricelist/Pricelist'

function App() {
  return (
    <div id="wrapper">
      <Pricelist />
    </div>
  )
}

App.propTypes = {
  route: PropTypes.object.isRequired,
}

export default App
