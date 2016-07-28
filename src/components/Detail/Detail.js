import React, { PropTypes } from 'react'
import noop from 'lodash/noop'

import DetailHeader from './DetailHeader'
import Info from '../Info'
import Related from './Related'
import Close from '../CloseButton'

function Detail({ onClick, item, colors }) {
  return (
    <div id="detailWrapper" className="fixed">
      <DetailHeader />
      <Info item={item} />
      <img className="absolute" src={item.img} alt={item.id} />
      <Related colors={colors} parent={item} />
      <Close onClick={onClick} />
    </div>
  )
}

Detail.propTypes = {
  confirmFavorite: PropTypes.func.isRequired,
  endFavorite: PropTypes.func.isRequired,
  favorite: PropTypes.object,
  favoriteItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}
Detail.defaultProps = {
  onClick: noop,
}
export default Detail
