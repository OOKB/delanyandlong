import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

function Pager({ formEvent, hasLess, hasMore, maxPage, pageIndex }) {
  const { onChange } = formEvent
  const pageCount = `${pageIndex} / ${maxPage}`
  function prev() {
    if (hasLess) onChange(pageIndex - 1)
  }
  function next() {
    if (hasMore) onChange(pageIndex + 1)
  }
  return (
    <div id="pager">
      <button onClick={prev}>Previous</button>
      <div className="pagecount">{pageCount}</div>
      <button onClick={next}>Next</button>
    </div>
  )
}

Pager.propTypes = {
  formEvent: PropTypes.object.isRequired,
  hasLess: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  maxPage: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
}

export default connectField()(Pager)
