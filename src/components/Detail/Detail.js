import React, { PropTypes } from 'react'

import DetailHeader from './DetailHeader'
import Info from '../Info'
import Related from './Related'
import Close from '../CloseButton'

function Detail({ onClick, item, colors }) {
  return (
    <div id="detailWrapper">
      <DetailHeader />
      <Info item={item} />
      <img src={item.img} alt={item.id} />
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

export default Detail
