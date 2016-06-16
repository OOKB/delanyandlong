import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import classnames from 'classnames'
import Select from './InputSelect'

function Pager(props) {
  const { formEvent, hasLess, hasMore, maxPage, pageIndex, pageSizeOptions, pgSize, pgSizePrefix,
  } = props
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
      <button onClick={prev} className={classnames({ disabled: !hasLess })} disabled={!hasLess}>
        Previous
      </button>
      <Select options={pageSizeOptions} prefix={pgSizePrefix} value={pgSize.toString()} />
      <div className="pagecount">{pageCount}</div>
      <button onClick={next} className={classnames({ disabled: !hasMore })} disabled={!hasMore}>
        Next
      </button>
    </div>
  )
}

Pager.propTypes = {
  formEvent: PropTypes.object.isRequired,
  hasLess: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  maxPage: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageSizeOptions: PropTypes.array.isRequired,
  pgSize: PropTypes.number.isRequired,
  pgSizePrefix: PropTypes.array.isRequired,
}

export default connectField()(Pager)
