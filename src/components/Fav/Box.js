import React, { PropTypes } from 'react'

import Close from '../CloseButton'

function FavAlertBox({ children, message, onClose }) {
  return (
    <div className="favorite popup absolute p1" style={{ zIndex: 10 }}>
      <Close onClick={onClose} />
      <div className="outer">
        <div className="inner">
          {message && <p className="m0 mb1">{message}</p>}
          {children}
        </div>
      </div>
    </div>
  )
}
FavAlertBox.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
  onClose: PropTypes.func.isRequired,
}

export default FavAlertBox
