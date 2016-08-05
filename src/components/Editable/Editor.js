import React, { PropTypes } from 'react'

// Supports editing a single field value.
function Editable({ entity }) {
  const msg = entity && `Editing id: ${entity.id}`
  return (
    <div className="editable">
      {msg && <p>{msg}</p>}
      <p>Where to position this??? as a modal on top of everything else? relative to what you're editing?</p>
    </div>
  )
}

Editable.propTypes = {
  classId: PropTypes.string.isRequired,
  entity: PropTypes.object,
}
Editable.defaultProps = {
}
export default Editable
