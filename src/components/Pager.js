import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import classnames from 'classnames'
import Select from './InputSelect'

function Pager(props) {
  const { displayStyle, formEvent, hasLess, hasMore, maxPage,
    pageIndex, pageSizeOptions, pgSize, pgSizePrefix,
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
    <div id="pager" className="flex-center bt2 bb2 pt1 pb1 mt1 mb1">
      <button onClick={prev} className={classnames({ disabled: !hasLess })} disabled={!hasLess}>
        Previous
      </button>
      <Select
        label="Display Style"
        options={displayStyle.options}
        prefix={displayStyle.prefix}
        value={displayStyle.active}
      />
      <Select
        label="View Qty"
        options={pageSizeOptions}
        prefix={pgSizePrefix}
        value={pgSize.toString()}
      />
      <div className="pagecount">{pageCount}</div>
      <button onClick={next} className={classnames({ disabled: !hasMore })} disabled={!hasMore}>
        Next
      </button>
    </div>
  )
}

Pager.propTypes = {
  displayStyle: PropTypes.object.isRequired,
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
