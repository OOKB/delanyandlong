import React, { PropTypes } from 'react'

function Loader({}) {

  return (
    <div>
      <svg version="1.1" classname="svg-divider" x="0px" y="0px" viewBox="0 0 80 3">
        <rect
          x="1"
          fill="#c6c3b9"
          width="20"
          height=".2"
        >
          <animate
            attributeName="x"
            attributeType="XML"
            values="0; 60; 0"
            begin="0s" dur="1.5s" repeatCount="indefinite"
          />
        </rect>
      </svg>
    </div>
  )
}

Loader.propTypes = {
}
Loader.defaultProps = {
}
export default Loader
