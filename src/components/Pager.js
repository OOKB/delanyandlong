import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import classnames from 'classnames'
import Select from './Editable/InputSelect'

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
    <div id="pager" className="flex-center bt2 bb2">
      <button onClick={prev} className={classnames('prev control', { disabled: !hasLess })} disabled={!hasLess}>
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
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
      <button onClick={next} className={classnames('next control', { disabled: !hasMore })} disabled={!hasMore}>
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
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
