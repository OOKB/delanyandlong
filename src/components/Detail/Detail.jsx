import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import classnames from 'classnames'

import DetailFooter from './DetailFooter'
import DetailHeader from './DetailHeader'
import Info from '../Info'
import Related from '../../containers/Related'
import Close from '../CloseButton'
// import Images from '../Editable/ImageUpload/Images'

function Detail({ detailClose, disclaimer, item }) {
  if (!item) return <p>No item data. Loading or invalid URL.</p>
  return (
    <div id="detailWrapper" className={classnames('absolute', item.category)}>
      <DetailHeader />
      <Info item={item} />
      <div className="imageWrapper absolute z1">
        <img src={`${item.img}?w=1500&fm=pjpg`} alt={item.id} />
      </div>
      <Related parent={item} />
      <Close onClick={detailClose} />
      <div className="loading center fixed z0">
        <i className="fa fa-multiplication fa-spin fa-3x fa-fw light-gray" />
        <span className="sr-only">Loading...</span>
      </div>
      <DetailFooter {...disclaimer} />
    </div>
  )
}

Detail.propTypes = {
  item: PropTypes.object,
  detailClose: PropTypes.func.isRequired,
  disclaimer: PropTypes.object,
  route: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
}
Detail.defaultProps = {
  detailClose: noop,
}
export default Detail
