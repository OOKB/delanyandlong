import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { defaultTo, partial, unary } from 'lodash'
import { clear, onChange, fieldValue } from 'redux-field'
import { editCollection } from 'cape-redux-collection'
import Button from '../Button'

function ProjectEdit({ clearField, close, handleChange, onSubmit, id, title, value }) {
  const label = 'Title:'
  function handleSubmit(event) {
    event.preventDefault()
    close()
    clearField()
    onSubmit(value)
  }
  function cancel() {
    close()
    clearField()
  }
  return (
    <li className="p1 bt1 fs0p8 ls0p15">
      <form onSubmit={handleSubmit}>
        <label htmlFor={id}>
          {label}
          <input id={id} type="text" onChange={handleChange} value={defaultTo(value, title)} />
        </label>
        {value && <input type="submit" value="Submit" />}
      </form>
      <Button onClick={cancel} icon="close" />
    </li>
  )
}
ProjectEdit.propTypes = {
  clearField: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
}
ProjectEdit.defaultProps = {
}
const prefix = [ 'collection', 'title' ]
function getState(state) { return { value: fieldValue(prefix)(state) } }
const actions = {
  close: unary(partial(editCollection, null)),
  clearField: partial(clear, prefix),
  handleChange: partial(onChange, prefix),
}
export default connect(getState, actions)(ProjectEdit)
