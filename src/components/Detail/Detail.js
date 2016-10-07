import React, { PropTypes } from 'react'
import noop from 'lodash/noop'
import classnames from 'classnames'

import DetailHeader from './DetailHeader'
import Info from '../Info'
import Related from '../../containers/Related'
import Close from '../CloseButton'
import Images from '../Editable/ImageUpload/Images'

function Detail({ detailClose, item, route }) {
  const editing = route.id === 'itemEdit'
  if (!item) return <p>No image data</p>
  return (
    <div id="detailWrapper" className={classnames('absolute', { editing })}>
      <DetailHeader />
      <Info item={item} />
      <div className={classnames('imageWrapper fixed', item.category)} style={{ zIndex: -1 }}>
        <img src={`${item.img}?w=1500`} alt={item.id} />
        {editing &&
          <Images subject={item} style={{ marginTop: 100 }} />
        }
      </div>
      <Related parent={item} />
      <Close onClick={detailClose} />
    </div>
  )
}

Detail.propTypes = {
  confirmFavorite: PropTypes.func.isRequired,
  endFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.object,
  favoriteItem: PropTypes.func.isRequired,
  item: PropTypes.object,
  detailClose: PropTypes.func.isRequired,
  route: PropTypes.object.isRequired,
}
Detail.defaultProps = {
  detailClose: noop,
}
export default Detail
