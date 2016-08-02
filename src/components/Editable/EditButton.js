import React, { PropTypes } from 'react'

import ButtonEl from '../Button'

function EditButton({ onClick }) {
  return (
    <ButtonEl
      className="edit"
      icon="pencil-square-o"
      onClick={onClick}
      title="Edit this item"
    />
  )
}

EditButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  item: PropTypes.object,
}

export default EditButton
