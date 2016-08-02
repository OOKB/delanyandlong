import React, { PropTypes } from 'react'

// Supports editing a single field value.
function Editable({ editing }) {
  return (
    <div className="editable">
      {editing && <p>editing</p>}
    </div>
  )
}

Editable.propTypes = {
  editing: PropTypes.bool.isRequired,
}
Editable.defaultProps = {
  editing: false,
}
export default Editable
