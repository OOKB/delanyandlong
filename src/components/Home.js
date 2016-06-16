import React, { PropTypes } from 'react'

function Home() {
  return (
    <div id="wrapper">
      Home
    </div>
  )
}

Home.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Home
